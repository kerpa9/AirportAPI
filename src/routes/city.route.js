import { Router } from "express";
export const router = Router();

import { CreateCity, findAllCities } from "../controllers/city.controller.js";

//Roots
router.route("/city").post(CreateCity).get(findAllCities);
