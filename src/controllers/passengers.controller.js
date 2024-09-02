import { PassengerService } from "../services/passengers.services.js";

const passengerService = new PassengerService();

export const CreatePassenger = async (req, res) => {
  try {
    const passenger = await passengerService.createPassenger(req.body);
    return res.status(201).json(passenger);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const findAllPassengers = (req, res) => {
  res.json({
    message: "This endpoint obtain all passengers",
  });
};
export const findOnePassenger = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "This endpoint obtain a passenger",
    id,
  });
};
export const UpdatePassenger = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "This endpoint update this passenger for id",
    id,
  });
};
export const DeletePassenger = (req, res) => {
  const { id } = req.params;
  res.json({
    message: "This endpont remove a passenger for id",
    id,
  });
};
