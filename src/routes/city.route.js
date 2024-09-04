import { Router } from "express";
export const router = Router();

import {
  CreateCity,
  deleteCity,
  findAllCities,
  findOneCity,
  updateCity,
} from "../controllers/city.controller.js";

import { validateExistCity } from "../middlewares/city.middlewares.js";

//Roots
router.route("/").post(CreateCity).get(findAllCities);
router
  .route("/:id")
  .get(validateExistCity, findOneCity)
  .patch(updateCity)
  .delete(validateExistCity, deleteCity);
