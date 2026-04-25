import {
  MenuIcon,
  MoveRight,
  MoveRightIcon,
  Search,
  XIcon,
} from "lucide-react";
import React, { useState } from "react";
import { COMPONENT_COLORS } from "../../constants";

// Sidebar component providing draggable system components for the builder
const Sidebar = () => {
  // Function to handle drag start for components
  const onDragStart = (event, nodeData) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(nodeData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  // Array of available components that can be dragged onto the canvas
  const Shapes = [
    {
      text: "User",
      logo: "https://cdn.simpleicons.org/openid",
      type: "Client",
      color: COMPONENT_COLORS.CLIENT,
    },
    {
      text: "Client App",
      logo: "https://cdn.simpleicons.org/react",
      type: "Client",
      color: COMPONENT_COLORS.CLIENT,
    },
    {
      text: "CDN",
      logo: "https://cdn.simpleicons.org/cloudflare",
      type: "Infrastructure",
      color: COMPONENT_COLORS.INFRASTRUCTURE,
    },
    {
      text: "Load Balancer",
      logo: "https://cdn.simpleicons.org/nginx",
      type: "Infrastructure",
      color: COMPONENT_COLORS.INFRASTRUCTURE,
    },
    {
      text: "API Gateway",
      logo: "https://cdn.simpleicons.org/kong",
      type: "Backend",
      color: COMPONENT_COLORS.BACKEND,
    },
    {
      text: "Database",
      logo: "https://cdn.simpleicons.org/mongodb",
      type: "Database",
      color: COMPONENT_COLORS.DATABASE,
    },
    {
      text: "Cache",
      logo: "https://cdn.simpleicons.org/redis",
      type: "Database",
      color: COMPONENT_COLORS.DATABASE,
    },
    {
      text: "Notification Service",
      logo: "https://cdn.simpleicons.org/firebase",
      type: "Service",
      color: COMPONENT_COLORS.SERVICE,
    },
    {
      text: "AI Service",
      logo: "https://cdn.simpleicons.org/openai",
      type: "AI",
      color: COMPONENT_COLORS.AI,
    },
  ];

  // Get unique categories from the shapes
  const categories = [...new Set(Shapes.map((s) => s.type))];

  // State for search input
  const [search, setSearch] = useState("");
  // State for which categories are open/expanded
  const [openCategory, setOpenCategory] = useState({});
  // State for whether the sidebar is open or collapsed
  const [openMenu, setOpenMenu] = useState(true);

  // Function to toggle category expansion
  const toggleCategory = (category) => {
    setOpenCategory((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // Filter shapes based on search input
  const filteredShapes = Shapes.filter((val) =>
    val.text.toLowerCase().includes(search.toLowerCase()),
  );

  // Collapsed sidebar view when closed
  if (!openMenu) {
    return (
      <div
        className="
        fixed top-1/2 left-1
        h-20 w-10
        flex items-center justify-center
        rounded-r-xl
        bg-purple-600
        shadow-lg shadow-purple-600/40
        cursor-pointer
        hover:scale-110 transition z-30"
        onClick={() => setOpenMenu(true)}
      >
        <MoveRight />
      </div>
    );
  }

  // Expanded sidebar with full component list
  return (
    <div
      className="
    w-80 h-full
    p-6
    flex flex-col
    bg-linear-to-b from-[#0b0b17] to-[#141427]
    border-r border-white/10
    text-white
    shadow-2xl"
    >
      {/* Header with title and close button */}
      <div className="flex justify-between items-center pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-md shadow-purple-500/40"></div>

          <h1
            className="
          text-xl font-semibold
          bg-linear-to-r from-purple-400 to-indigo-400
          bg-clip-text text-transparent"
          >
            Builder
          </h1>
        </div>

        <XIcon
          className="cursor-pointer text-gray-400 hover:text-white hover:scale-110 transition"
          onClick={() => setOpenMenu(false)}
        />
      </div>

      {/* Search input for filtering components */}
      <div className="relative mt-6">
        <Search className="absolute left-3 top-3 text-gray-400" size={16} />

        <input
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          bg-white/5
          border border-white/10
          rounded-lg
          py-2 pl-9 pr-3
          text-sm
          focus:outline-none
          focus:border-purple-500
          focus:ring-2 focus:ring-purple-500/20
          placeholder:text-gray-400"
        />
      </div>

      {/* Scrollable list of components organized by category */}
      <div className="mt-6 flex-1 overflow-y-auto pr-2">
        {(search ? ["Search"] : categories).map((category) => {
          const list = search
            ? filteredShapes
            : Shapes.filter((s) => s.type === category);

          if (list.length === 0) return null;

          return (
            <div key={category} className="mb-4">
              {!search && (
                <div
                  onClick={() => toggleCategory(category)}
                  className="
                  flex justify-between items-center
                  px-2 py-2
                  text-xs uppercase tracking-wider
                  text-gray-500
                  cursor-pointer
                  hover:text-purple-400 transition"
                >
                  {category}

                  <span>{openCategory[category] ? "−" : "+"}</span>
                </div>
              )}

              {(search || openCategory[category]) &&
                list.map((e) => (
                  <div
                    key={e.text}
                    draggable
                    onDragStart={(event) => onDragStart(event, e)}
                    className="
                    flex items-center gap-3
                    p-3 my-2
                    rounded-lg
                    bg-white/4
                    border border-white/10
                    hover:bg-white/8
                    hover:border-purple-500/40
                    hover:shadow-md hover:shadow-purple-500/20
                    hover:-translate-y-0.5
                    transition-all duration-200
                    cursor-grab active:cursor-grabbing"
                  >
                    <img
                      src={e.logo}
                      className="h-5 w-5"
                      alt={`${e.text} icon`}
                    />

                    <span className="text-sm">{e.text}</span>

                    <span
                      className="ml-auto h-2 w-2 rounded-full"
                      style={{ background: e.color }}
                    />
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
