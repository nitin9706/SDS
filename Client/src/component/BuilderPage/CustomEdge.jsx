// CustomEdge.jsx
import React from "react";
import { BaseEdge, getBezierPath, useReactFlow } from "reactflow";

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
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const handleDelete = (event) => {
    event.stopPropagation();
    setEdges((eds) => eds.filter((edge) => edge.id !== id));
  };

  return (
    <g>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "#444",
          strokeWidth: 2,
        }}
      />
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
