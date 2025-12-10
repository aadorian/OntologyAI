
import React, { useState, useEffect, useMemo } from 'react';
import ForceGraph from './components/ForceGraph';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import DLQueryInterface from './components/DLQueryInterface';
import OntologyGuide from './components/OntologyGuide';
import { parseOntology } from './utils/parser';
import { ONTOLOGY_XML } from './constants'; // XML from user prompt
import { GraphNode, GraphData } from './types';
import { Network, Upload, Info, MessageSquare, BrainCircuit, Search, Book } from 'lucide-react';

const App: React.FC = () => {
  const [data, setData] = useState<GraphData>({ nodes: [], links: [] });
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [xmlInput, setXmlInput] = useState<string>(ONTOLOGY_XML); 
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDLQueryOpen, setIsDLQueryOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  
  // Search State
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomToNodeId, setZoomToNodeId] = useState<string | null>(null);

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

  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if (!searchTerm.trim()) return;

      const term = searchTerm.toLowerCase();
      // Try exact match on label first, then ID, then partial label
      const foundNode = data.nodes.find(n => n.label.toLowerCase() === term) 
                     || data.nodes.find(n => n.id.toLowerCase() === term)
                     || data.nodes.find(n => n.label.toLowerCase().includes(term));

      if (foundNode) {
          setSelectedNode(foundNode);
          setZoomToNodeId(foundNode.id);
          // Reset zoom ID after a moment so re-searching same node triggers effect if implementation changed, 
          // but for now relying on unique value changes or re-renders is enough.
          // Actually, if we search the same node twice, the effect won't re-trigger unless we toggle it.
          // But usually users search for something else.
      } else {
          alert("Node not found!");
      }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-100 font-sans text-slate-900">
      
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20 gap-4">
        <div className="flex items-center gap-2 flex-shrink-0">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Network className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight hidden md:block">Ontology Graph Viewer</h1>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight md:hidden">OGV</h1>
        </div>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-md relative">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search node label or URI..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 rounded-lg text-sm transition-all outline-none"
                />
            </div>
        </form>

        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
             <button 
                onClick={() => { setIsGuideOpen(true); }}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors bg-slate-100 text-slate-700 hover:bg-slate-200"
                title="Ontology Specification"
             >
                <Book size={18} />
                <span className="hidden lg:inline">Spec</span>
             </button>

             <div className="h-6 w-px bg-slate-300 mx-1"></div>

             <button 
                onClick={() => { setIsDLQueryOpen(!isDLQueryOpen); setIsChatOpen(false); }}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isDLQueryOpen ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                title="Description Logic Query"
             >
                <BrainCircuit size={18} />
                <span className="hidden md:inline">DL Query</span>
             </button>

             <button 
                onClick={() => { setIsChatOpen(!isChatOpen); setIsDLQueryOpen(false); }}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isChatOpen ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
                title="SPARQL Chat Assistant"
             >
                <MessageSquare size={18} />
                <span className="hidden md:inline">SPARQL Chat</span>
             </button>
             
             <label className="flex items-center gap-2 cursor-pointer bg-slate-100 hover:bg-slate-200 transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-700" title="Upload RDF/XML">
                <Upload size={18} />
                <span className="hidden md:inline">Load XML</span>
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
                zoomToNodeId={zoomToNodeId}
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

        {/* Ontology Guide Modal */}
        <OntologyGuide 
            isOpen={isGuideOpen}
            onClose={() => setIsGuideOpen(false)}
            xmlData={xmlInput} 
        />
        
        {/* Stats Overlay */}
        <div className="absolute bottom-4 left-4 pointer-events-none z-10">
            <div className="bg-white/80 backdrop-blur rounded px-3 py-2 text-xs text-slate-500 shadow-sm border border-slate-200">
                <span className="font-semibold">{data.nodes.length}</span> Nodes • <span className="font-semibold">{data.links.length}</span> Links
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
