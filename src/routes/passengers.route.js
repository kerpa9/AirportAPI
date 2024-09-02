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
router.route("/passengers").get(findAllPassengers).post(CreatePassenger);
router
  .route("/passengers/:id")
  .get(findOnePassenger)
  .patch(UpdatePassenger)
  .delete(DeletePassenger);
