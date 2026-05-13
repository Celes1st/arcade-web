import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";

export default function Partner() {
  const partners = useMemo(
    () => [
      {
        name: "Normies Legacy",
        url: "https://discord.gg/m5vhd6tPRJ",
        preview: "/public/videos/silent-train.mp4",
        type: "video",
      },

      {
        name: "Constellation",
        url: "https://discord.com/invite/Ne7MW7jcBX",
        preview: "/public/videos/tanya.mp4",
        type: "video",
      },

      {
        name: "One For All",
        url: "https://discord.gg/rZ6YDya4M9",
        preview: "/public/videos/elaina.mp4",
        type: "video",
      },

      {
        name: "Nebula",
        url: "https://discord.gg/",
        preview: "/public/videos/silent-train.mp4",
        type: "video",
      },

      {
        name: "Akatsuki",
        url: "https://discord.gg/",
        preview: "/public/videos/tanya.mp4",
        type: "video",
      },

      {
        name: "Void Network",
        url: "https://discord.gg/",
        preview: "/public/videos/elaina.mp4",
        type: "video",
      },

      {
        name: "Zenith",
        url: "https://discord.gg/",
        preview: "/public/videos/silent-train.mp4",
        type: "video",
      },

      {
        name: "Solaris",
        url: "https://discord.gg/",
        preview: "/public/videos/tanya.mp4",
        type: "video",
      },
    ],
    [],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const activePartner = partners[activeIndex];

  return (
    <div className="partner-page">
      <Navbar />

      {/* VIDEO BG */}
      <div className="partner-preview">
        <video
          key={activePartner.preview}
          src={activePartner.preview}
          autoPlay
          muted
          loop
          playsInline
          className="partner-preview-media"
        />
      </div>

      {/* DARK OVERLAY */}
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

      {/* BOTTOM TEXT */}
      <div className="partner-bottom">
        ini example aja yh, maaf klo ada server klean
      </div>
      {/* <div className="partner-bottom">Hover To Explore</div> */}
    </div>
  );
}
