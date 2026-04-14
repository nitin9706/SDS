import React, { createContext, useContext, useState } from "react";

const NodeContext = createContext();

export const NodeProvider = ({ children }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);

  return (
    <NodeContext.Provider
      value={{ selectedNode, setSelectedNode, nodes, setNodes }}
    >
      {children}
    </NodeContext.Provider>
  );
};

export const useNodeContext = () => {
  const context = useContext(NodeContext);
  if (!context) {
    throw new Error("useNodeContext must be used within NodeProvider");
  }
  return context;
};
