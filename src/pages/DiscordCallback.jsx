// src/pages/DiscordCallback.jsx

import { useEffect } from "react";

export default function DiscordCallback() {
  useEffect(() => {
    const hash = window.location.hash;

    const params = new URLSearchParams(hash.replace("#", ""));

    const accessToken = params.get("access_token");

    // NO TOKEN
    if (!accessToken) {
      window.location.href = "/";
      return;
    }

    // CHECK OWNER ACCESS
    fetch(`${import.meta.env.VITE_API_URL}/api/check-member`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(async (res) => {
        // NOT OWNER
        if (!res.ok) {
          localStorage.removeItem("discord_token");

          alert("Owner only access");

          window.location.href = "/";

          return;
        }

        // SUCCESS
        const data = await res.json();

        if (data.success) {
          localStorage.setItem("discord_token", accessToken);

          window.location.href = "/dashboard";
        } else {
          localStorage.removeItem("discord_token");

          window.location.href = "/";
        }
      })
      .catch(() => {
        localStorage.removeItem("discord_token");

        window.location.href = "/";
      });
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Checking owner access...
    </div>
  );
}
