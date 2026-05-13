import Navbar from "../components/Navbar";

export default function Partner() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Glow */}
      <div className="absolute top-[-250px] right-[10%] w-[700px] h-[700px] bg-[#b3ff00]/10 blur-[180px] rounded-full" />

      {/* Hero */}
      <section className="relative z-10 px-6 pt-44 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <p className="inline-block text-[#b3ff00] font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-[#b3ff00]/30 bg-[#b3ff00]/10 backdrop-blur-md">
              PARTNERS
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              TRUSTED COMMUNITIES
            </p>
          </div>

          <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight">
            Our
            <br />
            <span className="text-[#b3ff00]">Partners</span>
          </h1>

          <p className="mt-8 text-white/60 text-lg max-w-2xl leading-relaxed">
            Meet our official partners, communities, and collaborative projects.
          </p>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="relative z-10 px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Partner 1 */}
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#b3ff00]/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Nova Community</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Gaming community focused on events and collaborations.
            </p>
          </a>

          {/* Partner 2 */}
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Zenith</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Creative digital server and media collaboration hub.
            </p>
          </a>

          {/* Partner 3 */}
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-pink-500/40 hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-4xl font-black">Lunaris</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Anime, gaming, and entertainment based community server.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
