import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import process from "process";

dotenv.config();

const app = express();

app.use(cors());

app.get("/api/check-member", async (req, res) => {
  try {
    const token = req.headers.authorization;

    // GET USER
    const userRes = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        Authorization: token,
      },
    });

    const user = userRes.data;

    // CHECK MEMBER
    const guildRes = await axios.get(
      `https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${user.id}`,
      {
        headers: {
          Authorization: `Bot ${process.env.BOT_TOKEN}`,
        },
      },
    );

    if (guildRes.data) {
      return res.json({
        success: true,
        user,
      });
    }

    return res.status(403).json({
      success: false,
    });
  } catch {
    return res.status(403).json({
      success: false,
    });
  }
});

app.listen(3001, () => {
  console.log("API running");
});
