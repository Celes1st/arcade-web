import Navbar from "../components/Navbar";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

import "../calendar.css";

import { useState } from "react";

export default function Events() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* GLOW */}
      <div
        className="
          absolute top-[-250px] right-[10%]
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
              COMMUNITY EVENTS
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
              BLOG & SCHEDULE
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
            Events &
            <br />
            <span className="text-[#b3ff00]">Community Logs</span>
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
            Stay updated with tournaments, watch parties, giveaways, and
            community activities.
          </p>
        </div>
      </section>

      {/* UPCOMING EVENT */}
      <section
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pb-20 sm:pb-24
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            rounded-[32px]
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            overflow-hidden
          "
        >
          <img
            src="banner-arcade.png"
            alt="event"
            className="
              w-full
              h-[220px] sm:h-[300px] lg:h-[380px]
              object-cover
              opacity-80
            "
          />

          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-[#b3ff00] text-xs sm:text-sm uppercase tracking-[0.15em]">
              Upcoming Event
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black">
              Arcade Grand Opening
            </h2>

            <p
              className="
                mt-6
                text-white/60
                max-w-3xl
                leading-relaxed
                text-sm sm:text-base
              "
            >
              Gabung dan ikuti acara pembukaan server Arcade.
            </p>

            <button
              className="
                mt-8
                w-full sm:w-auto
                px-8 py-4
                rounded-2xl
                bg-[#b3ff00]
                text-black
                font-semibold
                hover:scale-105
                transition duration-300
              "
            >
              View Schedule
            </button>
          </div>
        </div>
      </section>

      {/* CALENDAR + SCHEDULE */}
      <section
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pb-20 sm:pb-24
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            grid grid-cols-1
            xl:grid-cols-2
            gap-8
          "
        >
          {/* CALENDAR */}
          <div
            className="
              p-6 sm:p-8
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              overflow-hidden
            "
          >
            <p className="text-[#b3ff00] uppercase text-sm tracking-[0.15em]">
              Event Calendar
            </p>

            <div className="mt-8 overflow-x-auto">
              <Calendar onChange={setDate} value={date} />
            </div>
          </div>

          {/* LIVE SCHEDULE */}
          <div
            className="
              p-6 sm:p-8
              rounded-[32px]
              border border-white/10
              bg-white/5
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />

              <p className="text-red-400 uppercase text-sm tracking-[0.15em]">
                Live Schedule
              </p>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black">
              Grand Opening
            </h2>

            <p
              className="
                mt-6
                text-white/60
                leading-relaxed
                text-sm sm:text-base
              "
            >
              Masih pengembangan sih, jadi event nya fek dulu
            </p>

            {/* COUNTDOWN */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div
                className="
                  p-4 sm:p-6
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-center
                "
              >
                <h3 className="text-3xl sm:text-4xl font-black text-[#b3ff00]">
                  99
                </h3>

                <p className="text-white/40 mt-2 text-xs sm:text-sm">Days</p>
              </div>

              <div
                className="
                  p-4 sm:p-6
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-center
                "
              >
                <h3 className="text-3xl sm:text-4xl font-black text-[#b3ff00]">
                  99
                </h3>

                <p className="text-white/40 mt-2 text-xs sm:text-sm">Hours</p>
              </div>

              <div
                className="
                  p-4 sm:p-6
                  rounded-2xl
                  bg-black/30
                  border border-white/10
                  text-center
                "
              >
                <h3 className="text-3xl sm:text-4xl font-black text-[#b3ff00]">
                  99
                </h3>

                <p className="text-white/40 mt-2 text-xs sm:text-sm">Minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT LOGS */}
      <section
        className="
          relative z-10
          px-5 sm:px-8 lg:px-16
          pb-24 sm:pb-32
        "
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-12">Recent Logs</h2>

          <div
            className="
              grid grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-6
            "
          >
            {/* CARD */}
            <div
              className="
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <img
                src="banner-arcade.png"
                alt=""
                className="
                  w-full
                  h-[220px]
                  object-cover
                "
              />

              <div className="p-6">
                <p className="text-[#b3ff00] text-sm">Kapan-kapan</p>

                <h3 className="mt-3 text-2xl font-bold">Nobar</h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  Members gathered for an anime watch party and voice chat
                  hangout.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <img
                src="banner-arcade.png"
                alt=""
                className="
                  w-full
                  h-[220px]
                  object-cover
                "
              />

              <div className="p-6">
                <p className="text-[#b3ff00] text-sm">Kapan-kapan</p>

                <h3 className="mt-3 text-2xl font-bold">Mabar</h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  Community teams played friendly scrims and ranked matches
                  together.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div
              className="
                rounded-3xl
                overflow-hidden
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                animate-[fadeUp_.5s_ease]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <img
                src="banner-arcade.png"
                alt=""
                className="
                  w-full
                  h-[220px]
                  object-cover
                "
              />

              <div className="p-6">
                <p className="text-[#b3ff00] text-sm">Kapan-kapan</p>

                <h3 className="mt-3 text-2xl font-bold">Rezeki Dadakan</h3>

                <p className="mt-4 text-white/60 leading-relaxed">
                  Multiple Nitro rewards were given to active members in the
                  server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
