import React from "react";
import { Save, Download, BarChart3, Search, Play } from "lucide-react";
import { exportAsPDF } from "./Canvas";

const Topbar = () => {
  return (
    <div className="sticky top-0 z-20 w-full bg-[#0b0b17]/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-3 text-white">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <h1
            className="
          text-lg font-semibold
          bg-linear-to-r from-purple-400 to-indigo-400
          bg-clip-text text-transparent"
          >
            System Builder
          </h1>

          <span
            className="
          text-xs px-2 py-1
          rounded-md
          bg-purple-500/20
          border border-purple-500/30"
          >
            workspace.dev
          </span>
        </div>

        {/* CENTER SEARCH */}
        <div className="relative w-[30%]">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />

          <input
            placeholder="Search nodes, services..."
            className="
            w-full
            bg-white/5
            border border-white/10
            rounded-lg
            py-2 pl-8 pr-3
            text-sm
            focus:outline-none
            focus:border-purple-500
            focus:ring-2 focus:ring-purple-500/20
            placeholder:text-gray-400"
          />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2">
          <button
            className="
          flex items-center gap-2
          text-sm px-3 py-2
          rounded-lg
          bg-white/5
          border border-white/10
          hover:bg-white/10
          transition cursor-pointer active:scale-95"
          >
            <Save size={16} />
            Save
          </button>

          <button
            onClick={exportAsPDF}
            className="
            flex items-center gap-2
            text-sm px-3 py-2
            rounded-lg
            bg-indigo-500/80
            hover:bg-indigo-600
            transition cursor-pointer active:scale-95"
          >
            <Download size={16} />
            Export
          </button>

          <button
            className="
          flex items-center gap-2
          text-sm px-3 py-2
          rounded-lg
          bg-pink-500/80
          hover:bg-pink-600
          transition cursor-pointer active:scale-95"
          >
            <BarChart3 size={16} />
            Analyse
          </button>

          <button
            className="
          flex items-center gap-2
          text-sm px-3 py-2
          rounded-lg
          bg-green-500/80
          hover:bg-green-600
          transition cursor-pointer active:scale-95"
          >
            <Play size={16} />
            Run
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
