import { validateCity, validatePartialCity } from "../schema/schema.city.js";
import { CityService } from "../services/city.services.js";

// instance of class
const cityService = new CityService();

export const CreateCity = async (req, res) => {
  try {
    const { hasError, errorMessage, dataValidate } = validateCity(req.body);
    if (hasError)
      return res.status(422).json({
        status: "error",
        message: errorMessage,
      });
    const city = await cityService.createCity(dataValidate);
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
export const findOneCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.findOneCity(id);
    if (!city)
      return res.status(404).json({
        status: "Error",
        message: `City with id: ${id} not found`,
      });
    return res.status(200).json(city);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const updateCity = async (req, res) => {
  try {
    const { hasError, errorMessage, dataValidate } = validatePartialCity(
      req.body
    );
    if (hasError)
      return res.status(422).json({
        status: "error",
        message: errorMessage,
      });
    const { id } = req.params;

    const city = await cityService.findOneCity(id);

    if (!city)
      return res.status(404).json({
        status: "Error",
        message: `Citys with id: ${id} not found`,
      });

    const updateCity = await cityService.updateCity(city, dataValidate);
    return res.status(200).json(updateCity);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await cityService.findOneCity(id);
    if (!city)
      return res.status(404).json({
        status: "Error",
        message: `City with id: ${id} not found`,
      });
    await cityService.deleteCity(city);
    return res.status(204);
  } catch (error) {
    return res.status(500).json(error);
  }
};
