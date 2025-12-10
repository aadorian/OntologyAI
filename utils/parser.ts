import { GraphData, GraphNode, GraphLink, NodeType } from '../types';

export const parseOntology = (xmlString: string): GraphData => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const serializer = new XMLSerializer();
  
  const nodes: Map<string, GraphNode> = new Map();
  const links: GraphLink[] = [];

  const getLocalName = (uri: string): string => {
    if (!uri) return 'Unknown';
    const hashIndex = uri.lastIndexOf('#');
    if (hashIndex !== -1) return uri.substring(hashIndex + 1);
    const slashIndex = uri.lastIndexOf('/');
    if (slashIndex !== -1) return uri.substring(slashIndex + 1);
    return uri;
  };

  const getNamespace = (nodeName: string): string => {
      const parts = nodeName.split(':');
      if (parts.length > 1) return parts[0];
      return '';
  }

  const getAttributeNS = (el: Element, localName: string): string | null => {
      // Helper because RDF/XML attributes can be tricky with namespaces in DOMParser
      // Try direct attribute
      if (el.hasAttribute(localName)) return el.getAttribute(localName);
      // Try with rdf prefix
      if (el.hasAttribute(`rdf:${localName}`)) return el.getAttribute(`rdf:${localName}`);
      // Try finding it in attributes list
      for(let i=0; i<el.attributes.length; i++) {
          if (el.attributes[i].localName === localName) return el.attributes[i].value;
      }
      return null;
  }
  
  const getResource = (el: Element): string | null => {
      return getAttributeNS(el, 'resource') || getAttributeNS(el, 'about');
  }

  const getAbout = (el: Element): string | null => {
      return getAttributeNS(el, 'about');
  }

  // 1. Parse Classes
  const classElements = xmlDoc.getElementsByTagName("owl:Class");
  for (let i = 0; i < classElements.length; i++) {
    const el = classElements[i];
    const about = getAbout(el);
    if (about) {
      nodes.set(about, {
        id: about,
        label: getLocalName(about),
        type: NodeType.Class,
        fullUri: about,
        properties: {},
        rawXml: serializer.serializeToString(el)
      });
      
      // Check for rdfs:subClassOf
      const subClassOf = el.getElementsByTagName("rdfs:subClassOf");
      for(let j=0; j<subClassOf.length; j++) {
         const resource = getResource(subClassOf[j]);
         if (resource) {
             links.push({
                 source: about,
                 target: resource,
                 label: 'subClassOf',
                 fullUri: 'http://www.w3.org/2000/01/rdf-schema#subClassOf'
             });
         }
      }
    }
  }

  // 2. Parse Individuals
  const individualElements = xmlDoc.getElementsByTagName("owl:NamedIndividual");
  for (let i = 0; i < individualElements.length; i++) {
    const el = individualElements[i];
    const about = getAbout(el);
    if (about) {
      const node: GraphNode = {
        id: about,
        label: getLocalName(about),
        type: NodeType.Individual,
        fullUri: about,
        properties: {},
        rawXml: serializer.serializeToString(el)
      };
      
      // Parse children properties
      const children = el.children;
      for(let j=0; j<children.length; j++) {
          const child = children[j];
          const resource = getResource(child);
          const tagName = child.tagName;
          const propLabel = getLocalName(tagName);

          if (tagName === 'rdf:type') {
              if (resource) {
                  links.push({
                      source: about,
                      target: resource,
                      label: 'type',
                      fullUri: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
                  });
              }
          } else if (resource) {
              // Object Property
               links.push({
                  source: about,
                  target: resource,
                  label: propLabel,
                  fullUri: tagName // Simplified
              });
          } else if (child.textContent && child.textContent.trim() !== "") {
              // Data Property
              if (!node.properties[propLabel]) {
                  node.properties[propLabel] = [];
              }
              node.properties[propLabel].push(child.textContent.trim());
          }
      }
      
      // Also check if rdfs:label is present as a specific property for display label
      const labels = el.getElementsByTagName("rdfs:label");
      if (labels.length > 0 && labels[0].textContent) {
          node.label = labels[0].textContent;
      }

      nodes.set(about, node);
    }
  }

  // Ensure all link targets exist as nodes. If not, create simple placeholder nodes.
  links.forEach(link => {
      const targetId = typeof link.target === 'string' ? link.target : link.target.id;
      if (!nodes.has(targetId)) {
          nodes.set(targetId, {
              id: targetId,
              label: getLocalName(targetId),
              type: NodeType.Unknown,
              fullUri: targetId,
              properties: {}
          });
      }
  });

  return {
    nodes: Array.from(nodes.values()),
    links: links
  };
};