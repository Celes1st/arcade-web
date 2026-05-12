import Navbar from "../components/Navbar";

export default function Social() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Glow */}
      <div className="absolute top-[-250px] left-[10%] w-[700px] h-[700px] bg-[#b3ff00]/10 blur-[180px] rounded-full" />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-44 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="inline-block text-[#b3ff00] font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-[#b3ff00]/30 bg-[#b3ff00]/10 backdrop-blur-md">
              SOCIAL HUB
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              CONNECT WITH US
            </p>
          </div>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight">
            Our
            <br />
            <span className="text-[#b3ff00]">Social Platforms</span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-2xl leading-relaxed">
            Follow our community across different platforms and stay connected
            everywhere.
          </p>
        </div>
      </section>

      {/* Social Cards */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Discord */}
          <a
            href="https://discord.com/invite/4KWauvZeSN"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#5865F2]/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Discord</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Join our active community server and chat with members.
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-pink-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Instagram</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Photos, highlights, stories, and updates.
            </p>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">TikTok</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Funny clips, edits, and community moments.
            </p>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-red-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">YouTube</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Event recaps, edits, and community content.
            </p>
          </a>

          {/* Spotify */}
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Spotify</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Listen to community playlists and music sessions.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/30 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">GitHub</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Open source projects, bots, and development stuff.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
