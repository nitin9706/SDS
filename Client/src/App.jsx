import { Routes, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage/Landingpage";
import Builder from "./component/BuilderPage/Builder";
import Login from "./component/LoginPage/Login";

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
