import express from "express";
import dotenv from "dotenv";
import stellarRoutes from "./routes/stellar";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/stellar", stellarRoutes);

app.listen(4000, () => {
  console.log("YumRush API running on port 4000");
});
