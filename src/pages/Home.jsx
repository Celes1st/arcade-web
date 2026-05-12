import { Gamepad2, Users, Headphones } from "lucide-react";

import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-[-300px] left-[20%] w-[7000px] h-[700px] bg-[#b3ff00]/10 blur-[180px] rounded-full" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-start justify-center text-left px-6 pt-52 max-w-7xl mx-auto">
        <div className="ml-4 md:ml-12">
          <div className="flex items-center gap-3">
            <p className="inline-block text-[#b3ff00] font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-[#b3ff00]/30 bg-[#b3ff00]/10 backdrop-blur-md">
              Welcome to Arcade
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              Created by Rei
            </p>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            The Undefined
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-lime-200 to-lime-500 bg-clip-text text-transparent">
              Server
            </span>
          </h1>

          <p className="mt-8 text-lg text-white/60 max-w-2xl leading-relaxed">
            A chill Discord community for gamers, anime fans, creators, and late
            night conversations.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 mt-6 text-white/40 text-sm">
            <span>Humble Server</span>

            <span>Active Daily</span>

            <span>Voice Chats 24/7</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://discord.gg/4KWauvZeSN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#b3ff00] text-black font-semibold hover:scale-105 hover:brightness-110 transition duration-300 text-center"
            >
              Join Server
            </a>
          </div>

          {/* Glow Line */}
          <div className="mt-24 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[#b3ff00] to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 px-6 py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:-translate-y-2 hover:border-[#b3ff00]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#b3ff00]/10 border border-[#b3ff00]/20 flex items-center justify-center text-[#b3ff00] mb-6">
              <Users
                size={28}
                className="group-hover:scale-110 transition duration-300"
              />
            </div>

            <h2 className="text-2xl font-bold">Social Community</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Meet new friends and enjoy fun conversations with active members
              every day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:-translate-y-2 hover:border-[#b3ff00]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#b3ff00]/10 border border-[#b3ff00]/20 flex items-center justify-center text-[#b3ff00] mb-6">
              <Gamepad2
                size={28}
                className="group-hover:scale-110 transition duration-300"
              />
            </div>

            <h2 className="text-2xl font-bold">Gaming & Events</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Join community events, gaming sessions, and exciting giveaways.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:-translate-y-2 hover:border-[#b3ff00]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-[#b3ff00]/10 border border-[#b3ff00]/20 flex items-center justify-center text-[#b3ff00] mb-6">
              <Headphones
                size={28}
                className="group-hover:scale-110 transition duration-300"
              />
            </div>

            <h2 className="text-2xl font-bold">Voice Hangouts</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Chill in voice chats, listen to music, and talk with friends
              anytime.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative z-10 px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#b3ff00] uppercase tracking-[0.2em] text-sm">
            FAQ
          </p>

          <h2 className="mt-4 text-5xl font-black">Questions?</h2>

          <div className="mt-12 space-y-6">
            {/* FAQ Item */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">Apakah server ini aktif?</h3>

              <p className="mt-3 text-white/60">
                Ya, komunitas ini aktif setiap hari dengan obrolan, obrolan
                voice, dan event seru.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">
                Apakah tersedia bot di server ini?
              </h3>

              <p className="mt-3 text-white/60">
                Tentu saja, berbagai bot kami memilikinya mulai dari bot
                utilitas, musik hingga bot game.
              </p>
            </div>

            {/* FAQ Item */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <h3 className="text-xl font-bold">
                Apakah server ini mengandung NSFW?
              </h3>

              <p className="mt-3 text-white/60">
                Tidak, server ini tidak mengandung NSFW kami menciptakan server
                ini agar ramah untuk semua orang.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-white/40 text-sm">
        © 2026 Arcade Community
      </footer>
    </div>
  );
}
