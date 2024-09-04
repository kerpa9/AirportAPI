import { Router } from "express";
export const router = Router();
import {
  CreatePassenger,
  findAllPassengers,
  findOnePassenger,
  UpdatePassenger,
  DeletePassenger,
} from "../controllers/passengers.controller.js";

//Roots
router.route("/").get(findAllPassengers).post(CreatePassenger);
router
  .route("/:id")
  .get(findOnePassenger)
  .patch(UpdatePassenger)
  .delete(DeletePassenger);
