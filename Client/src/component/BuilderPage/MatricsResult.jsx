// client/src/components/MetricsDashboard/MetricsDashboard.jsx

import React from "react";
import {
  AlertTriangle,
  Activity,
  ServerCrash,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

const MetricsDashboard = ({ simulationResults, loading }) => {
  if (loading) {
    return (
      <div className="w-full mt-6 bg-[#111827] border border-gray-700 rounded-xl p-6">
        <p className="text-white text-lg font-semibold">
          Running Simulation...
        </p>
      </div>
    );
  }

  if (!simulationResults) {
    return (
      <div className="w-full mt-6 bg-[#111827] border border-gray-700 rounded-xl p-6">
        <p className="text-gray-400">
          No simulation data yet. Click "Run Simulation".
        </p>
      </div>
    );
  }

  const {
    totalLatency = 0,
    throughput = 0,
    bottlenecks = [],
    failedNodes = [],
    SPOF = [],
    suggestions = [],
  } = simulationResults;

  return (
    <div className="w-full mt-6 space-y-6">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Latency */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-purple-400" />
            <h3 className="text-white font-semibold">Total Latency</h3>
          </div>

          <p className="text-2xl font-bold text-white">{totalLatency} ms</p>
        </div>

        {/* Throughput */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="text-green-400" />
            <h3 className="text-white font-semibold">Throughput</h3>
          </div>

          <p className="text-2xl font-bold text-white">{throughput} req/sec</p>
        </div>

        {/* Bottlenecks */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="text-yellow-400" />
            <h3 className="text-white font-semibold">Bottlenecks</h3>
          </div>

          <p className="text-2xl font-bold text-white">{bottlenecks.length}</p>
        </div>

        {/* Failed Nodes */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <ServerCrash className="text-red-400" />
            <h3 className="text-white font-semibold">Failed Nodes</h3>
          </div>

          <p className="text-2xl font-bold text-white">{failedNodes.length}</p>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bottlenecks */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5">
          <h3 className="text-white font-semibold mb-4">Bottleneck Nodes</h3>

          {bottlenecks.length > 0 ? (
            <ul className="space-y-2">
              {bottlenecks.map((item, index) => (
                <li
                  key={index}
                  className="text-yellow-300 bg-[#1F2937] px-4 py-2 rounded-lg"
                >
                  ⚠ {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No bottlenecks detected</p>
          )}
        </div>

        {/* SPOF */}
        <div className="bg-[#111827] border border-gray-700 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldAlert className="text-red-400" />
            <h3 className="text-white font-semibold">
              Single Point of Failure (SPOF)
            </h3>
          </div>

          {SPOF.length > 0 ? (
            <ul className="space-y-2">
              {SPOF.map((item, index) => (
                <li
                  key={index}
                  className="text-red-300 bg-[#1F2937] px-4 py-2 rounded-lg"
                >
                  ⚠ {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">No SPOF detected</p>
          )}
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-[#111827] border border-gray-700 rounded-xl p-5">
        <h3 className="text-white font-semibold mb-4">Scaling Suggestions</h3>

        {suggestions.length > 0 ? (
          <ul className="space-y-2">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className="text-green-300 bg-[#1F2937] px-4 py-2 rounded-lg"
              >
                ✅ {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No suggestions available</p>
        )}
      </div>
    </div>
  );
};

export default MetricsDashboard;
