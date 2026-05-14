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

let isReady = false;

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  isReady = true;
});

client.login(process.env.BOT_TOKEN).catch(console.error);

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

    const guild = client.guilds.cache.get(process.env.GUILD_ID);

    if (!guild) {
      return res.status(404).json({
        success: false,
        error: "Guild not found",
      });
    }

    res.json({
      success: true,
      serverName: guild.name,
      members: guild.memberCount,
      icon: guild.iconURL({
        size: 512,
      }),
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
