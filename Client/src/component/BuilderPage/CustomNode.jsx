// CustomNode.jsx
import React from "react";
import { Handle, Position, useReactFlow } from "reactflow";

// Custom node component for React Flow with delete functionality
const CustomNode = ({ id, data, selected }) => {
  const { setNodes, setEdges } = useReactFlow();

  // Function to delete the node and its connected edges
  const handleDelete = (event) => {
    event.stopPropagation();
    setNodes((nds) => nds.filter((node) => node.id !== id));
    setEdges((eds) =>
      eds.filter((edge) => edge.source !== id && edge.target !== id),
    );
  };

  return (
    <div
      style={{
        position: "relative",
        background: data.color || "#6366f1",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "8px",
        minWidth: "120px",
        fontWeight: "500",
        width: "200px",

        border: selected
          ? "3px solid #8b5cf6"
          : "2px solid rgba(255,255,255,0.1)",
        boxShadow: selected ? "0 0 12px rgba(139, 92, 246, 0.6)" : "none",
        transition: "all 0.2s ease",
      }}
      className="flex justify-center  items-center gap-3"
    >
      {/* Component logo */}
      {data.logo && (
        <img
          src={data.logo}
          alt=""
          style={{ height: "16px", width: "16px", objectFit: "contain" }}
        />
      )}

      {/* Node label and instance count */}
      <div className="flex flex-col">
        {" "}
        <span>{data.label}</span>
        <span className="text-xs">{data.defaultData.instances}</span>
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="flex justify-center items-center text-2xl ml-10 cursor-pointer active:scale-120 "
        title="Delete node"
      >
        ×
      </button>
      {/* Connection handles for edges */}
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: 10,
          height: 10,
          background: "#fff",
          border: "1px solid #000",
        }}
      />

      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: 10,
          height: 10,
          background: "#fff",
          border: "1px solid #000",
        }}
      />
    </div>
  );
};

export default CustomNode;
