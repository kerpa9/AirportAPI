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
router.route("/city").post(CreateCity).get(findAllCities);
router
  .route("/city/:id")
  .get(validateExistCity, findOneCity)
  .patch(updateCity)
  .delete(deleteCity);
