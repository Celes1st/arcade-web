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
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center px-5">
      {/* GLOW */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-[#5865F2]/20
          blur-[150px]
          rounded-full
        "
      />

      {/* CARD */}
      <div
        className="
          relative z-10
          w-full max-w-md
          rounded-3xl
          border border-white/10
          bg-white/5
          backdrop-blur-2xl
          p-8 sm:p-10
          text-center
        "
      >
        {/* SPINNER */}
        <div className="flex justify-center">
          <div
            className="
              w-16 h-16
              rounded-full
              border-4
              border-white/10
              border-t-[#5865F2]
              animate-spin
            "
          />
        </div>

        {/* TITLE */}
        <h1 className="mt-8 text-3xl sm:text-4xl font-black">Authenticating</h1>

        {/* DESC */}
        <p className="mt-4 text-white/60 leading-relaxed text-sm sm:text-base">
          Checking your Discord owner access and preparing your dashboard
          session.
        </p>

        {/* STATUS */}
        <div
          className="
            mt-8
            rounded-2xl
            border border-white/10
            bg-black/30
            px-5 py-4
            text-sm text-white/50
          "
        >
          Please wait a moment...
        </div>
      </div>
    </div>
  );
}
