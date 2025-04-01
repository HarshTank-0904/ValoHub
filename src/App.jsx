import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details";
import Maps from "./pages/Maps";
import CompetitiveTiers from "./components/CompetitiveTiers";
import Weapons from "./pages/Weapons";
import GameModes from "./pages/GameModes";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <Router>
      <Header />
      <div className="universal">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/gamemodes" element={<GameModes />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/agent/:id" element={<AgentDetails />} />
          <Route path="/ranking" element={<CompetitiveTiers />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
