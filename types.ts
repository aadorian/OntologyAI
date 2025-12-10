import * as d3 from 'd3';

export enum NodeType {
  Class = 'Class',
  Individual = 'Individual',
  Property = 'Property',
  Unknown = 'Unknown'
}

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: NodeType;
  properties: Record<string, string[]>;
  fullUri: string;
  rawXml?: string;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  label: string;
  fullUri: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}