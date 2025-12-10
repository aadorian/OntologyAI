import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BrainCircuit, Play, X, Loader2, HelpCircle, AlertCircle, Lightbulb, Code2 } from 'lucide-react';

interface DLQueryInterfaceProps {
  xmlData: string;
  isOpen: boolean;
  onClose: () => void;
}

const DL_EXAMPLES = [
  "Researcher",
  "Record",
  "Researcher and appliesMethod some Interview",
  "ResearchProject and hasResearcher value Researcher_DrSmith",
  "SubjectObject and hasSubjectObjects some Record",
  "Code and hasRelatedCode some Code",
  "AnalyticCategory or DescriptiveCategory",
  "Record and isInterpreted some Interpretation",
  "GroundedTheory and hasElaboratedTheory some AnalyticCategory",
  "FieldOfStudy and hasSubjectObjectApplication some SubjectObject"
];

const MANCHESTER_KEYWORDS = ["and", "or", "not", "some", "only", "value", "min", "max", "exactly", "that", "inverse", "self", "has"];

const DLQueryInterface: React.FC<DLQueryInterfaceProps> = ({ xmlData, isOpen, onClose }) => {
  const [expression, setExpression] = useState('');
  const [executedQuery, setExecutedQuery] = useState<string | null>(null);
  const [result, setResult] = useState<{ subclasses: string[], instances: string[], explanation: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const backdropRef = useRef<HTMLDivElement>(null);

  const handleExecute = async (overrideExpression?: string) => {
    const exprToRun = overrideExpression || expression;
    if (!exprToRun.trim()) return;
    
    if (overrideExpression) setExpression(overrideExpression);
    setExecutedQuery(exprToRun);

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemPrompt = `
        You are an expert OWL Ontology Reasoner and Semantics Engine.
        You are provided with the following RDF/XML ontology data:
        
        \`\`\`xml
        ${xmlData.slice(0, 60000)} 
        \`\`\`

        The user will provide a **Description Logic (DL) Class Expression** (likely in Manchester Syntax or natural language approximation).
        
        Your task is to:
        1. Parse the class expression (e.g., "Researcher and appliesMethod some Interview").
        2. Reason over the provided ontology data to find entities that match this expression.
        3. Return the result in a strict JSON format.

        **JSON Format:**
        {
          "subclasses": ["List of Class labels that are subclasses of the expression"],
          "instances": ["List of Named Individual labels that are instances of the expression"],
          "explanation": "A brief, one-sentence explanation of the reasoning logic used."
        }

        If no matches are found, return empty arrays. Do not halluncinate entities not present in the XML.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: exprToRun,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text;
      if (responseText) {
          const parsed = JSON.parse(responseText);
          setResult(parsed);
      } else {
          setError("No response from reasoner.");
      }
      
    } catch (err) {
      console.error("DL Reasoner Error:", err);
      setError("Failed to execute query. Check API Key or Syntax.");
    } finally {
      setIsLoading(false);
    }
  };

  const SyntaxHighlighter = ({ text, className = "" }: { text: string, className?: string }) => {
    // Basic tokenizer for Manchester syntax highlighting
    const parts = text.split(new RegExp(`\\b(${MANCHESTER_KEYWORDS.join("|")})\\b`, "gi"));
    return (
        <span className={`font-mono ${className}`}>
            {parts.map((part, i) => {
                if (MANCHESTER_KEYWORDS.includes(part.toLowerCase())) {
                    return <span key={i} className="text-purple-600 font-bold">{part}</span>;
                }
                return <span key={i}>{part}</span>;
            })}
        </span>
    );
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
      if (backdropRef.current) {
          backdropRef.current.scrollTop = e.currentTarget.scrollTop;
          backdropRef.current.scrollLeft = e.currentTarget.scrollLeft;
      }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-20 right-6 w-[450px] bg-white rounded-xl shadow-2xl border border-slate-200 flex flex-col z-30 font-sans overflow-hidden max-h-[85vh]">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-2">
          <BrainCircuit size={18} />
          <h3 className="font-bold text-sm">DL Query Reasoner</h3>
        </div>
        <div className="flex items-center gap-2">
            <a 
                href="http://protegeproject.github.io/protege/class-expression-syntax/" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/80 hover:text-white transition-colors"
                title="Manchester Syntax Reference"
            >
                <HelpCircle size={18} />
            </a>
            <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X size={18} />
            </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-b border-slate-100 shrink-0 z-10">
        <div className="flex justify-between items-end mb-2">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide">
                Class Expression
            </label>
            <span className="text-[10px] text-slate-400 font-mono">Manchester Syntax</span>
        </div>
        
        <div className="relative w-full h-24 group">
            {/* Backdrop for highlighting */}
            <div 
                ref={backdropRef}
                className="absolute inset-0 p-3 text-sm font-mono whitespace-pre-wrap break-words overflow-hidden bg-white border border-transparent rounded-lg text-slate-800 pointer-events-none"
                aria-hidden="true"
            >
               <SyntaxHighlighter text={expression + (expression.endsWith('\n') ? ' ' : '')} />
            </div>

            {/* Actual Input */}
            <textarea
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                onScroll={handleScroll}
                spellCheck={false}
                placeholder="e.g. Researcher and appliesMethod some Interview"
                className="absolute inset-0 w-full h-full p-3 text-sm font-mono bg-transparent border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-transparent caret-slate-900 placeholder:text-slate-300 shadow-sm whitespace-pre-wrap break-words z-10"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleExecute();
                    }
                }}
            />

            <button
                onClick={() => handleExecute()}
                disabled={isLoading || !expression.trim()}
                className="absolute bottom-3 right-3 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md flex items-center gap-1 z-20"
                title="Execute Query"
            >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} fill="currentColor" />}
            </button>
        </div>
      </div>

      {/* Examples Carousel */}
      <div className="bg-slate-50 border-b border-slate-100 p-3 shrink-0">
          <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
              <Lightbulb size={12} className="text-amber-500" />
              <span>Examples (Click to Run)</span>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {DL_EXAMPLES.map((ex, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleExecute(ex)}
                    disabled={isLoading}
                    className="flex-shrink-0 bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 text-[10px] px-2 py-1.5 rounded-md border border-slate-200 hover:border-emerald-200 transition-colors whitespace-nowrap text-left shadow-sm group"
                  >
                      <SyntaxHighlighter text={ex} />
                  </button>
              ))}
          </div>
      </div>

      {/* Results Area */}
      <div className="flex-1 overflow-y-auto p-0 min-h-0 bg-slate-50/30">
        {error && (
            <div className="p-4 text-red-600 bg-red-50 text-xs flex items-center gap-2 border-b border-red-100">
                <AlertCircle size={14} /> {error}
            </div>
        )}

        {!result && !isLoading && !error && (
            <div className="p-8 text-center text-slate-400 text-sm flex flex-col items-center gap-3">
                <Code2 size={32} className="text-slate-300" />
                <p>Enter a class expression to see inferred hierarchy.</p>
            </div>
        )}

        {executedQuery && result && (
             <div className="p-4 bg-white border-b border-slate-100">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-2">Executed Query</h4>
                <div className="bg-slate-50 p-3 rounded border border-slate-200 shadow-inner">
                    <SyntaxHighlighter text={executedQuery} className="text-sm text-slate-800" />
                </div>
             </div>
        )}

        {result && (
            <div className="divide-y divide-slate-100 pb-4">
                {/* Explanation */}
                <div className="p-4 bg-blue-50/50 text-xs text-blue-700 border-l-4 border-blue-400 m-4 rounded-r shadow-sm">
                    <span className="font-bold block mb-1">Reasoner Logic:</span> 
                    {result.explanation}
                </div>

                {/* Subclasses */}
                <div className="p-4">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center justify-between">
                        Inferred Subclasses
                        <span className="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">{result.subclasses.length}</span>
                    </h4>
                    {result.subclasses.length > 0 ? (
                        <ul className="space-y-1.5">
                            {result.subclasses.map((cls, idx) => (
                                <li key={idx} className="text-sm text-slate-700 bg-white border border-slate-200 px-2 py-1.5 rounded flex items-center gap-2 shadow-sm group hover:border-blue-300 transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                                    <span className="truncate font-medium">{cls}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-xs text-slate-400 italic pl-2 border-l-2 border-slate-200">No subclasses found.</p>
                    )}
                </div>

                {/* Instances */}
                <div className="p-4 bg-slate-50/50">
                    <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-3 flex items-center justify-between">
                        Inferred Instances
                        <span className="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">{result.instances.length}</span>
                    </h4>
                    {result.instances.length > 0 ? (
                        <ul className="space-y-1.5">
                            {result.instances.map((ind, idx) => (
                                <li key={idx} className="text-sm text-slate-700 bg-white border border-slate-200 px-2 py-1.5 rounded flex items-center gap-2 shadow-sm group hover:border-emerald-300 transition-colors">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 group-hover:scale-110 transition-transform"></span>
                                    <span className="truncate font-medium">{ind}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-xs text-slate-400 italic pl-2 border-l-2 border-slate-200">No instances found.</p>
                    )}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default DLQueryInterface;