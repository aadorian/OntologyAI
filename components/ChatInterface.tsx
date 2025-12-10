import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, X, MessageSquare, Bot, User, Loader2, PlayCircle, Lightbulb } from 'lucide-react';

interface ChatInterfaceProps {
  xmlData: string;
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

const EXAMPLE_QUERIES = [
  "List all Research Projects and their Researchers.",
  "What are the objectives of the 'Qualitative Education Study'?",
  "Which Theoretical Framework is being used?",
  "What research questions are posed?",
  "Show the methods applied by researcher 'Dr. Smith'.",
  "List all data records collected from 'University Students'.",
  "What codes emerged from the 'Initial Coding Interpretation'?",
  "Find the Core Category of the grounded theory.",
  "Show the relationship between Analytic and Descriptive categories.",
  "List all Bibliography entries and what records they refer to."
];

const ChatInterface: React.FC<ChatInterfaceProps> = ({ xmlData, isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am ready to query the ontology. Use the playground below or type your own question.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemPrompt = `
        You are an expert Semantic Web and Ontology Assistant. 
        You are provided with the following RDF/XML ontology data:
        
        \`\`\`xml
        ${xmlData.slice(0, 50000)} 
        \`\`\`
        (Note: Data may be truncated if too large, but assume this is the main context).

        The user will ask a question about this ontology.
        Your goal is to:
        1. Interpret the user's question.
        2. Generate a valid SPARQL query that would answer the question based on the ontology structure (Classes, Properties, Individuals). Use standard prefixes (rdf, rdfs, owl) and assume the base URI from the ontology.
        3. Provide the answer to the question in natural language, deriving it from the XML data provided.
        
        Format your response nicely. Put the SPARQL query in a code block.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: textToSend,
        config: {
          systemInstruction: systemPrompt,
        }
      });

      const text = response.text || "I couldn't generate a response.";
      
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error communicating with the AI service. Please check your API Key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute bottom-6 left-6 w-[450px] h-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col z-30 overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-2">
          <Sparkles size={18} />
          <h3 className="font-bold text-sm">SPARQL Playground & Chat</h3>
        </div>
        <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition-colors">
          <X size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-indigo-100 text-indigo-600'}`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed whitespace-pre-wrap ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white shadow-sm' 
                : 'bg-white border border-slate-200 text-slate-700 shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
           <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
               <Bot size={16} />
             </div>
             <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
                <Loader2 className="animate-spin text-slate-400" size={16} />
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Example Queries Playground */}
      <div className="bg-white border-t border-slate-100 p-3 shrink-0">
          <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <Lightbulb size={12} className="text-amber-500" />
              <span>Query Playground</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {EXAMPLE_QUERIES.map((query, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(query)}
                    disabled={isLoading}
                    className="flex-shrink-0 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs px-3 py-1.5 rounded-full border border-indigo-100 transition-colors whitespace-nowrap"
                  >
                      {query}
                  </button>
              ))}
          </div>
      </div>

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-slate-100 shrink-0">
        <div className="relative flex items-center">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a custom question..."
                className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-4 pr-12 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder:text-slate-400"
            />
            <button 
                onClick={() => handleSend()}
                disabled={isLoading || !input.trim()}
                className="absolute right-1.5 p-1.5 bg-indigo-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors"
            >
                <Send size={14} />
            </button>
        </div>
        <div className="text-[10px] text-center text-slate-400 mt-2">
            Powered by Gemini • Generates SPARQL & Answers based on RDF/XML
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;