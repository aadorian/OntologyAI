import React, { useState, useEffect, useMemo } from 'react';
import ForceGraph from './components/ForceGraph';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import DLQueryInterface from './components/DLQueryInterface';
import { parseOntology } from './utils/parser';
import { ONTOLOGY_XML } from './constants'; // XML from user prompt
import { GraphNode, GraphData } from './types';
import { Network, Upload, Info, MessageSquare, BrainCircuit } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<GraphData>({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [xmlInput, setXmlInput] = useState<string>(ONTOLOGY_XML); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDLQueryOpen, setIsDLQueryOpen] = useState(false);
  
  // Parse XML on load or change
  useEffect(() => {
    try {
        const graphData = parseOntology(xmlInput);
        setData(graphData);
    } catch (e) {
        console.error("Failed to parse ontology", e);
    }
  }, [xmlInput]);

  const handleNodeClick = (node: GraphNode | null) => {
    setSelectedNode(node);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (content) {
            setXmlInput(content);
            setSelectedNode(null); // Reset selection
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100 font-sans text-slate-900">
      
      {/* Header */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20">
        <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Network className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight">Ontology Graph Viewer</h1>
        </div>
        
        <div className="flex items-center gap-4">
             <button 
                onClick={() => { setIsDLQueryOpen(!isDLQueryOpen); setIsChatOpen(false); }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${isDLQueryOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
             >
                <BrainCircuit size={16} />
                <span>DL Query</span>
             </button>

             <button 
                onClick={() => { setIsChatOpen(!isChatOpen); setIsDLQueryOpen(false); }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${isChatOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
             >
                <MessageSquare size={16} />
                <span>SPARQL Chat</span>
             </button>
             
             <label className="flex items-center gap-2 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-1.5 rounded-md text-sm font-medium text-slate-700">
                <Upload size={16} />
                <span>Load RDF/XML</span>
                <input type="file" accept=".xml,.rdf,.owl" onChange={handleFileUpload} className="hidden" />
             </label>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {data.nodes.length > 0 ? (
            <ForceGraph 
                data={data} 
                onNodeClick={handleNodeClick}
                selectedNodeId={selectedNode?.id}
            />
        ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
                <p>Loading Ontology...</p>
            </div>
        )}
        
        {/* Detail Sidebar */}
        <Sidebar 
            node={selectedNode} 
            links={data.links}
            onClose={() => setSelectedNode(null)} 
            onNodeSelect={handleNodeClick}
        />

        {/* Chat Interface */}
        <ChatInterface 
            xmlData={xmlInput} 
            isOpen={isChatOpen} 
            onClose={() => setIsChatOpen(false)} 
        />

        {/* DL Query Interface */}
        <DLQueryInterface 
            xmlData={xmlInput} 
            isOpen={isDLQueryOpen} 
            onClose={() => setIsDLQueryOpen(false)} 
        />
        
        {/* Stats Overlay */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
            <div className="bg-white/80 backdrop-blur rounded px-3 py-2 text-xs text-slate-500 shadow-sm border border-slate-200">
                <span className="font-semibold">{data.nodes.length}</span> Nodes • <span className="font-semibold">{data.links.length}</span> Links
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;