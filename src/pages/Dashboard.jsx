import { useEffect, useRef, useState } from "react";

import { FaBars, FaTimes, FaUser, FaRobot, FaLink } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const profileRef = useRef(null);

  // CLOSE PROFILE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // GET USER
  useEffect(() => {
    const token = localStorage.getItem("discord_token");

    if (!token) {
      setLoading(false);

      navigate("/");

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

        navigate("/");
      });
  }, [navigate]);

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("discord_token");

    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Sabar ya ganteng...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-50
          bg-[#0d0d0d]/95 backdrop-blur-2xl
          border-r border-white/10
          transition-all duration-300
          overflow-hidden
          ${open ? "w-72" : "w-20"}
        `}
      >
        {/* TOP */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          {open && (
            <div>
              <h1 className="text-3xl font-black text-[#b3ff00]">Arcade</h1>

              <p className="text-xs text-white/40 mt-1">Owner Dashboard</p>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="text-xl hover:text-[#b3ff00] transition"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MENU */}
        <div className="mt-8 flex flex-col gap-2 px-3">
          <button
            className="
              flex items-center gap-4
              px-4 py-4 rounded-2xl
              hover:bg-white/5
              transition
            "
          >
            <FaUser />

            {open && <span>Profile</span>}
          </button>

          <button
            className="
              flex items-center gap-4
              px-4 py-4 rounded-2xl
              hover:bg-white/5
              transition
            "
          >
            <FaLink />

            {open && <span>Social</span>}
          </button>

          <button
            className="
              flex items-center gap-4
              px-4 py-4 rounded-2xl
              hover:bg-white/5
              transition
            "
          >
            <FaRobot />

            {open && <span>Add Bot</span>}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`
          flex-1 transition-all duration-300
          ${open ? "ml-72" : "ml-20"}
        `}
      >
        <div className="p-10">
          {/* PROFILE RIGHT */}
          <div className="flex justify-end">
            {user && (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="
                    flex items-center gap-3
                    px-4 py-3
                    rounded-2xl
                    bg-white/5
                    border border-white/10
                    hover:bg-white/10
                    transition
                  "
                >
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt="avatar"
                    className="w-11 h-11 rounded-full border border-white/10"
                  />

                  <div className="text-left hidden md:block">
                    <p className="font-semibold text-sm">{user.username}</p>

                    <p className="text-xs text-[#b3ff00]">Owner</p>
                  </div>
                </button>

                {/* DROPDOWN */}
                {profileOpen && (
                  <div
                    className="
                      absolute right-0 top-16
                      w-64
                      rounded-3xl
                      border border-white/10
                      bg-[#111111]/95
                      backdrop-blur-2xl
                      p-4
                      shadow-2xl
                    "
                  >
                    <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                      <img
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                        alt="avatar"
                        className="w-14 h-14 rounded-full border border-white/10"
                      />

                      <div>
                        <p className="font-semibold">{user.username}</p>

                        <p className="text-xs text-[#b3ff00]">Owner Access</p>
                      </div>
                    </div>

                    <button
                      onClick={() => navigate("/")}
                      className="
                        mt-4 w-full text-left
                        px-4 py-3 rounded-2xl
                        hover:bg-white/5
                        transition text-sm
                      "
                    >
                      Home
                    </button>

                    <button
                      onClick={logout}
                      className="
                        mt-2 w-full text-left
                        px-4 py-3 rounded-2xl
                        bg-red-500/10
                        hover:bg-red-500/20
                        text-red-400
                        transition text-sm
                      "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* TITLE */}
          <div className="mt-10">
            <p className="text-[#b3ff00] uppercase text-sm tracking-[0.3em]">
              Arcade System
            </p>

            <h1 className="mt-4 text-6xl font-black leading-none">Dashboard</h1>

            <p className="mt-5 text-white/50 max-w-xl leading-relaxed">
              Manage your Arcade community, bots, members, integrations, and
              internal systems from one place.
            </p>
          </div>

          {/* CARDS */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
              <p className="text-sm text-white/40 uppercase">System</p>

              <h2 className="mt-4 text-3xl font-black">Welcome</h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Welcome to the Arcade private dashboard panel.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
              <p className="text-sm text-white/40 uppercase">Features</p>

              <h2 className="mt-4 text-3xl font-black">Rewards</h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Access premium rewards and owner-only tools.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7">
              <p className="text-sm text-white/40 uppercase">Access</p>

              <h2 className="mt-4 text-3xl font-black">VIP</h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Premium owner access for the Arcade ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
