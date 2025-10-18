import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import Router from "./routes/getProfile.js";
import rateLimit from "express-rate-limit"

dotenv.config();
const Port = process.env.PORT || 3001

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(express.json({ limit: "30kb" }));
app.use(morgan("dev"))

app.use(cors());
app.use(apiLimiter);

app.get("/", (req, res) => {
  res.send(
    "<h2>HNG 13 Backend Task 0</h2><a href='/me'>Click to view my profile </a>"
  );
});
app.use("/me", Router);

app.listen(Port, () => {
  console.log(`Server listening on ${Port}...`);
});
