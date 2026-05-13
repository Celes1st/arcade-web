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
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        error: "No token",
      });
    }

    const token = authHeader.split(" ")[1];

    // GET USER
    const userRes = await axios.get("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = userRes.data;

    // GET MEMBER
    const memberRes = await axios.get(
      `https://discord.com/api/guilds/${process.env.GUILD_ID}/members/${user.id}`,
      {
        headers: {
          Authorization: `Bot ${process.env.BOT_TOKEN}`,
        },
      },
    );

    const member = memberRes.data;

    // DEBUG
    console.log("========== DEBUG ==========");
    console.log("USERNAME:", user.username);
    console.log("USER ID:", user.id);
    console.log("ROLES:", member.roles);
    console.log("OWNER ROLE ENV:", process.env.OWNER_ROLE_ID);
    console.log("===========================");

    // FORCE STRING CHECK
    const ownerRoleId = String(process.env.OWNER_ROLE_ID);

    const isOwner = member.roles.some((role) => String(role) === ownerRoleId);

    console.log("IS OWNER:", isOwner);

    // BLOCK
    if (!isOwner) {
      console.log("BLOCKED");

      return res.status(403).json({
        success: false,
        error: "Owner only",
      });
    }

    console.log("ALLOWED");

    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    console.log("ERROR:");
    console.error(err.response?.data || err.message);

    return res.status(403).json({
      success: false,
      error: "Unauthorized",
    });
  }
});

app.listen(3001, () => {
  console.log("API running");
});
