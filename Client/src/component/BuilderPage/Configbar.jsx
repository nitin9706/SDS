import React, { useState, useEffect } from "react";
import { useNodeContext } from "../../context/NodeContext";
import { useReactFlow } from "reactflow";

const Configbar = () => {
  const { selectedNode, setSelectedNode } = useNodeContext();
  const { getNodes, setNodes } = useReactFlow();

  const [label, setLabel] = useState("");
  const [color, setColor] = useState("#6366f1");

  useEffect(() => {
    if (selectedNode) {
      setLabel(selectedNode.data.label || "");
      setColor(selectedNode.data.color || "#6366f1");
    }
  }, [selectedNode]);

  if (!selectedNode) return null;

  const updateNode = (data) => {
    const nodes = getNodes();

    const updatedNodes = nodes.map((node) =>
      node.id === selectedNode.id
        ? { ...node, data: { ...node.data, ...data } }
        : node,
    );

    setNodes(updatedNodes);
    setSelectedNode({
      ...selectedNode,
      data: { ...selectedNode.data, ...data },
    });
  };

  const updateConfig = (key, value) => {
    const config = {
      ...selectedNode.data.defaultData,
      [key]: value,
    };

    updateNode({ defaultData: config });
  };

  const handleDelete = () => {
    const nodes = getNodes().filter((n) => n.id !== selectedNode.id);
    setNodes(nodes);
    setSelectedNode(null);
  };

  const handleDuplicate = () => {
    const nodes = getNodes();

    const newNode = {
      ...selectedNode,
      id: `${Date.now()}`,
      position: {
        x: selectedNode.position.x + 60,
        y: selectedNode.position.y + 60,
      },
    };

    setNodes([...nodes, newNode]);
  };

  const config = selectedNode.data.defaultData || {};

  return (
    <div className="w-80 h-[85%] flex flex-col bg-[#0f0f1a] border-l border-white/10 text-white overflow-y-auto">
      {/* HEADER */}
      <div className="p-5 border-b border-white/10">
        <h2 className="text-lg font-semibold text-purple-400">
          Component Settings
        </h2>
      </div>

      {/* SCROLL AREA */}
      <div className="flex-1 min-h-0 overflow-y-auto p-5 space-y-6">
        {/* Component Info */}
        <div>
          <h3 className="text-sm font-semibold text-purple-300 mb-3">
            Component Info
          </h3>

          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
            <img src={selectedNode.data.logo} className="h-6 w-6" />
            <div>
              <p className="font-medium">{selectedNode.data.label}</p>
              <p className="text-xs text-gray-400">
                {selectedNode.type || "Service"}
              </p>
            </div>
          </div>
        </div>

        {/* Label */}
        <div>
          <label className="text-xs text-gray-400">Label</label>
          <input
            value={label}
            onChange={(e) => {
              setLabel(e.target.value);
              updateNode({ label: e.target.value });
            }}
            className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/10 rounded-lg"
          />
        </div>

        {/* Color */}
        <div>
          <label className="text-xs text-gray-400">Color</label>
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              updateNode({ color: e.target.value });
            }}
            className="mt-1 w-full h-10 rounded-md"
          />
        </div>

        {/* Infrastructure */}
        <div>
          <h3 className="text-sm font-semibold text-purple-300 mb-3">
            Infrastructure
          </h3>

          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-400">Instances</label>
              <input
                type="number"
                value={config.instances || 1}
                onChange={(e) =>
                  updateConfig("instances", Number(e.target.value))
                }
                className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/10 rounded-lg"
              />
            </div>

            <div>
              <label className="text-xs text-gray-400">Region</label>
              <select
                value={config.region || "us-east"}
                onChange={(e) => updateConfig("region", e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-white/10 border border-white/10 rounded-lg"
              >
                <option>us-east</option>
                <option>us-west</option>
                <option>eu-west</option>
                <option>asia</option>
              </select>
            </div>
          </div>
        </div>

        {/* Position */}
        <div>
          <h3 className="text-sm font-semibold text-purple-300 mb-3">
            Position
          </h3>

          <div className="bg-white/10 p-3 rounded-lg text-sm font-mono">
            X: {Math.round(selectedNode.position.x)} <br />
            Y: {Math.round(selectedNode.position.y)}
          </div>
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="p-5 border-t border-white/10 flex gap-3">
        <button
          onClick={handleDuplicate}
          className="flex-1 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
        >
          Duplicate
        </button>

        <button
          onClick={handleDelete}
          className="flex-1 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Configbar;
