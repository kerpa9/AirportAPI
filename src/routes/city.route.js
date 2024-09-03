import { Router } from "express";
export const router = Router();

import {
  CreateCity,
  deleteCity,
  findAllCities,
  findOneCity,
  updateCity,
} from "../controllers/city.controller.js";

//Roots
router.route("/city").post(CreateCity).get(findAllCities);
router.route("/city/:id").get(findOneCity).patch(updateCity).delete(deleteCity);
