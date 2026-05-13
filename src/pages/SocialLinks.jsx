import Navbar from "../components/Navbar";

export default function SocialLinks() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          absolute top-[-250px] left-[10%]
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
              SOCIAL HUB
            </p>

            <p className="inline-block text-white/70 font-medium uppercase text-[10px] tracking-[0.08em] px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              CONNECT WITH US
            </p>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
            Our
            <br />
            <span className="text-[#b3ff00]">Social Platforms</span>
          </h1>

          <p className="mt-8 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
            Follow our community across different platforms and stay connected
            everywhere.
          </p>
        </div>
      </section>

      {/* SOCIAL CARDS */}
      <section className="relative z-10 px-5 sm:px-8 lg:px-16 pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            ["Discord", "#5865F2"],
            ["Instagram", "#ec4899"],
            ["TikTok", "#22d3ee"],
            ["YouTube", "#ef4444"],
            ["Spotify", "#22c55e"],
            ["GitHub", "#ffffff"],
          ].map(([name, color]) => (
            <a
              key={name}
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6 sm:p-8 lg:p-10
                backdrop-blur-xl
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                transition-all duration-300
              "
              style={{
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <h2 className="text-3xl sm:text-4xl font-black">{name}</h2>

              <p className="mt-4 text-white/60 leading-relaxed">
                Connect with our {name} community and stay updated.
              </p>

              <div
                className="mt-8 h-1 rounded-full"
                style={{
                  background: color,
                }}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
