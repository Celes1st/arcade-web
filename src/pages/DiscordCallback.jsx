import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DiscordCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));

    const token = fragment.get("access_token");

    if (token) {
      console.log("TOKEN:", token);

      localStorage.setItem("discord_token", token);

      // DELAY DIKIT
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Logging in...
    </div>
  );
}
