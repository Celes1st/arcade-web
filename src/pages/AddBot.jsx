import Navbar from "../components/Navbar";

export default function AddBot() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          absolute top-[-250px] left-1/2 -translate-x-1/2
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
          {/* TAGS */}
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="
                inline-block
                text-[#b3ff00]
                font-medium
                uppercase
                text-[10px]
                tracking-[0.08em]
                px-3 py-1
                rounded-full
                border border-[#b3ff00]/30
                bg-[#b3ff00]/10
                backdrop-blur-md
              "
            >
              DISCORD BOT
            </p>

            <p
              className="
                inline-block
                text-white/70
                font-medium
                uppercase
                text-[10px]
                tracking-[0.08em]
                px-3 py-1
                rounded-full
                border border-white/10
                bg-white/5
                backdrop-blur-md
              "
            >
              AUTOMATION SYSTEM
            </p>
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              font-black
              leading-tight
            "
          >
            Add Our
            <br />
            <span className="text-[#b3ff00]">Discord Bot</span>
          </h1>

          {/* DESC */}
          <p
            className="
              mt-8
              text-white/60
              text-base sm:text-lg
              max-w-2xl
              leading-relaxed
            "
          >
            Enhance your Discord server with moderation, automation, utility,
            and community features.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pb-24 sm:pb-32
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {/* MODERATION */}
          <div
            className="
              group
              p-6 sm:p-8 lg:p-10
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-[#b3ff00]/40
              animate-[fadeUp_.5s_ease]
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            <h2 className="text-3xl sm:text-4xl font-black">Moderation</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Powerful moderation tools to keep your server safe.
            </p>
          </div>

          {/* UTILITY */}
          <div
            className="
              group
              p-6 sm:p-8 lg:p-10
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-[#b3ff00]/40
              animate-[fadeUp_.5s_ease]
              hover:-translate-y-2
              transition-all duration-300
            "
          >
            <h2 className="text-3xl sm:text-4xl font-black">Utility</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Helpful commands, automation systems, and server tools.
            </p>
          </div>

          {/* COMMUNITY */}
          <div
            className="
              group
              p-6 sm:p-8 lg:p-10
              rounded-3xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:border-[#b3ff00]/40
              animate-[fadeUp_.5s_ease]
              hover:-translate-y-2
              transition-all duration-300
              md:col-span-2
              xl:col-span-1
            "
          >
            <h2 className="text-3xl sm:text-4xl font-black">Community</h2>

            <p className="mt-4 text-white/60 leading-relaxed">
              Leveling, economy, rewards, and interactive features.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <a
            href="https://discord.com/oauth2/authorize?client_id=1465978664419065920"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full sm:w-auto
              text-center
              px-8 sm:px-10
              py-4 sm:py-5
              rounded-2xl
              bg-[#b3ff00]
              text-black
              font-bold
              text-base sm:text-lg
              hover:scale-105
              transition-all duration-300
              shadow-[0_0_40px_rgba(179,255,0,0.5)]
            "
          >
            Add Bot To Server
          </a>
        </div>
      </section>
    </div>
  );
}
