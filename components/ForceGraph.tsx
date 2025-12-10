
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { GraphData, GraphNode, GraphLink, NodeType } from '../types';

interface ForceGraphProps {
  data: GraphData;
  onNodeClick: (node: GraphNode | null) => void;
  selectedNodeId?: string | null;
  zoomToNodeId?: string | null;
}

const ForceGraph: React.FC<ForceGraphProps> = ({ data, onNodeClick, selectedNodeId, zoomToNodeId }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  
  // Refs to store D3 objects for programmatic access across effects
  const zoomBehaviorRef = useRef<any>(null);
  const svgSelectionRef = useRef<any>(null);

  // Update dimensions on resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Main Graph Initialization
  useEffect(() => {
    if (!svgRef.current || !data.nodes.length) return;

    // Use d3 as any to bypass potential type definition issues in the environment
    const _d3 = d3 as any;

    const svg = _d3.select(svgRef.current);
    svgSelectionRef.current = svg;
    svg.selectAll("*").remove(); // Clear previous render

    const { width, height } = dimensions;

    // Zoom Group
    const g = svg.append("g");

    // Zoom behavior
    const zoomBehavior = _d3.zoom()
      .scaleExtent([0.1, 4])
      .on("zoom", (event: any) => {
        g.attr("transform", event.transform);
      });
    
    zoomBehaviorRef.current = zoomBehavior;
    svg.call(zoomBehavior);

    // Simulation setup
    const simulation = _d3.forceSimulation(data.nodes)
      .force("link", _d3.forceLink(data.links)
        .id((d: any) => d.id)
        .distance(150)) // Increased distance for labels
      .force("charge", _d3.forceManyBody().strength(-400))
      .force("center", _d3.forceCenter(width / 2, height / 2))
      .force("collide", _d3.forceCollide().radius(40));

    // Marker definition (Arrowheads)
    const defs = svg.append("defs");
    
    // Default marker
    defs.append("marker")
      .attr("id", "arrowhead")
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 22) // Position of arrow relative to node center
      .attr("refY", 0)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
      .append("path")
      .attr("d", "M0,-5L10,0L0,5")
      .attr("fill", "#94a3b8");

    // Link Group
    const link = g.append("g")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-opacity", 1)
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke-width", 1.5)
      .attr("marker-end", "url(#arrowhead)");

    // Link Label Group
    // We render a white background stroke (halo) to make text readable over lines
    const linkLabels = g.append("g")
        .selectAll("text")
        .data(data.links) 
        .join("text")
        .attr("font-size", "10px")
        .attr("fill", "#475569")
        .attr("text-anchor", "middle")
        .attr("dy", -4) // slight offset
        .text((d: any) => d.label)
        .call((text: any) => text.clone(true)
            .lower()
            .attr("stroke", "white")
            .attr("stroke-width", 3)
            .attr("stroke-linejoin", "round"));


    // Node Group
    const node = g.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .attr("class", "node")
      .style("cursor", "pointer")
      .on("click", (event: any, d: GraphNode) => {
        event.stopPropagation();
        onNodeClick(d);
      })
      .call(_d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    // Node Shapes
    node.append("circle")
      .attr("r", (d: GraphNode) => d.type === NodeType.Class ? 14 : 10)
      .attr("fill", (d: GraphNode) => {
          if (d.type === NodeType.Class) return "#3b82f6"; // Blue
          if (d.type === NodeType.Individual) return "#10b981"; // Green
          return "#9ca3af"; // Grey
      })
      .attr("stroke", (d: GraphNode) => d.id === selectedNodeId ? "#f59e0b" : "#fff") // Highlight selected
      .attr("stroke-width", (d: GraphNode) => d.id === selectedNodeId ? 3 : 2);

    // Node Labels
    node.append("text")
      .text((d: GraphNode) => d.label)
      .attr("x", 16)
      .attr("y", 5)
      .attr("font-size", "12px")
      .attr("font-weight", "500")
      .attr("fill", "#1e293b")
      .attr("stroke", "white")
      .attr("stroke-width", 3)
      .attr("paint-order", "stroke") // Ensures stroke is behind fill
      .attr("pointer-events", "none"); 

    node.append("title")
      .text((d: GraphNode) => `${d.type}: ${d.label}\n${d.fullUri}`);

    // Simulation tick update
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => (d.source as GraphNode).x!)
        .attr("y1", (d: any) => (d.source as GraphNode).y!)
        .attr("x2", (d: any) => (d.target as GraphNode).x!)
        .attr("y2", (d: any) => (d.target as GraphNode).y!);

      linkLabels
        .attr("x", (d: any) => ((d.source as GraphNode).x! + (d.target as GraphNode).x!) / 2)
        .attr("y", (d: any) => ((d.source as GraphNode).y! + (d.target as GraphNode).y!) / 2);

      node
        .attr("transform", (d: GraphNode) => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: any, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: GraphNode) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: GraphNode) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    // Handle background click to deselect
    svg.on("click", () => {
        onNodeClick(null);
    });

    return () => {
      simulation.stop();
    };
  }, [data, dimensions, onNodeClick, selectedNodeId]);

  // Programmatic Zoom Effect
  useEffect(() => {
    if (!zoomToNodeId || !data.nodes.length || !svgSelectionRef.current || !zoomBehaviorRef.current) return;

    const _d3 = d3 as any;
    const node = data.nodes.find(n => n.id === zoomToNodeId);
    
    // We check if node has x/y, implying simulation has run at least once
    if (node && typeof node.x === 'number' && typeof node.y === 'number') {
        const { width, height } = dimensions;
        const scale = 1.5; // Target zoom level
        
        // Calculate the transform to center the node
        const transform = _d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(scale)
            .translate(-node.x, -node.y);
            
        svgSelectionRef.current.transition()
            .duration(1000) // 1 second smooth animation
            .call(zoomBehaviorRef.current.transform, transform);
    }
  }, [zoomToNodeId, data.nodes, dimensions]);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-50 relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full block cursor-grab active:cursor-grabbing"></svg>
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg shadow-sm border border-slate-200 text-xs text-slate-700 pointer-events-none select-none">
          <h3 className="font-bold mb-2">Legend</h3>
          <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-blue-500 block"></span>
              <span>Class</span>
          </div>
          <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full bg-emerald-500 block"></span>
              <span>Individual</span>
          </div>
          <div className="mt-2 pt-2 border-t border-slate-200">
             <div className="flex items-center gap-2">
                 <span className="text-slate-400">── label ──►</span>
                 <span>Relation</span>
             </div>
          </div>
      </div>
    </div>
  );
};

export default ForceGraph;
