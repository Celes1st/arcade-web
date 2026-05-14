import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

export default function ServerInfo() {
  const [server, setServer] = useState(null);

  useEffect(() => {
    const fetchServer = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/api/server-stats`,
        );

        const data = await res.json();

        setServer(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchServer();

    const interval = setInterval(fetchServer, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />

      <section className="relative z-10 px-6 pt-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-7xl font-black">
            Live Discord
            <span className="text-[#b3ff00]"> Stats</span>
          </h1>

          {server && (
            <div className="mt-16 grid grid-cols-2 xl:grid-cols-4 gap-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-5xl font-black text-[#b3ff00]">
                  {server.members}
                </h2>

                <p className="mt-3 text-white/60">Members</p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-5xl font-black text-[#b3ff00]">
                  {server.online}
                </h2>

                <p className="mt-3 text-white/60">Online</p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-5xl font-black text-[#b3ff00]">
                  {server.channels}
                </h2>

                <p className="mt-3 text-white/60">Channels</p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5">
                <h2 className="text-5xl font-black text-[#b3ff00]">
                  {server.roles}
                </h2>

                <p className="mt-3 text-white/60">Roles</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
