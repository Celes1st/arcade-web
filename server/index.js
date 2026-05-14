import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const app = express();

app.use(cors());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
  ],
});

let isReady = false;

/* =========================
   BOT READY
========================= */

client.once("ready", async () => {
  console.log(`✅ READY AS ${client.user.tag}`);

  isReady = true;

  try {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);

    console.log(`✅ CONNECTED TO: ${guild.name}`);
  } catch (err) {
    console.error("❌ GUILD FETCH ERROR");
    console.error(err);
  }
});

/* =========================
   API
========================= */

app.get("/", (req, res) => {
  res.send("API ONLINE");
});

app.get("/api/server-stats", async (req, res) => {
  try {
    if (!isReady) {
      return res.status(503).json({
        success: false,
        error: "Bot not ready yet",
      });
    }

    const guild = await client.guilds.fetch(process.env.GUILD_ID);

    await guild.members.fetch();

    const onlineMembers = guild.members.cache.filter(
      (m) => m.presence?.status === "online"
    ).size;

    res.json({
      success: true,
      serverName: guild.name,
      members: guild.memberCount,
      online: onlineMembers,
      channels: guild.channels.cache.size,
      roles: guild.roles.cache.size,
      icon: guild.iconURL(),
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});

/* =========================
   LOGIN BOT
========================= */

client.login(process.env.BOT_TOKEN);