//export framework
import express from "express";
import { router } from "./routes/index.js";
import { AppError } from "./errors/appError.js";

//Definition variable from express execuite
const app = express();

app.use(express.json());

app.use("/api/v1", router);
//FUNCTIONS

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//Validate error

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});
export default app;
