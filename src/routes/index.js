import { Router } from "express";
import { router as cityRouter } from "./city.route.js";
import { router as passengerRouter } from "./passengers.route.js";

export const router = Router();

router.use("/passengers", passengerRouter);
router.use("/city", cityRouter);
