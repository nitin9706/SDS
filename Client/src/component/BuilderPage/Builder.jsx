import React, { useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import Configbar from "./Configbar";
import Topbar from "./Topbar";
import Simulation from "./Simulation";
import { useNodesState, useEdgesState } from "reactflow";

import "reactflow/dist/style.css";

import { NodeProvider } from "../../context/NodeContext";

// Main builder page component that assembles all the builder UI components
const Builder = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const handleReactFlowInit = useCallback((instance) => {
    setReactFlowInstance(instance);
  }, []);

  return (
    <NodeProvider>
      <div className="flex h-screen bg-[#0b0b17] text-white overflow-hidden">
        {/* Left sidebar with draggable components */}
        <Sidebar />

        {/* Main content area with topbar and canvas/config layout */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Top navigation bar */}
          <Topbar
            reactFlowInstance={reactFlowInstance}
            nodes={nodes}
            edges={edges}
          />

          {/* Canvas and configuration panel layout */}
          <div className="flex flex-1 relative">
            {/* Main canvas for building system diagrams */}
            <div className="flex-1 relative">
              <Canvas
                onReactFlowInit={handleReactFlowInit}
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                setNodes={setNodes}
                setEdges={setEdges}
              />
            </div>

            {/* Right configuration panel for selected nodes */}
            <Configbar />
          </div>
          <Simulation />
        </div>
      </div>
    </NodeProvider>
  );
};

export default Builder;
