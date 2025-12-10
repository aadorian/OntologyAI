
import React, { useMemo } from 'react';
import { X, Book, Hash, Link, List, Database, ArrowRight } from 'lucide-react';

interface OntologyGuideProps {
  isOpen: boolean;
  onClose: () => void;
  xmlData: string;
}

interface DocEntity {
  id: string;
  label: string;
  comment: string;
  uri: string;
  superClasses?: string[];
  domain?: string[];
  range?: string[];
}

interface DocData {
  metadata: {
    iri: string;
    title: string;
    version: string;
    description: string;
  };
  classes: DocEntity[];
  objectProperties: DocEntity[];
  dataProperties: DocEntity[];
  individuals: DocEntity[];
}

const OntologyGuide: React.FC<OntologyGuideProps> = ({ isOpen, onClose, xmlData }) => {
  // Parsing Logic
  const docData: DocData = useMemo(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlData, "text/xml");
    
    // Helper to get attribute with namespace fallbacks
    const getAttr = (el: Element, names: string[]) => {
      for (const name of names) {
        if (el.hasAttribute(name)) return el.getAttribute(name);
        // Try namespace variations manually if needed, though DOMParser usually handles 'rdf:about' as 'about' if namespace aware, 
        // but for simple XML parsing we might check full tag.
        // Actually, getAttribute('rdf:about') works if the attribute is literally written that way in source and parsed as such in HTML context.
      }
      // Manual check for attributes that might be namespaced
      for (let i = 0; i < el.attributes.length; i++) {
          const attr = el.attributes[i];
          if (names.some(n => attr.name.endsWith(n) || attr.name === n)) {
              return attr.value;
          }
      }
      return null;
    };

    const getChildText = (parent: Element, tagEndsWith: string) => {
       for(let i=0; i<parent.children.length; i++) {
           if (parent.children[i].tagName.endsWith(tagEndsWith)) {
               return parent.children[i].textContent || "";
           }
       }
       return "";
    };

    const getLocalName = (uri: string) => {
        if (!uri) return "Unnamed";
        const hash = uri.lastIndexOf('#');
        if (hash > -1) return uri.substring(hash + 1);
        const slash = uri.lastIndexOf('/');
        if (slash > -1) return uri.substring(slash + 1);
        return uri;
    };

    const parseEntity = (el: Element): DocEntity => {
        const about = getAttr(el, ['rdf:about', 'about', 'nodeID']) || "Anonymous";
        const label = getChildText(el, 'label') || getLocalName(about);
        const comment = getChildText(el, 'comment');
        
        // Superclasses
        const superClasses: string[] = [];
        const subClassEls = el.getElementsByTagName("rdfs:subClassOf");
        for(let i=0; i<subClassEls.length; i++) {
            const res = getAttr(subClassEls[i], ['rdf:resource', 'resource']);
            if (res) superClasses.push(getLocalName(res));
        }

        // Domain/Range
        const domains: string[] = [];
        const ranges: string[] = [];
        
        const domEls = el.getElementsByTagName("rdfs:domain");
        for(let i=0; i<domEls.length; i++) {
             const res = getAttr(domEls[i], ['rdf:resource', 'resource']);
             if (res) domains.push(getLocalName(res));
        }
        
        const rangeEls = el.getElementsByTagName("rdfs:range");
        for(let i=0; i<rangeEls.length; i++) {
             const res = getAttr(rangeEls[i], ['rdf:resource', 'resource']);
             if (res) ranges.push(getLocalName(res));
        }

        return {
            id: about,
            uri: about,
            label,
            comment,
            superClasses,
            domain: domains,
            range: ranges
        };
    };

    // Metadata
    const ontologyEl = doc.getElementsByTagName("owl:Ontology")[0];
    const metadata = {
        iri: ontologyEl ? (getAttr(ontologyEl, ['rdf:about', 'about']) || "Unknown IRI") : "Unknown IRI",
        title: "Ontology Documentation",
        version: "1.0",
        description: "No description available."
    };
    if (ontologyEl) {
        // Try to find title/comment
        const comment = getChildText(ontologyEl, 'comment');
        if (comment) metadata.description = comment;
        
        // Sometimes title is in dc:title or rdfs:label
        const label = getChildText(ontologyEl, 'label');
        if (label) metadata.title = label;
    }

    // Collections
    const classes: DocEntity[] = [];
    const objProps: DocEntity[] = [];
    const dataProps: DocEntity[] = [];
    const individuals: DocEntity[] = [];

    // Parse Classes
    const classList = doc.getElementsByTagName("owl:Class");
    for(let i=0; i<classList.length; i++) {
        if (getAttr(classList[i], ['rdf:about', 'about'])) {
             classes.push(parseEntity(classList[i]));
        }
    }
    classes.sort((a,b) => a.label.localeCompare(b.label));

    // Parse Object Properties
    const objPropList = doc.getElementsByTagName("owl:ObjectProperty");
    for(let i=0; i<objPropList.length; i++) {
        objProps.push(parseEntity(objPropList[i]));
    }
    objProps.sort((a,b) => a.label.localeCompare(b.label));

    // Parse Data Properties
    const dataPropList = doc.getElementsByTagName("owl:DatatypeProperty");
    for(let i=0; i<dataPropList.length; i++) {
        dataProps.push(parseEntity(dataPropList[i]));
    }
    dataProps.sort((a,b) => a.label.localeCompare(b.label));

    // Parse Individuals
    const indList = doc.getElementsByTagName("owl:NamedIndividual");
    for(let i=0; i<indList.length; i++) {
        individuals.push(parseEntity(indList[i]));
    }
    individuals.sort((a,b) => a.label.localeCompare(b.label));

    return { metadata, classes, objectProperties: objProps, dataProperties: dataProps, individuals };
  }, [xmlData]);

  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center shrink-0">
           <div className="flex items-center gap-3">
             <div className="bg-blue-700 text-white p-2 rounded shadow-sm">
                <Book size={24} />
             </div>
             <div>
                <h2 className="font-bold text-xl text-slate-900 tracking-tight">{docData.metadata.title || "Ontology Specification"}</h2>
                <p className="text-xs text-slate-500 font-mono truncate max-w-md">{docData.metadata.iri}</p>
             </div>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-800">
             <X size={24} />
           </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto hidden lg:block shrink-0">
                <div className="mb-6">
                    <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2">Documentation</h4>
                    <nav className="space-y-1 text-sm">
                        <button onClick={() => scrollToSection('abstract')} className="block w-full text-left py-1.5 px-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900">Abstract</button>
                        <button onClick={() => scrollToSection('overview')} className="block w-full text-left py-1.5 px-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900">Overview</button>
                        <button onClick={() => scrollToSection('crossref')} className="block w-full text-left py-1.5 px-2 rounded hover:bg-slate-200 text-slate-600 hover:text-slate-900">Cross Reference</button>
                    </nav>
                </div>
                
                {docData.classes.length > 0 && (
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2">Classes ({docData.classes.length})</h4>
                        <nav className="space-y-1 text-xs">
                             <button onClick={() => scrollToSection('classes-header')} className="block w-full text-left py-1.5 px-2 rounded font-bold text-blue-600 hover:bg-blue-50">All Classes</button>
                            {docData.classes.map(c => (
                                <button key={c.id} onClick={() => scrollToSection(c.id)} className="block w-full text-left py-1 px-2 rounded hover:bg-slate-200 text-slate-500 hover:text-slate-900 truncate">
                                    {c.label}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
                
                 {(docData.objectProperties.length > 0 || docData.dataProperties.length > 0) && (
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-2">Properties</h4>
                        <nav className="space-y-1 text-xs">
                             <button onClick={() => scrollToSection('properties-header')} className="block w-full text-left py-1.5 px-2 rounded font-bold text-blue-600 hover:bg-blue-50">All Properties</button>
                        </nav>
                    </div>
                )}
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 font-sans leading-relaxed text-slate-800 bg-white selection:bg-blue-100 scroll-smooth">
            
            {/* WIDOCO Style Header Block */}
            <div className="mb-12 border-b border-slate-200 pb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">{docData.metadata.title || "Ontology Specification"}</h1>
                <dl className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
                    <dt className="font-bold text-slate-500">IRI:</dt>
                    <dd className="font-mono text-slate-700 bg-slate-100 inline-block px-2 py-0.5 rounded text-xs">{docData.metadata.iri}</dd>
                    
                    <dt className="font-bold text-slate-500">Version:</dt>
                    <dd className="text-slate-700">{docData.metadata.version}</dd>
                    
                    <dt className="font-bold text-slate-500">Generated:</dt>
                    <dd className="text-slate-700">{new Date().toLocaleDateString()}</dd>
                </dl>
            </div>

            {/* Abstract */}
            <section id="abstract" className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Abstract</h3>
                <div className="bg-blue-50/50 p-6 rounded-lg border-l-4 border-blue-500 text-slate-700 leading-7">
                    {docData.metadata.description ? (
                         <p>{docData.metadata.description}</p>
                    ) : (
                         <p className="italic text-slate-400">No description provided in ontology metadata.</p>
                    )}
                </div>
            </section>

             {/* Overview */}
             <section id="overview" className="mb-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Overview</h3>
                <p className="mb-6 text-slate-600">This ontology contains:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                        <span className="block text-3xl font-bold text-blue-600 mb-1">{docData.classes.length}</span>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Classes</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                        <span className="block text-3xl font-bold text-indigo-600 mb-1">{docData.objectProperties.length}</span>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Obj Properties</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                        <span className="block text-3xl font-bold text-purple-600 mb-1">{docData.dataProperties.length}</span>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Data Properties</span>
                    </div>
                    <div className="p-4 bg-slate-50 rounded border border-slate-200 text-center">
                        <span className="block text-3xl font-bold text-emerald-600 mb-1">{docData.individuals.length}</span>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Individuals</span>
                    </div>
                </div>
            </section>

            {/* Cross Reference */}
            <section id="crossref" className="mb-16">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Cross Reference</h3>
                 
                 {docData.classes.length > 0 && (
                     <div className="mb-8">
                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                             <Hash size={16} /> Classes
                         </h4>
                         <div className="flex flex-wrap gap-2">
                             {docData.classes.map(c => (
                                 <button 
                                    key={c.id} 
                                    onClick={() => scrollToSection(c.id)}
                                    className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
                                 >
                                     {c.label}
                                 </button>
                             ))}
                         </div>
                     </div>
                 )}

                 {docData.objectProperties.length > 0 && (
                     <div className="mb-8">
                         <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                             <Link size={16} /> Object Properties
                         </h4>
                         <div className="flex flex-wrap gap-2">
                             {docData.objectProperties.map(c => (
                                 <button 
                                    key={c.id} 
                                    onClick={() => scrollToSection(c.id)}
                                    className="px-2 py-1 bg-white border border-slate-200 text-slate-600 text-xs rounded hover:border-indigo-300 hover:text-indigo-600 transition-colors shadow-sm"
                                 >
                                     {c.label}
                                 </button>
                             ))}
                         </div>
                     </div>
                 )}
            </section>

            {/* Classes Detail */}
            {docData.classes.length > 0 && (
                <section id="classes-header" className="mb-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-100 flex items-center gap-2">
                        <Hash className="text-blue-600" /> Classes
                    </h3>
                    <div className="space-y-12">
                        {docData.classes.map(c => (
                            <div key={c.id} id={c.id} className="scroll-mt-20">
                                <div className="flex items-baseline gap-3 mb-4">
                                    <h4 className="text-xl font-bold text-slate-800">{c.label}</h4>
                                    <span className="text-xs font-mono text-slate-400 bg-slate-50 px-2 py-1 rounded">{c.uri}</span>
                                </div>
                                
                                <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 shadow-sm">
                                    {c.comment && (
                                        <p className="text-slate-700 mb-6 leading-relaxed border-l-2 border-blue-200 pl-4">
                                            {c.comment}
                                        </p>
                                    )}

                                    <dl className="grid grid-cols-[140px_1fr] gap-y-4 text-sm">
                                        {c.superClasses && c.superClasses.length > 0 && (
                                            <>
                                                <dt className="font-semibold text-slate-500">Subclass of:</dt>
                                                <dd className="flex flex-wrap gap-2">
                                                    {c.superClasses.map((sc, i) => (
                                                        <span key={i} className="text-blue-600 hover:underline cursor-pointer">{sc}</span>
                                                    ))}
                                                </dd>
                                            </>
                                        )}
                                        
                                        <dt className="font-semibold text-slate-500">URI:</dt>
                                        <dd className="font-mono text-slate-600 text-xs break-all">{c.uri}</dd>
                                    </dl>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Properties Detail */}
            {(docData.objectProperties.length > 0 || docData.dataProperties.length > 0) && (
                <section id="properties-header" className="mb-16">
                     <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-2 border-b border-slate-100 flex items-center gap-2">
                        <List className="text-indigo-600" /> Properties
                    </h3>
                    
                    {/* Object Props */}
                    {docData.objectProperties.length > 0 && (
                        <div className="mb-12">
                             <h4 className="text-lg font-bold text-slate-700 mb-6 uppercase tracking-wide">Object Properties</h4>
                             <div className="space-y-8">
                                 {docData.objectProperties.map(p => (
                                     <div key={p.id} id={p.id} className="scroll-mt-20 border border-slate-200 rounded-lg overflow-hidden">
                                         <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                             <h5 className="font-bold text-slate-800">{p.label}</h5>
                                             <span className="text-[10px] font-mono text-slate-500">{p.uri}</span>
                                         </div>
                                         <div className="p-4 bg-white">
                                             {p.comment && <p className="text-sm text-slate-600 mb-4">{p.comment}</p>}
                                             
                                             <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                                                 {(p.domain && p.domain.length > 0) && (
                                                     <div className="flex-1">
                                                         <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Domain</span>
                                                         <div className="flex flex-wrap gap-1">
                                                             {p.domain.map((d, i) => <span key={i} className="text-sm text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">{d}</span>)}
                                                         </div>
                                                     </div>
                                                 )}
                                                 
                                                  {(p.range && p.range.length > 0) && (
                                                     <div className="flex-1">
                                                         <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Range</span>
                                                         <div className="flex flex-wrap gap-1">
                                                             {p.range.map((r, i) => <span key={i} className="text-sm text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{r}</span>)}
                                                         </div>
                                                     </div>
                                                 )}
                                             </div>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    )}

                    {/* Data Props */}
                    {docData.dataProperties.length > 0 && (
                        <div>
                             <h4 className="text-lg font-bold text-slate-700 mb-6 uppercase tracking-wide">Data Properties</h4>
                             <div className="space-y-8">
                                 {docData.dataProperties.map(p => (
                                     <div key={p.id} id={p.id} className="scroll-mt-20 border border-slate-200 rounded-lg overflow-hidden">
                                          <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                                             <h5 className="font-bold text-slate-800">{p.label}</h5>
                                             <span className="text-[10px] font-mono text-slate-500">{p.uri}</span>
                                         </div>
                                         <div className="p-4 bg-white">
                                             {p.comment && <p className="text-sm text-slate-600 mb-4">{p.comment}</p>}
                                             <dl className="grid grid-cols-[80px_1fr] gap-y-2 text-sm">
                                                 <dt className="text-slate-500 font-semibold">Domain:</dt>
                                                 <dd>{p.domain?.join(', ') || "N/A"}</dd>
                                                 <dt className="text-slate-500 font-semibold">Range:</dt>
                                                 <dd>{p.range?.join(', ') || "Literal"}</dd>
                                             </dl>
                                         </div>
                                     </div>
                                 ))}
                             </div>
                        </div>
                    )}

                </section>
            )}

            {/* Footer */}
            <div className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs font-sans">
                <p>Documentation generated automatically by Ontology Graph Viewer</p>
                <p className="mt-1">Based on WIDOCO standards</p>
            </div>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default OntologyGuide;
