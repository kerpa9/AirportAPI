import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  DB_URI: env.get("DB_URI").required().asString(),
  NODE_ENV: env.get("NODE_ENV").required().asString(),
};
