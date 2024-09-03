//export framework
import express from "express";
import { router as passengerRouter } from "./routes/passengers.route.js";
import { router as cityRouter } from "./routes/city.route.js";
//Definition variable from express execuite
const app = express();

app.use(express.json());

app.use("/api/v1", passengerRouter);
app.use("/api/v1", cityRouter);
//FUNCTIONS

export default app;
