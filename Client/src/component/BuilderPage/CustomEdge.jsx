// CustomEdge.jsx
import React from "react";
import { BaseEdge, getBezierPath, useReactFlow } from "reactflow";

// Custom edge component for React Flow with delete functionality
const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}) => {
  const { setEdges } = useReactFlow();

  // Calculate the bezier path for the edge
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  // Function to delete the edge
  const handleDelete = (event) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((edge) => edge.id !== id));
  };

  return (
    <g>
      {/* The actual edge line */}
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#444",
          strokeWidth: 2,
        }}
      />
      {/* Delete button positioned at the center of the edge */}
      <circle
        cx={labelX}
        cy={labelY}
        r={11}
        fill="#8b5cf6"
        stroke="#fff"
        strokeWidth={2}
        style={{ cursor: "pointer" }}
        onClick={handleDelete}
      />
      {/* Delete icon (X) */}
      <text
        x={labelX}
        y={labelY + 4}
        textAnchor="middle"
        fontSize="12"
        fill="#fff"
        pointerEvents="none"
      >
        ×
      </text>
    </g>
  );
};

export default CustomEdge;
