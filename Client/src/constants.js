// Constants for the System Design Simulator

// Color constants for component types
export const COMPONENT_COLORS = {
  CLIENT: "#6366f1",
  INFRASTRUCTURE: "#a855f7",
  BACKEND: "#7c3aed",
  DATABASE: "#22c55e",
  SERVICE: "#ec4899",
  AI: "#06b6d4",
};

// Default component configurations
export const DEFAULT_COMPONENT_CONFIG = {
  instances: 1,
  region: "us-east",
  rateLimit: null,
  protocol: null,
  provider: null,
  engine: null,
};

// API endpoints
export const API_ENDPOINTS = {
  SIMULATE: "/api/simulate",
};

// Local storage keys
export const STORAGE_KEYS = {
  SAVED_ARCHITECTURE: "savedArchitecture",
};

// UI constants
export const UI_CONSTANTS = {
  TRAFFIC_DEFAULT: 10000,
  NODE_WIDTH: 200,
  NODE_MIN_WIDTH: 120,
};
