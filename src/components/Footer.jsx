// src/components/Footer.jsx

import { FaGithub, FaDiscord, FaYoutube } from "react-icons/fa";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-black px-6 pt-20 pb-0">
      <div className="mx-auto max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* LEFT */}
          <div>
            {/* SOCIAL */}
            <div className="flex items-center gap-5">
              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 transition hover:text-[#b3ff00]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 transition hover:text-[#b3ff00]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 transition hover:text-[#b3ff00]"
              >
                <FaYoutube />
              </a>

              <a
                href="https://discord.gg/4KWauvZeSN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white/60 transition hover:text-[#b3ff00]"
              >
                <FaDiscord />
              </a>
            </div>

            {/* COPYRIGHT */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/40">
              <p>© 2026 Arcade</p>

              <button className="transition hover:text-white">Rei</button>

              <button className="transition hover:text-white"></button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-20">
            {/* COLUMN */}
            <div className="flex flex-col gap-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                Navigation
              </span>

              <Link
                to="/"
                className="text-white/60 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/events"
                className="text-white/60 transition hover:text-white"
              >
                Events
              </Link>

              <Link
                to="/partner"
                className="text-white/60 transition hover:text-white"
              >
                Partner
              </Link>

              <Link
                to="/add-bot"
                className="text-white/60 transition hover:text-white"
              >
                Add Bot
              </Link>
            </div>

            {/* COLUMN */}
            <div className="flex flex-col gap-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                Community
              </span>

              <a
                href="https://discord.gg/4KWauvZeSN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                Discord
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                TikTok
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 transition hover:text-white"
              >
                YouTube
              </a>
            </div>

            {/* COLUMN */}
            <div className="flex flex-col gap-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/20">
                System
              </span>

              <Link
                to="/dashboard"
                className="text-white/60 transition hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                to="/server-info"
                className="text-white/60 transition hover:text-white"
              >
                Server Info
              </Link>

              <Link
                to="/social-links"
                className="text-white/60 transition hover:text-white"
              >
                Social Links
              </Link>

              <button className="text-left text-white/60 transition hover:text-white">
                Support
              </button>
            </div>
          </div>
        </div>

        {/* WALKING TEXT */}
        <div className="mt-24 overflow-hidden pt-6">
          <div className="marquee">
            <div className="marquee-track">
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>

              {/* DUPLICATE */}
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>
              <span className="marquee-text">Arcade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
