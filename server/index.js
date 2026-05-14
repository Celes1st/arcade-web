import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 10000;

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

let botReady = false;

client.once("ready", async () => {
  console.log(`✅ READY AS ${client.user.tag}`);
  botReady = true;
});

client.on("error", (err) => {
  console.log("❌ CLIENT ERROR:", err);
});

client.on("warn", (msg) => {
  console.log("⚠️ WARN:", msg);
});

app.get("/", (req, res) => {
  res.send("API ONLINE");
});

app.get("/api/server-stats", async (req, res) => {
  try {
    if (!botReady) {
      return res.json({
        success: false,
        error: "Bot not ready yet",
      });
    }

    const guild = await client.guilds.fetch(process.env.GUILD_ID);

    await guild.members.fetch();

    res.json({
      success: true,
      serverName: guild.name,
      members: guild.memberCount,
      online: guild.members.cache.filter((m) => m.presence?.status === "online")
        .size,
    });
  } catch (err) {
    console.log("API ERROR:", err);

    res.json({
      success: false,
      error: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});

client.login(process.env.BOT_TOKEN);
