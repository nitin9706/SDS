import { Routes, Route } from "react-router-dom";

import LandingPage from "./component/LandingPage/Landingpage";
import Builder from "./component/BuilderPage/Builder";
import Login from "./component/LoginPage/Login";
function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Builder Page */}
      <Route path="/builder" element={<Builder />} />
    </Routes>
  );
}

export default App;
