// src/pages/DiscordCallback.jsx

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function DiscordCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;

    const params = new URLSearchParams(hash.replace("#", ""));

    const token = params.get("access_token");

    if (token) {
      // SAVE TOKEN
      localStorage.setItem("discord_token", token);

      // GO DASHBOARD
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      Loading...
    </div>
  );
}
