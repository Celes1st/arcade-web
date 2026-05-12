import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ServerInfo from "./pages/ServerInfo";
import Events from "./pages/Events";
import Social from "./pages/Social";

import Dashboard from "./pages/Dashboard";

import DiscordCallback from "./pages/DiscordCallback";

import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {
  const location = useLocation();

  // HIDE NAVBAR DI DASHBOARD
  const hideNavbar = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen bg-black text-white">
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/server-info" element={<ServerInfo />} />

        <Route path="/events" element={<Events />} />

        <Route path="/social" element={<Social />} />

        <Route path="/auth/discord/callback" element={<DiscordCallback />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
