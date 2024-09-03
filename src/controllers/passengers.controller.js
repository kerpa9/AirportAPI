import { PassengerService } from "../services/passengers.services.js";

import {
  validatePartialPassenger,
  validatePassenger,
} from "../schema/schema.passenger.js";

const passengerService = new PassengerService();

export const CreatePassenger = async (req, res) => {
  try {
    const { hasError, errorMessage, dataValidate } = validatePassenger(
      req.body
    );

    if (hasError)
      return res.status(422).json({
        status: "error",
        message: errorMessage,
      });

    const passenger = await passengerService.createPassenger(dataValidate);
    return res.status(201).json(passenger);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const findAllPassengers = async (req, res) => {
  try {
    const passengers = await passengerService.findAllPassengers();
    return res.status(200).json(passengers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const findOnePassenger = async (req, res) => {
  const { id } = req.params;
  try {
    const passenger = await passengerService.findOnePassenger(id);
    if (!passenger)
      return res.status(404).json({
        status: "Error",
        message: `Passenger with id: ${id} not found`,
      });
    return res.status(200).json(passenger);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const UpdatePassenger = async (req, res) => {
  try {
    const { hasError, errorMessage, dataValidate } = validatePartialPassenger(
      req.body
    );

    if (hasError)
      return res.status(422).json({
        status: "error",
        message: errorMessage,
      });
    const { id } = req.params;

    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger)
      return res.status(404).json({
        status: "Error",
        message: `Passenger with id: ${id} not found`,
      });
    const updatePassenger = await passengerService.updatePassenger(
      passenger,
      dataValidate
    );
    return res.status(200).json(updatePassenger);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const DeletePassenger = async (req, res) => {
  try {
    const { id } = req.params;
    const passenger = await passengerService.findOnePassenger(id);

    if (!passenger) {
      return res.status(404).json({
        status: "Error",
        message: `Passenger with id: ${id} not found`,
      });
    }
    await passengerService.deletePassenger(passenger);
    return res.status(204);
  } catch (error) {
    return res.status(500).json(err);
  }
};
