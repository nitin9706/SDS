import React, { useCallback, useRef } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";

import "reactflow/dist/style.css";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { useReactFlow } from "reactflow";
import { useNodeContext } from "../../context/NodeContext";

// Define custom node and edge types for React Flow
const nodeTypes = {
  customNode: CustomNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

// Initial empty arrays for nodes and edges
const initialNodes = [];
const initialEdges = [];

// Main canvas component where users build their system diagrams
const Canvas = () => {
  const reactFlowWrapper = useRef(null);

  const { project } = useReactFlow();
  const { setSelectedNode } = useNodeContext();

  // State management for nodes and edges using React Flow hooks
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Callback to handle connecting nodes with edges
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "customEdge",
            animated: true,
          },
          eds,
        ),
      ),
    [setEdges],
  );

  // Callback to handle node selection changes
  const onSelectionChange = useCallback(
    (changes) => {
      const selectedNodes = changes?.nodes || [];
      if (selectedNodes.length > 0) {
        const selected = nodes.find((n) => n.id === selectedNodes[0].id);
        setSelectedNode(selected);
      } else {
        setSelectedNode(null);
      }
    },
    [nodes, setSelectedNode],
  );

  // Callback to handle dropping dragged components onto the canvas
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      // Parse the dragged component data
      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow"),
      );

      // Calculate the drop position
      const position = project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      // Create a new node at the drop position
      const newNode = {
        id: `${Date.now()}`,
        type: "customNode",
        position,
        data: {
          label: data.text,
          logo: data.logo,
          type: data.type,
          color: data.color,
          defaultData: {
            name: data.defaultData?.name,
            rateLimit: data.defaultData?.rateLimit,
            region: data.defaultData?.region,
            protocol: data.defaultData?.protocol,
            provider: data.defaultData?.provider,
            engine: data.defaultData?.engine,
          },
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [project, setNodes],
  );

  // Callback to allow drag over the canvas
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div className="flex-1 h-full w-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onSelectionChange={onSelectionChange}
        edgeTypes={edgeTypes}
        id="react-flow-wrapper"
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Canvas;
