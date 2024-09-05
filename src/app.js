//export framework
import express from "express";
import { router } from "./routes/index.js";
import { AppError } from "./errors/appError.js";
import morgan from "morgan";
import { envs } from "./config/enviroments/enviroments.js";
import { globalErrorHandle } from "./errors/error.controller.js";

//Definition variable from express execuite
const app = express();

app.use(express.json());

console.log(envs.NODE_ENV);

if (envs.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1", router);
//FUNCTIONS

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//Validate error

app.use(globalErrorHandle);
export default app;
