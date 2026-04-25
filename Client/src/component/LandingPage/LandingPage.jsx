import React from "react";
import { motion } from "framer-motion";
import ReactFlow, { Background } from "reactflow";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";

import {
  RiGithubFill,
  RiDatabase2Line,
  RiServerLine,
  RiStackLine,
  RiUser3Line,
  RiDragDropLine,
  RiLightbulbFill,
} from "react-icons/ri";
import { SiWhatsapp, SiNetflix, SiUber, SiX } from "react-icons/si";

// Landing page component showcasing the system design simulator
// Includes hero section, interactive demo, features, and examples
const nodes = [
  // Sample nodes for the demo flow diagram
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: (
        <div className="flex items-center gap-2">
          <RiUser3Line className="text-purple-400" />
          User
        </div>
      ),
    },
    type: "input",
  },
  {
    id: "2",
    position: { x: 200, y: 0 },
    data: {
      label: (
        <div className="flex items-center gap-2">
          <RiStackLine className="text-purple-400" />
          API Gateway
        </div>
      ),
    },
  },
  {
    id: "3",
    position: { x: 400, y: 0 },
    data: {
      label: (
        <div className="flex items-center gap-2">
          <RiServerLine className="text-purple-400" />
          Service
        </div>
      ),
    },
  },
  {
    id: "4",
    position: { x: 600, y: 0 },
    data: {
      label: (
        <div className="flex items-center gap-2">
          <RiDatabase2Line className="text-purple-400" />
          Database
        </div>
      ),
    },
  },
];

const edges = [
  // Connections between the demo nodes
  { id: "e1", source: "1", target: "2", animated: true },
  { id: "e2", source: "2", target: "3", animated: true },
  { id: "e3", source: "3", target: "4", animated: true },
];

const examples = [
  // Example architectures featured on the landing page
  {
    name: "WhatsApp Messaging",
    icon: <SiWhatsapp className="text-green-500 text-3xl" />,
  },
  {
    name: "Netflix Streaming",
    icon: <SiNetflix className="text-red-600 text-3xl" />,
  },
  {
    name: "Uber Ride Matching",
    icon: <SiUber className="text-white text-3xl" />,
  },
  {
    name: "Twitter Feed",
    icon: <SiX className="text-white text-3xl" />,
  },
];
export default function LandingPage() {
  // Main landing page component with multiple sections
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation bar with links and GitHub button */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">System Design Simulator</h1>

        <div className="flex gap-8 text-gray-300">
          <a href="#features" className="hover:text-purple-400">
            Features
          </a>
          <a href="#preview" className="hover:text-purple-400">
            Builder
          </a>
          <a href="#examples" className="hover:text-purple-400">
            Examples
          </a>
        </div>

        <a
          href="https://github.com/nitin9706/SDS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-700 px-5 py-2 rounded-lg  transition hover:bg-white hover:text-black hover:shadow-[0px_0px_25px_purple] duration-500 hover:border-purple-600"
        >
          <RiGithubFill className="text-xl" />
          GitHub
        </a>
      </nav>

      {/* HERO */}

      <section className="relative py-36 text-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-purple-600/20 via-purple-500/10 to-blue-500/20 blur-3xl"></div>

        {/* Floating Components */}

        <motion.div
          className="absolute left-20 top-32 flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg shadow-lg shadow-purple-600/40"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <RiDatabase2Line />
          Cache
        </motion.div>

        <motion.div
          className="absolute right-20 top-40 flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <RiServerLine />
          Load Balancer
        </motion.div>

        <motion.div
          className="absolute left-32 bottom-32 flex items-center gap-2 bg-purple-500 px-4 py-2 rounded-lg shadow-lg shadow-purple-500/40"
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <RiDatabase2Line />
          Database
        </motion.div>

        <h1 className="text-6xl font-bold relative">
          Design <span className="text-purple-400">Scalable Systems</span>
        </h1>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto relative">
          Practice system design interviews with an interactive architecture
          builder.
        </p>

        <div className="flex justify-center gap-6 mt-10 relative">
          <Link
            className="bg-purple-600 px-8 py-3 rounded-lg hover:bg-purple-700 transition"
            to={"/builder"}
          >
            Open Builder
          </Link>

          <button className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-500/10">
            View Demo
          </button>
        </div>
      </section>

      {/* INTERACTIVE DIAGRAM */}

      <section id="preview" className="px-10 py-24">
        <h2 className="text-3xl text-center font-semibold mb-12">
          Interactive System Diagram
        </h2>

        <div className="h-105 border border-gray-800 rounded-xl overflow-hidden">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            panOnDrag={false}
            nodesDraggable={false}
          >
            <Background />
          </ReactFlow>
        </div>
      </section>

      {/* FEATURES */}

      <section id="features" className="px-10 py-24 bg-neutral-950">
        <h2 className="text-3xl text-center mb-16">Powerful Features</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <RiDragDropLine className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Drag & Drop Builder</h3>
            <p className="text-gray-400">
              Visually build distributed architectures with APIs, services,
              caches and databases.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <RiLightbulbFill className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Architecture Library</h3>
            <p className="text-gray-400">
              Explore real world architectures like WhatsApp, Netflix and Uber.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition">
            <RiServerLine className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Interview Practice</h3>
            <p className="text-gray-400">
              Solve real system design interview problems visually.
            </p>
          </div>
        </div>
      </section>

      {/* EXAMPLES */}

      <section id="examples" className="px-10 py-24">
        <h2 className="text-3xl text-center mb-16">Example Architectures</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {examples.map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 p-6 rounded-xl hover:bg-neutral-900 hover:border-purple-500 transition"
            >
              <div className="mb-4">{item.icon}</div>

              <h3 className="font-semibold">{item.name}</h3>

              <p className="text-gray-400 mt-2 text-sm">
                Explore scalable architecture patterns.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="text-center py-28">
        <h2 className="text-4xl font-bold">Start Designing Today</h2>

        <p className="text-gray-400 mt-4">
          Build, learn and master system design.
        </p>

        <Link to={"/builder"}>
          <button className="bg-purple-600 px-10 py-4 rounded-lg mt-8 hover:bg-purple-700 shadow-lg shadow-purple-600/40">
            Open Builder
          </button>
        </Link>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-gray-800 py-10 text-center text-gray-400">
        © 2026 System Design Simulator
      </footer>
    </div>
  );
}
