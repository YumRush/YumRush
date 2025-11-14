import express from "express";
import { stellarServer } from "../config/stellar";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  try {
    const account = await stellarServer.loadAccount(
      "GBZXN7PIRZGNMHGAJB5JY6NS4NNTKS7K6YVJARX7O67I2FR5S4LJ7O3F"
    );

    return res.json({
      ok: true,
      horizon: "connected",
      sequence: account.sequence,
    });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      message: "Failed to connect to Stellar Horizon",
      error: err.message,
    });
  }
});

export default router;
