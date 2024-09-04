import { CityService } from "../services/city.services.js";

const cityService = new CityService();
//This middleware validates information in the request
export const validateExistCity = async (req, res, next) => {
  const { id } = req.params;
  const city = await cityService.findOneCity(id);

  if (!city) {
    return res
      .status(404)
      .json({ status: "error", message: `City not with id: ${id}` });
  }
  req.city = city;
  next();
};
