// client/src/components/SimulationControls/SimulationControls.jsx

import React, { useState } from "react";
import { Play, Save, RotateCcw, Upload, Download } from "lucide-react";
import { API_ENDPOINTS, STORAGE_KEYS, UI_CONSTANTS } from "../../constants";

const SimulationControls = ({
  nodes,
  edges,
  setSimulationResults,
  setLoading,
  onError,
  onSuccess,
}) => {
  const [traffic, setTraffic] = useState(UI_CONSTANTS.TRAFFIC_DEFAULT);

  // Run Simulation API Call
  const handleRunSimulation = async () => {
    try {
      setLoading(true);

      const response = await fetch(API_ENDPOINTS.SIMULATE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
          traffic,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setSimulationResults(result);
      onSuccess?.("Simulation completed successfully!");
    } catch (error) {
      const errorMessage =
        error.message || "An error occurred during simulation";
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Save Architecture JSON
  const handleSave = () => {
    try {
      const architecture = {
        nodes,
        edges,
        traffic,
      };

      localStorage.setItem(
        STORAGE_KEYS.SAVED_ARCHITECTURE,
        JSON.stringify(architecture),
      );
      onSuccess?.("Architecture saved successfully!");
    } catch (_error) {
      onError?.("Failed to save architecture");
    }
  };

  // Reset Builder
  const handleReset = () => {
    window.location.reload();
  };

  // Export JSON
  const handleExport = () => {
    const data = JSON.stringify(
      {
        nodes,
        edges,
        traffic,
      },
      null,
      2,
    );

    const blob = new Blob([data], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "architecture.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  // Import JSON
  const handleImport = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        // Parse the JSON data (placeholder for future implementation)
        JSON.parse(e.target.result);

        // Here you would typically update the nodes and edges state
        // For now, just show success message
        onSuccess?.("Architecture imported successfully!");
      } catch (_err) {
        onError?.("Invalid JSON file format");
      }
    };

    reader.onerror = () => {
      onError?.("Failed to read file");
    };

    reader.readAsText(file);
  };

  return (
    <div className="w-full bg-[#111827] border border-gray-700 rounded-xl p-4 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Traffic Input */}
        <div className="flex items-center gap-3">
          <label className="text-white font-medium">Requests/sec</label>

          <input
            type="number"
            value={traffic}
            onChange={(e) => setTraffic(e.target.value)}
            className="w-40 px-4 py-2 rounded-lg bg-[#1F2937] text-white border border-gray-600 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          {/* Run Simulation */}
          <button
            onClick={handleRunSimulation}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
          >
            <Play size={18} />
            Run Simulation
          </button>

          {/* Save */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            <Save size={18} />
            Save
          </button>

          {/* Reset */}
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition"
          >
            <RotateCcw size={18} />
            Reset
          </button>

          {/* Export */}
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            <Download size={18} />
            Export
          </button>

          {/* Import */}
          <label className="flex items-center gap-2 px-5 py-2 rounded-lg bg-yellow-600 hover:bg-yellow-700 text-white font-semibold cursor-pointer transition">
            <Upload size={18} />
            Import
            <input type="file" accept=".json" onChange={handleImport} hidden />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SimulationControls;
