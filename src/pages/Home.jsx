import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Gamepad2, Users, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white relative">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          absolute left-1/2 top-[-200px]
          h-[500px] w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#b3ff00]/10
          blur-[150px]
        "
      />

      {/* HERO */}
      <section
        className="
          relative z-10
          flex min-h-screen items-center
          px-5 sm:px-8 lg:px-16
          pt-36 pb-24
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div>
            <p className="text-sm uppercase tracking-[0.0em] text-[#b3ff00]">
              Arcade Server
            </p>

            <h1
              className="
                mt-6
                text-5xl sm:text-6xl lg:text-7xl
                font-black
                leading-tight
              "
            >
              Arcade
              <br />
              Server for you
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-base sm:text-lg
                leading-relaxed
                text-white/60
              "
            >
              Tempat nongkrong komunitas gaming modern dengan event, social,
              voice chat, dan banyak fitur seru.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="https://discord.gg/4KWauvZeSN"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-2xl
                  bg-[#b3ff00]
                  px-7 py-4
                  text-center
                  font-semibold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Join Community
              </a>

              <a
                href="#features"
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-7 py-4
                  text-center
                  font-semibold
                  hover:bg-white/10
                  transition
                "
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div
              className="
                absolute
                h-72 w-72
                rounded-full
                bg-[#b3ff00]/20
                blur-[120px]
              "
            />

            <img
              src="/banner-arcade.png"
              alt="hero"
              className="
                relative z-10
                w-full max-w-md
                rounded-[32px]
                border border-white/10
                object-cover
                shadow-2xl
              "
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pb-24
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* TITLE */}
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#b3ff00]">
              Features
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-black">
              Why Choose Arcade?
            </h2>
          </div>

          {/* GRID */}
          <div
            className="
              grid gap-6
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6 sm:p-8
                backdrop-blur-xl
                transition
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                hover:border-[#b3ff00]/40
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#b3ff00]/10
                  text-[#b3ff00]
                "
              >
                <Users size={28} />
              </div>

              <h3 className="text-2xl font-bold">Friendly Community</h3>

              <p className="mt-4 leading-relaxed text-white/60">
                Bertemu member baru, ngobrol, dan bangun circle gaming yang
                aktif.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6 sm:p-8
                backdrop-blur-xl
                transition
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                hover:border-[#b3ff00]/40
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#b3ff00]/10
                  text-[#b3ff00]
                "
              >
                <Gamepad2 size={28} />
              </div>

              <h3 className="text-2xl font-bold">Gaming Events</h3>

              <p className="mt-4 leading-relaxed text-white/60">
                Ikut event, turnamen, dan aktivitas komunitas yang seru.
              </p>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                border border-white/10
                bg-white/5
                p-6 sm:p-8
                backdrop-blur-xl
                transition
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                hover:border-[#b3ff00]/40
                md:col-span-2
                xl:col-span-1
              "
            >
              <div
                className="
                  mb-6
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-[#b3ff00]/10
                  text-[#b3ff00]
                "
              >
                <Headphones size={28} />
              </div>

              <h3 className="text-2xl font-bold">Voice Hangouts</h3>

              <p className="mt-4 leading-relaxed text-white/60">
                Chill bareng di voice chat kapan aja bersama komunitas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
