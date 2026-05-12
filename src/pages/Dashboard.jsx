import { useEffect, useState } from "react";

import { FaBars, FaTimes, FaUser, FaGift, FaCog } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [open, setOpen] = useState(true);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // GET USER
  useEffect(() => {
    const token = localStorage.getItem("discord_token");

    if (!token) return;

    fetch("http://localhost:3001/api/check-member", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("discord_token");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-50
          bg-[#0f0f0f]
          border-r border-white/10
          transition-all duration-300
          overflow-hidden
          ${open ? "w-72" : "w-20"}
        `}
      >
        {/* TOP */}
        <div className="flex items-center justify-between p-5">
          {open && (
            <h1 className="text-3xl font-black text-[#b3ff00]">Arcade</h1>
          )}

          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MENU */}
        <div className="mt-10 flex flex-col gap-3 px-3">
          <button className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5 transition">
            <FaUser />

            {open && <span>Profile</span>}
          </button>

          <button className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5 transition">
            <FaGift />

            {open && <span>Rewards</span>}
          </button>

          <button className="flex items-center gap-4 px-4 py-4 rounded-2xl hover:bg-white/5 transition">
            <FaCog />

            {open && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`
          flex-1 transition-all duration-300 p-10
          ${open ? "ml-72" : "ml-20"}
        `}
      >
        {/* TOPBAR */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black">Dashboard</h1>

            <p className="mt-3 text-white/60">
              Welcome to Arcade member dashboard.
            </p>
          </div>

          {/* PROFILE */}
          {user && (
            <div className="relative group">
              <button className="flex items-center gap-3 px-3 py-2 rounded-2xl hover:bg-white/5 transition">
                <img
                  src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                  alt="avatar"
                  className="w-11 h-11 rounded-full border border-white/10"
                />

                <div className="text-left hidden md:block">
                  <p className="font-semibold text-sm">{user.username}</p>

                  <p className="text-xs text-white/40">Member</p>
                </div>
              </button>

              {/* DROPDOWN */}
              <div className="absolute right-0 top-16 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl p-3 shadow-2xl">
                {/* USER INFO */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt="avatar"
                    className="w-14 h-14 rounded-full border border-white/10"
                  />

                  <div>
                    <p className="font-semibold">{user.username}</p>

                    <p className="text-xs text-white/40">Logged in</p>
                  </div>
                </div>

                {/* HOME */}
                <button
                  onClick={() => navigate("/")}
                  className="mt-3 w-full text-left px-4 py-3 rounded-2xl hover:bg-white/5 transition text-sm"
                >
                  Home
                </button>

                {/* LOGOUT */}
                <button
                  onClick={logout}
                  className="mt-2 w-full text-left px-4 py-3 rounded-2xl bg-red-500/10 hover:bg-red-500/20 text-red-400 transition text-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Welcome</h2>

            <p className="mt-3 text-white/60">
              Welcome to the Arcade dashboard.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Rewards</h2>

            <p className="mt-3 text-white/60">Claim your rewards here.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">VIP</h2>

            <p className="mt-3 text-white/60">Premium member access.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
