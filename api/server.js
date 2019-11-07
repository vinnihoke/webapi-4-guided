const express = require("express");
const helmet = require("helmet");

const Shoutouts = require("../data/shoutouts-model.js");

const server = express();

const { MOTD } = process.env;

server.use(helmet());
server.use(express.json());

server.get("/", async (req, res) => {
  try {
    const shouts = await db("shouts");
    const motd = MOTD || "Hi World!!!";

    res.status(200).json({ motd, shouts });
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot retrieve the shouts" });
  }
});

server.post("/", async (req, res) => {
  try {
    const [id] = await db("shouts").insert(req.body);
    console.log(req.body);
    const shouts = await db("shouts");

    res.status(201).json(shouts);
  } catch (error) {
    console.error("\nERROR", error);
    res.status(500).json({ error: "Cannot add the shout" });
  }
});

module.exports = server;
