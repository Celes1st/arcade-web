import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const app = express();

app.use(cors());

/* =========================
   DISCORD CLIENT
========================= */

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);

/* =========================
   API
========================= */

app.get("/", (req, res) => {
  res.send("Arcade API Running");
});

/* LIVE SERVER STATS */

app.get("/api/server-stats", async (req, res) => {
  try {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);

    await guild.members.fetch();

    res.json({
      success: true,

      members: guild.memberCount,

      channels: guild.channels.cache.size,

      roles: guild.roles.cache.size,

      serverName: guild.name,

      icon: guild.iconURL({
        size: 512,
      }),
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: "Failed to fetch server stats",
    });
  }
});

/* =========================
   START SERVER
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
