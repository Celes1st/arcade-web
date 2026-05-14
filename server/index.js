import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { Client, GatewayIntentBits } from "discord.js";

dotenv.config();

const app = express();

app.use(cors());

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN).catch((err) => {
  console.error("LOGIN ERROR:", err);
});

app.get("/", (req, res) => {
  res.send("API Running");
});

app.get("/api/server-stats", async (req, res) => {
  try {
    const guild = await client.guilds.fetch(process.env.GUILD_ID);

    res.json({
      success: true,
      serverName: guild.name,
      members: guild.memberCount,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
