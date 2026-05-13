// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { FaBars, FaTimes, FaDiscord, FaChevronDown } from "react-icons/fa";

import ServerIcon from "../assets/ARCADE.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showWarning, setShowWarning] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef(null);

  // CLOSE PROFILE IF CLICK OUTSIDE
  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      setLoading(false);

      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/api/check-member`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }

        return res.json();
      })
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }

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
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto h-[68px] px-6 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-12">
            {/* LOGO */}
            <Link
              to="/"
              className="text-3xl font-black tracking-tight text-white hover:text-[#b3ff00] transition"
            >
              Arcade
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 text-[15px] text-white/75">
              <Link
                to="/server-info"
                className="hover:text-[#b3ff00] transition"
              >
                Server Info
              </Link>

              <Link to="/events" className="hover:text-[#b3ff00] transition">
                Events
              </Link>

              <Link to="/partner" className="hover:text-[#b3ff00] transition">
                Partner
              </Link>

              <Link
                to="/social-links"
                className="hover:text-[#b3ff00] transition"
              >
                Social Links
              </Link>

              <Link to="/add-bot" className="hover:text-[#b3ff00] transition">
                Add Bot
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-4">
            {/* JOIN SERVER */}
            <a
              href="https://discord.gg/4KWauvZeSN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[#b3ff00] text-black font-semibold hover:scale-105 transition"
            >
              Join Server
            </a>

            {/* USER */}
            {loading ? null : user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 px-3 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-white/10"
                  />

                  <span className="text-sm font-semibold">{user.username}</span>

                  <FaChevronDown
                    className={`text-xs transition duration-300 ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN */}
                {profileOpen && (
                  <div className="absolute right-0 top-16 w-72 rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-2xl p-3 shadow-[0_20px_80px_rgba(0,0,0,0.6)] animate-in fade-in slide-in-from-top-2 duration-200">
                    {/* USER INFO */}
                    <div className="flex items-center gap-4 p-3 rounded-2xl">
                      <img
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                        alt="avatar"
                        className="w-14 h-14 rounded-full border border-white/10"
                      />

                      <div>
                        <p className="font-bold text-lg">{user.username}</p>

                        <p className="text-sm text-white/50">Logged in</p>
                      </div>
                    </div>

                    {/* MENU */}
                    <div className="mt-3 flex flex-col gap-2">
                      <button
                        onClick={() => (window.location.href = "/dashboard")}
                        className="w-full text-left px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                      >
                        Dashboard
                      </button>

                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
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
          <button onClick={() => setOpen(!open)} className="lg:hidden text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl">
            <div className="px-6 py-6 flex flex-col gap-5">
              <Link to="/server-info" onClick={() => setOpen(false)}>
                Server Info
              </Link>

              <Link to="/events" onClick={() => setOpen(false)}>
                Events
              </Link>

              <Link to="/partner" onClick={() => setOpen(false)}>
                Partner
              </Link>

              <Link to="/social-links" onClick={() => setOpen(false)}>
                Social Links
              </Link>

              <Link to="/add-bot" onClick={() => setOpen(false)}>
                Add Bot
              </Link>

              <a
                href="https://discord.gg/4KWauvZeSN"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 rounded-full bg-[#b3ff00] text-black text-center font-semibold"
              >
                Join Server
              </a>

              {user && (
                <button
                  onClick={() => (window.location.href = "/dashboard")}
                  className="px-5 py-3 rounded-full bg-white/10 text-white text-center font-semibold"
                >
                  Dashboard
                </button>
              )}

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
          </div>
        )}
      </nav>

      {/* MODAL */}
      {showWarning && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-[90%] max-w-md rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 text-center shadow-2xl">
            {/* ICON */}
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#b3ff00] shadow-[0_0_30px_rgba(179,255,0,1)]">
              <img
                src={ServerIcon}
                alt="Arcade"
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
