// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaDiscord } from "react-icons/fa";

import ServerIcon from "../assets/ARCADE.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showWarning, setShowWarning] = useState(false);

  // DISCORD LOGIN
  const discordLogin = () => {
    const clientId = "1465978664419065920";

    const redirectUri = encodeURIComponent(
      `${window.location.origin}/auth/discord/callback`,
    );

    window.location.href =
      `https://discord.com/oauth2/authorize` +
      `?client_id=${clientId}` +
      `&response_type=token` +
      `&redirect_uri=${redirectUri}` +
      `&scope=identify email`;
  };

  // CHECK LOGIN
  useEffect(() => {
    const token = localStorage.getItem("discord_token");

    if (!token) {
      setTimeout(() => {
        setLoading(false);
      }, 0);

      return;
    }

    fetch("http://localhost:3001/api/check-member", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not member");
        }

        return res.json();
      })
      .then((data) => {
        setUser(data.user);

        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("discord_token");

        setLoading(false);
      });
  }, []);
  // LOGOUT
  const logout = () => {
    localStorage.removeItem("discord_token");

    window.location.reload();
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 flex items-center justify-between px-5 md:px-8 py-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
        {/* LOGO */}
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tight hover:text-[#b3ff00] transition"
        >
          Arcade
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <Link to="/server-info" className="hover:text-[#b3ff00] transition">
            Server Info
          </Link>

          <Link to="/events" className="hover:text-[#b3ff00] transition">
            Events
          </Link>

          <Link to="/social" className="hover:text-[#b3ff00] transition">
            Social
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          {/* JOIN BUTTON */}
          <a
            href="https://discord.gg/4KWauvZeSN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-[#b3ff00] text-black font-semibold hover:scale-105 transition"
          >
            Join Server
          </a>

          {/* USER / LOGIN */}
          {loading ? null : user ? (
            <div className="relative group">
              {/* PROFILE BUTTON */}
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/5 transition">
                <img
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full border border-white/10"
                />

                <span className="text-sm font-semibold">{user.username}</span>
              </button>

              {/* DROPDOWN */}
              <div className="absolute right-0 top-14 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-3">
                {/* USER INFO */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt="avatar"
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <p className="font-semibold">{user.username}</p>

                    <p className="text-xs text-white/50">Logged in</p>
                  </div>
                </div>

                {/* DASHBOARD */}
                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="mt-3 w-full px-4 py-2 rounded-xl hover:bg-white/5 transition text-sm text-left"
                >
                  Dashboard
                </button>

                {/* LOGOUT */}
                <button
                  onClick={logout}
                  className="mt-2 w-full px-4 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowWarning(true)}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#5865F2] text-white font-semibold hover:scale-105 transition"
            >
              <FaDiscord />
              Login
            </button>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* MOBILE MENU */}
        {open && (
          <div className="absolute top-20 left-0 w-full rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6 flex flex-col gap-5 md:hidden">
            <Link to="/server-info" onClick={() => setOpen(false)}>
              Server Info
            </Link>

            <Link to="/events" onClick={() => setOpen(false)}>
              Events
            </Link>

            <Link to="/social" onClick={() => setOpen(false)}>
              Social
            </Link>

            <a
              href="https://discord.gg/4KWauvZeSN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-[#b3ff00] text-black text-center font-semibold"
            >
              Join Server
            </a>

            {/* MOBILE DASHBOARD */}
            {user && (
              <button
                onClick={() => (window.location.href = "/dashboard")}
                className="px-5 py-3 rounded-full bg-[#5865F2] text-white text-center font-semibold"
              >
                Dashboard
              </button>
            )}

            {/* MOBILE LOGIN */}
            {!loading && !user && (
              <button
                onClick={() => setShowWarning(true)}
                className="flex justify-center items-center gap-2 px-5 py-3 rounded-full bg-[#5865F2] text-white font-semibold"
              >
                <FaDiscord />
                Login with Discord
              </button>
            )}
          </div>
        )}
      </nav>

      {/* MODAL */}
      {showWarning && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 text-center shadow-2xl">
            {/* SERVER ICON */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#b3ff00] shadow-[0_0_30px_rgba(179,255,0,1)]">
              <img
                src={ServerIcon}
                alt="Arcade Server"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="mt-6 text-2xl font-bold">Join Our Discord First</h2>

            <p className="mt-3 text-white/60 text-sm leading-relaxed">
              You must join the Arcade Discord server before logging in and
              accessing member-only features.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://discord.gg/4KWauvZeSN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-5 py-3 rounded-2xl bg-[#b3ff00] text-black font-bold hover:scale-[1.02] transition"
              >
                Join Discord Server
              </a>

              <button
                onClick={() => {
                  setShowWarning(false);

                  discordLogin();
                }}
                className="w-full px-5 py-3 rounded-2xl bg-[#5865F2] text-white font-semibold hover:scale-[1.02] transition"
              >
                Continue Login
              </button>

              <button
                onClick={() => setShowWarning(false)}
                className="text-sm text-white/40 hover:text-white/70 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
