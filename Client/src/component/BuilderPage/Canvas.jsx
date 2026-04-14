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
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

// export document thing

export const exportAsPDF = () => {
  const node = document.getElementById("react-flow-wrapper");
  toPng(node).then((dataUrl) => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [node.offsetWidth, node.offsetHeight],
    });

    pdf.addImage(dataUrl, "PNG", 0, 0, node.offsetWidth, node.offsetHeight);
    pdf.save(`react-flow${Date.now()}.pdf`);
  });
};

const nodeTypes = {
  customNode: CustomNode,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

const initialNodes = [];

const initialEdges = [];

const Canvas = () => {
  const reactFlowWrapper = useRef(null);

  const { project } = useReactFlow();
  const { setSelectedNode } = useNodeContext();

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const data = JSON.parse(
        event.dataTransfer.getData("application/reactflow"),
      );

      const position = project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

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
