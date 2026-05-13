import Navbar from "../components/Navbar";

export default function ServerInfo() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          absolute top-[-250px] left-[20%]
          w-[700px] h-[700px]
          bg-[#b3ff00]/10
          blur-[180px]
          rounded-full
        "
      />

      {/* HERO */}
      <section
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pt-36 sm:pt-40
          pb-20 sm:pb-24
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-block text-[#b3ff00] font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-[#b3ff00]/30 bg-[#b3ff00]/10 backdrop-blur-md">
              SERVER INFORMATION
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              COMMUNITY SYSTEM
            </p>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Everything About
            <br />
            <span className="text-[#b3ff00]">Arcade Server</span>
          </h1>

          <p className="mt-8 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Explore channels, bots, systems, level roles, perks, and everything
            inside our Discord community.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 px-5 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-[#b3ff00]">
              20+
            </h2>

            <p className="mt-3 text-white/60 text-sm sm:text-base">Members</p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-[#b3ff00]">
              10+
            </h2>

            <p className="mt-3 text-white/60 text-sm sm:text-base">Channels</p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-[#b3ff00]">
              20+
            </h2>

            <p className="mt-3 text-white/60 text-sm sm:text-base">
              Bots Installed
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <h2 className="text-4xl sm:text-5xl font-black text-[#b3ff00]">
              24/7
            </h2>

            <p className="mt-3 text-white/60 text-sm sm:text-base">
              Active Community
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
