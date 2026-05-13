import { useEffect, useRef, useState } from "react";

import { FaBars, FaTimes, FaDiscord } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState(null);

  const [loadingUser, setLoadingUser] = useState(true);

  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();

  const profileRef = useRef(null);

  // DISCORD LOGIN
  const discordLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_DISCORD_CLIENT_ID;

    const REDIRECT_URI = import.meta.env.VITE_DISCORD_REDIRECT_URI;

    const DISCORD_URL =
      `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}` +
      `&response_type=token` +
      `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
      `&scope=identify guilds guilds.members.read`;

    window.location.href = DISCORD_URL;
  };

  // GET USER
  useEffect(() => {
    const token = localStorage.getItem("discord_token");

    // NO TOKEN
    if (!token) {
      setLoadingUser(false);
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

        setLoadingUser(false);
      })
      .catch(() => {
        localStorage.removeItem("discord_token");

        setLoadingUser(false);
      });
  }, []);

  // CLOSE PROFILE
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

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("discord_token");

    navigate("/");

    window.location.reload();
  };

  return (
    <>
      <nav
        className="
          fixed top-0 left-0 z-50 w-full
          border-b border-white/10
          bg-black/70
          backdrop-blur-2xl
        "
      >
        {/* TOP */}
        <div
          className="
            mx-auto
            flex h-20
            max-w-7xl
            items-center
            justify-between
            px-5 sm:px-8 lg:px-16
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
              text-2xl sm:text-3xl
              font-black
              text-[#b3ff00]
            "
          >
            Arcade
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/server-info"
              className="text-white/70 hover:text-white transition"
            >
              Server Info
            </Link>

            <Link
              to="/events"
              className="text-white/70 hover:text-white transition"
            >
              Events
            </Link>

            <Link
              to="/partner"
              className="text-white/70 hover:text-white transition"
            >
              Partner
            </Link>

            <Link
              to="/social-links"
              className="text-white/70 hover:text-white transition"
            >
              Social Links
            </Link>

            <Link
              to="/add-bot"
              className="text-white/70 hover:text-white transition"
            >
              Add Bot
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* LOADING */}
            {loadingUser ? (
              <div
                className="
                  hidden sm:block
                  h-11 w-32
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  animate-pulse
                "
              />
            ) : user ? (
              /* PROFILE */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="
                    flex items-center gap-3
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    px-3 py-2
                    hover:bg-white/10
                    transition
                  "
                >
                  <img
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                    alt="avatar"
                    className="
                      h-10 w-10
                      rounded-full
                      border border-white/10
                    "
                  />

                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-semibold">{user.username}</p>

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
                    <div
                      className="
                        flex items-center gap-3
                        border-b border-white/10
                        pb-4
                      "
                    >
                      <img
                        src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                        alt="avatar"
                        className="
                          h-14 w-14
                          rounded-full
                          border border-white/10
                        "
                      />

                      <div>
                        <p className="font-semibold">{user.username}</p>

                        <p className="text-xs text-[#b3ff00]">Owner Access</p>
                      </div>
                    </div>

                    {window.location.pathname !== "/dashboard" ? (
                      <button
                        onClick={() => {
                          navigate("/dashboard");
                          setProfileOpen(false);
                        }}
                        className="
                          mt-4 w-full text-left
                          rounded-2xl
                          px-4 py-3
                          hover:bg-white/5
                          transition text-sm
                        "
                      >
                        Dashboard
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          navigate("/");
                          setProfileOpen(false);
                        }}
                        className="
                          mt-4 w-full text-left
                          rounded-2xl
                          px-4 py-3
                          hover:bg-white/5
                          transition text-sm
                        "
                      >
                        Home
                      </button>
                    )}

                    <button
                      onClick={logout}
                      className="
                        mt-2 w-full text-left
                        rounded-2xl
                        bg-red-500/10
                        px-4 py-3
                        text-red-400
                        hover:bg-red-500/20
                        transition text-sm
                      "
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* LOGIN */
              <button
                onClick={discordLogin}
                className="
                  hidden sm:flex
                  items-center gap-2
                  rounded-full
                  bg-[#5865F2]
                  px-5 py-2
                  font-semibold
                  hover:scale-105
                  transition
                "
              >
                <FaDiscord />
                Login
              </button>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl lg:hidden"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div
            className="
              lg:hidden
              border-t border-white/10
              bg-black/95
              px-5 py-5
              animate-[menuShow_.25s_ease]
            "
          >
            <div className="flex flex-col gap-5 text-sm">
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
                className="
                  rounded-2xl
                  bg-[#b3ff00]
                  px-5 py-3
                  text-center
                  font-semibold
                  text-black
                "
              >
                Join Server
              </a>

              {user ? (
                <button
                  onClick={() => {
                    navigate("/dashboard");
                    setOpen(false);
                  }}
                  className="
                    rounded-2xl
                    bg-white/5
                    px-5 py-3
                    text-left
                  "
                >
                  Dashboard
                </button>
              ) : null}

              {!user && !loadingUser ? (
                <button
                  onClick={discordLogin}
                  className="
                    rounded-2xl
                    bg-[#5865F2]
                    px-5 py-3
                    font-semibold
                  "
                >
                  Login with Discord
                </button>
              ) : null}

              {user && (
                <button
                  onClick={logout}
                  className="
                    rounded-2xl
                    bg-red-500/10
                    px-5 py-3
                    text-red-400
                  "
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
