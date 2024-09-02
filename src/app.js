//export framework
import express from "express";
import { router as passengerRouter } from "./routes/passengers.route.js";
//Definition variable from express execuite
const app = express();

app.use(express.json());

app.use("/api/v1", passengerRouter);
//FUNCTIONS

export default app;
