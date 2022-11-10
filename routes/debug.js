const { Router } = require("express");

const router = Router();

router.get("/version", (req, res) => res.send("version 1.0"));

router.get("/env", (req, res) => res.json(process.env));

router.get("/redis", async (req, res) => res.send("Redis Connected"));

router.get("/mongo", async (req, res) => res.send("MongoDB Connected"));

router.get("/error", (req, res) => {
  res.status(500).send("Error! Server Crashing");
  console.log("Internal Error Crash!");
  process.exit(1);
});

module.exports = router;
