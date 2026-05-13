import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Events from "./pages/Events";
import ServerInfo from "./pages/ServerInfo";
import Dashboard from "./pages/Dashboard";
import DiscordCallback from "./pages/DiscordCallback";
import Partner from "./pages/Partner";
import SocialLinks from "./pages/SocialLinks";
import AddBot from "./pages/AddBot";

function AppContent() {
  const location = useLocation();

  const hideNavbar = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/server-info" element={<ServerInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/discord/callback" element={<DiscordCallback />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/social-links" element={<SocialLinks />} />
        <Route path="/add-bot" element={<AddBot />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
