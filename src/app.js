//export framework
import express from "express";
import { router } from "./routes/index.js";
import { AppError } from "./errors/appError.js";
import { envs } from "./config/enviroments/enviroments.js";
import { globalErrorHandle } from "./controllers/error.controller.js";
import { enableCors } from "./config/enviroments/plugins/cors.plugin.js";
import { enableMorgan } from "./config/enviroments/plugins/morgan.plugin.js";

//Definition variable from express execuite
const app = express();

const ACCEPTED_ORIGINS = ["http://localhost:8080", "http://localhost:4200"];

app.use(express.json());

console.log(envs.NODE_ENV);

if (envs.NODE_ENV === "development") {
  enableMorgan(app);
}

enableCors(app, ACCEPTED_ORIGINS);

app.use("/api/v1", router);
//FUNCTIONS

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//Validate error

app.use(globalErrorHandle);
export default app;
