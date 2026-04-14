import React from "react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import Configbar from "./Configbar";
import Topbar from "./Topbar";

import "reactflow/dist/style.css";

import { NodeProvider } from "../../context/NodeContext";

const Builder = () => {
  return (
    <NodeProvider>
      <div className="flex h-screen bg-[#0b0b17] text-white overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Topbar */}
          <Topbar />

          {/* Canvas + Config Layout */}
          <div className="flex flex-1 relative">
            {/* Canvas */}
            <div className="flex-1 relative">
              <Canvas />
            </div>

            {/* Config Panel */}
            <Configbar />
          </div>
        </div>
      </div>
    </NodeProvider>
  );
};

export default Builder;
