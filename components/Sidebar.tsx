import React from 'react';
import { GraphNode, GraphLink, NodeType } from '../types';
import { X, ExternalLink, Tag, Database, ArrowRightLeft, ArrowRight, ArrowLeft, Code, ChevronDown } from 'lucide-react';

interface SidebarProps {
  node: GraphNode | null;
  links: GraphLink[];
  onClose: () => void;
  onNodeSelect: (node: GraphNode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ node, links, onClose, onNodeSelect }) => {
  if (!node) return null;

  // Helper to safely get ID from source/target which might be a string or object due to D3 mutation
  const getNodeId = (ref: string | GraphNode): string => {
    return typeof ref === 'object' ? ref.id : ref;
  };

  const getNodeLabel = (ref: string | GraphNode): string => {
    return typeof ref === 'object' ? ref.label : ref;
  };

  const getFullNode = (ref: string | GraphNode): GraphNode | undefined => {
      return typeof ref === 'object' ? ref : undefined;
  }

  // Filter links for this node
  // Outgoing: source is this node
  const outgoingLinks = links.filter(l => getNodeId(l.source) === node.id);
  
  // Incoming: target is this node
  const incomingLinks = links.filter(l => getNodeId(l.target) === node.id);

  return (
    <div className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl border-l border-slate-200 p-4 transform transition-transform duration-300 ease-in-out z-10 overflow-y-auto">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold text-slate-800 break-words flex-1 pr-2">
            {node.label}
        </h2>
        <button 
            onClick={onClose} 
            className="p-1 hover:bg-slate-100 rounded text-slate-500"
            aria-label="Close sidebar"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        
        {/* Type Badge */}
        <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                node.type === NodeType.Class 
                ? 'bg-blue-100 text-blue-800 border-blue-200' 
                : node.type === NodeType.Individual 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                : 'bg-gray-100 text-gray-800 border-gray-200'
            }`}>
                {node.type}
            </span>
        </div>

        {/* Relationships Section */}
        {(outgoingLinks.length > 0 || incomingLinks.length > 0) && (
            <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <ArrowRightLeft size={12} /> Relationships
                </h3>
                
                <div className="space-y-4">
                    {/* Outgoing */}
                    {outgoingLinks.length > 0 && (
                        <div>
                            <span className="text-xs font-medium text-slate-400 flex items-center gap-1 mb-2">
                                <ArrowRight size={12} /> Outgoing
                            </span>
                            <div className="space-y-2">
                                {outgoingLinks.map((link, idx) => {
                                    const targetNode = getFullNode(link.target);
                                    return (
                                        <div key={`out-${idx}`} className="bg-slate-50 p-2 rounded border border-slate-100 text-sm">
                                            <div className="text-slate-500 text-xs italic mb-0.5">{link.label}</div>
                                            <button 
                                                onClick={() => targetNode && onNodeSelect(targetNode)}
                                                disabled={!targetNode}
                                                className={`font-medium text-left w-full truncate ${targetNode ? 'text-indigo-600 hover:underline' : 'text-slate-700'}`}
                                            >
                                                {getNodeLabel(link.target)}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Incoming */}
                    {incomingLinks.length > 0 && (
                        <div>
                             <span className="text-xs font-medium text-slate-400 flex items-center gap-1 mb-2">
                                <ArrowLeft size={12} /> Incoming
                            </span>
                            <div className="space-y-2">
                                {incomingLinks.map((link, idx) => {
                                    const sourceNode = getFullNode(link.source);
                                    return (
                                        <div key={`in-${idx}`} className="bg-slate-50 p-2 rounded border border-slate-100 text-sm">
                                            <div className="text-slate-500 text-xs italic mb-0.5">{link.label}</div>
                                            <button 
                                                onClick={() => sourceNode && onNodeSelect(sourceNode)}
                                                disabled={!sourceNode}
                                                className={`font-medium text-left w-full truncate ${sourceNode ? 'text-indigo-600 hover:underline' : 'text-slate-700'}`}
                                            >
                                                {getNodeLabel(link.source)}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )}

        {/* Data Properties */}
        {Object.keys(node.properties).length > 0 && (
             <div>
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Database size={12} /> Data Properties
                </h3>
                <div className="space-y-3">
                    {Object.entries(node.properties).map(([key, values]) => (
                        <div key={key} className="bg-slate-50 p-2 rounded border border-slate-100">
                            <span className="block text-xs font-medium text-slate-700 mb-1">{key}</span>
                            <ul className="space-y-1">
                                {(values as string[]).map((val, idx) => (
                                    <li key={idx} className="text-sm text-slate-600 break-words">
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* URI Info */}
        <div className="group mt-6 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                <ExternalLink size={12} /> Full URI
            </h3>
            <p className="text-xs text-slate-400 break-all mb-4">
                {node.fullUri}
            </p>
            
            {/* Raw XML Viewer - NEW */}
            {node.rawXml && (
                <details className="group border border-slate-200 rounded-md open:bg-slate-50 transition-colors">
                    <summary className="cursor-pointer p-2 font-semibold text-xs text-slate-500 uppercase tracking-wider select-none flex items-center justify-between hover:bg-slate-50">
                        <div className="flex items-center gap-1">
                            <Code size={12} /> Source (RDF/XML)
                        </div>
                        <ChevronDown size={14} className="transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="p-2 border-t border-slate-200 overflow-x-auto bg-slate-50">
                        <pre className="text-[10px] leading-relaxed text-slate-600 font-mono whitespace-pre-wrap break-all">
                            {node.rawXml}
                        </pre>
                    </div>
                </details>
            )}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;