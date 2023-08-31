import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT || 5000,
  sault_round: Number(process.env.SAULT_ROUND) || 6,
  NODE_ENV: process.env.NODE_ENV || "development",
};
