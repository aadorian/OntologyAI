
export enum NodeType {
  Class = 'Class',
  Individual = 'Individual',
  Property = 'Property',
  Unknown = 'Unknown'
}

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  properties: Record<string, string[]>;
  fullUri: string;
  rawXml?: string;
  
  // D3 Simulation properties
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink {
  source: string | GraphNode;
  target: string | GraphNode;
  label: string;
  fullUri: string;
  
  // D3 Link properties
  index?: number;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}
