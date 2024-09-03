import { CityService } from "../services/city.services.js";

// instance of class
const cityService = new CityService();

export const CreateCity = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json(city);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const findAllCities = async (req, res) => {
  try {
    const cities = await cityService.findAllCities();
    return res.status(200).json(cities);
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const findOneCity = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const updateCity = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error);
  }
};
export const deleteCity = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error);
  }
};
