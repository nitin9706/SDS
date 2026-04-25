import React, { createContext, useContext, useState } from "react";

// Create a context for managing node-related state across the application
const NodeContext = createContext();

// Provider component that wraps the app to provide node state
export const NodeProvider = ({ children }) => {
  // State for the currently selected node in the canvas
  const [selectedNode, setSelectedNode] = useState(null);
  // State for the list of all nodes in the flow
  const [nodes, setNodes] = useState([]);

  return (
    <NodeContext.Provider
      value={{ selectedNode, setSelectedNode, nodes, setNodes }}
    >
      {children}
    </NodeContext.Provider>
  );
};

// Custom hook to use the NodeContext, with error handling if used outside provider
export const useNodeContext = () => {
  const context = useContext(NodeContext);
  if (!context) {
    throw new Error("useNodeContext must be used within NodeProvider");
  }
  return context;
};
