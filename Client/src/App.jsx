import LandingPage from "./component/LandingPage/LandingPage";
import Builder from "./component/BuilderPage/Builder";
import { Router, Route, Routes } from "react-router-dom";
// Main App component that handles routing for the entire application
function App() {
  return (
    <Routes>
      {/* Route for the landing page */}
      <Route path="/" element={<LandingPage />} />

      {/* Route for the system design builder page */}
      <Route path="/builder" element={<Builder />} />
    </Routes>
  );
}

export default App;
