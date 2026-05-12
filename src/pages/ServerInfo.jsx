import Navbar from "../components/Navbar";

export default function ServerInfo() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-[-250px] left-[20%] w-[700px] h-[700px] bg-[#b3ff00]/10 blur-[180px] rounded-full" />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-44 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="inline-block text-[#b3ff00] font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-[#b3ff00]/30 bg-[#b3ff00]/10 backdrop-blur-md">
              SERVER INFORMATION
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              COMMUNITY SYSTEM
            </p>
          </div>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight">
            Everything About
            <br />
            <span className="text-[#b3ff00]">Arcade Server</span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-2xl leading-relaxed">
            Explore channels, bots, systems, level roles, perks, and everything
            inside our Discord community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-[#b3ff00]">20+</h2>

            <p className="mt-3 text-white/60">Members</p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-[#b3ff00]">10+</h2>

            <p className="mt-3 text-white/60">Channels</p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-[#b3ff00]">20+</h2>

            <p className="mt-3 text-white/60">Bots Installed</p>
          </div>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-5xl font-black text-[#b3ff00]">24/7</h2>

            <p className="mt-3 text-white/60">Active Community</p>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Main Channels</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:border-[#b3ff00]/30 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold"># chitchat</h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Main chatting channel for daily conversations and community
                interaction.
              </p>
            </div>

            {/* Channel */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:border-[#b3ff00]/30 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold"># media</h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Share screenshots, edits, memes, and creative content.
              </p>
            </div>

            {/* Channel */}
            <div className="group p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl hover:border-[#b3ff00]/30 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold"># game-center</h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                Find teammates, discuss games, and join tournaments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="relative z-10 px-6 pb-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-10">Server Roles</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-purple-300">OWNER</h3>

              <p className="mt-3 text-white/60 text-sm">The server founder.</p>
            </div>

            <div className="p-6 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-cyan-300">MOD</h3>

              <p className="mt-3 text-white/60 text-sm">
                Maintains community safety and order.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-pink-500/20 bg-pink-500/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-pink-300">VIP MEMBER</h3>

              <p className="mt-3 text-white/60 text-sm">
                Special perks for supporting the server.
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-[#b3ff00]/20 bg-[#b3ff00]/10 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-[#d7ff7a]">MEMBER</h3>

              <p className="mt-3 text-white/60 text-sm">
                Regular community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bots */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16">
          <h2 className="text-5xl font-black">Server Bots</h2>

          <p className="mt-6 text-white/60 max-w-2xl leading-relaxed">
            Our server uses premium bots for moderation, music, leveling,
            tickets, and automation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-3xl bg-black/30 border border-white/10">
              🤖 Arcade
            </div>

            <div className="p-6 rounded-3xl bg-black/30 border border-white/10">
              🎵 Jockie Music
            </div>

            <div className="p-6 rounded-3xl bg-black/30 border border-white/10">
              🎰 OwO
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
