import { PassengerService } from "../services/passengers.services.js";

import {
  validatePartialPassenger,
  validatePassenger,
} from "../schema/schema.passenger.js";
import { AppError, catchError } from "../errors/index.js";

const passengerService = new PassengerService();

export const CreatePassenger = catchError(async (req, res, next) => {
  const { hasError, errorMessage, dataValidate } = validatePassenger(req.body);

  if (hasError)
    return res.status(422).json({
      status: "error",
      message: errorMessage,
    });

  const passenger = await passengerService.createPassenger(dataValidate);
  return res.status(201).json(passenger);
});

export const findAllPassengers = catchError(async (req, res, next) => {
  const passengers = await passengerService.findAllPassengers();
  // throw new Error("Error🔐✖️🤷‍♂️");

  return res.status(200).json(passengers);
});

export const findOnePassenger = catchError(async (req, res, next) => {
  const { id } = req.params;

  const passenger = await passengerService.findOnePassenger(id);
  if (!passenger)
    return next(new AppError(`Passenger with id: ${id} not found`, 404));

  return res.status(200).json(passenger);
});

export const UpdatePassenger = catchError(async (req, res) => {
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
});

export const DeletePassenger = catchError(async (req, res, next) => {
  const { id } = req.params;
  const passenger = await passengerService.findOnePassenger(id);

  if (!passenger)
    return res.status(404).json({
      status: "Error",
      message: `Passenger with id: ${id} not found`,
    });

  await passengerService.deletePassenger(passenger);
  return res.status(204);
});
