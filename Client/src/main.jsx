import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ReactFlowProvider } from "reactflow";
import { BrowserRouter } from "react-router-dom";

// Main entry point for the React application
// Renders the App component with necessary providers for routing and React Flow
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactFlowProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactFlowProvider>
  </StrictMode>,
);
