import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";

export default function Partner() {
  const partners = useMemo(
    () => [
      {
        name: "Normies Legacy",
        url: "https://discord.gg/m5vhd6tPRJ",
        preview: "/videos/silent-train.mp4",
      },

      {
        name: "Constellation",
        url: "https://discord.com/invite/Ne7MW7jcBX",
        preview: "/videos/tanya.mp4",
      },

      {
        name: "One For All",
        url: "https://discord.gg/rZ6YDya4M9",
        preview: "/videos/elaina.mp4",
      },

      {
        name: "Nebula",
        url: "https://discord.gg/",
        preview: "/videos/silent-train.mp4",
      },

      {
        name: "Akatsuki",
        url: "https://discord.gg/",
        preview: "/videos/tanya.mp4",
      },

      {
        name: "Void Network",
        url: "https://discord.gg/",
        preview: "/videos/elaina.mp4",
      },

      {
        name: "Zenith",
        url: "https://discord.gg/",
        preview: "/videos/silent-train.mp4",
      },

      {
        name: "Solaris",
        url: "https://discord.gg/",
        preview: "/videos/tanya.mp4",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const [videoReady, setVideoReady] = useState(false);

  const activePartner = partners[activeIndex];

  /* PRELOAD */
  useEffect(() => {
    partners.forEach((partner) => {
      const video = document.createElement("video");

      video.src = partner.preview;

      video.preload = "auto";
    });
  }, [partners]);

  /* RESET READY */
  useEffect(() => {
    setVideoReady(false);
  }, [activeIndex]);

  return (
    <div className="partner-page">
      <Navbar />

      {/* BG */}
      <div className="partner-preview">
        {/* THUMB / FAKE BG */}
        <div
          className={`partner-video-thumb ${videoReady ? "hide-thumb" : ""}`}
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(0,0,0,0.25),
                rgba(0,0,0,0.45)
              ),
              url("https://picsum.photos/1920/1080?random=${activeIndex}")
            `,
          }}
        />

        {/* REAL VIDEO */}
        <video
          key={activePartner.preview}
          src={activePartner.preview}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className={`partner-preview-media ${
            videoReady ? "video-visible" : "video-hidden"
          }`}
        />
      </div>

      {/* OVERLAY */}
      <div className="partner-overlay" />

      {/* GLOW */}
      <div className="partner-glow" />

      {/* CONTENT */}
      <section className="partner-content">
        <div className="partner-list">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setActiveIndex(index)}
              className={`partner-name ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {partner.name}
            </a>
          ))}
        </div>
      </section>

      {/* BOTTOM */}
      <div className="partner-bottom">
        contoh ajalah, maap klo ada server klean
      </div>
      {/* <div className="partner-bottom">Hover To Explore</div> */}
    </div>
  );
}
