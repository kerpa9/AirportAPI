import z from "zod";
import { extraValidationData } from "../common/utils/extractErrorData.js";

export const passengerSchema = z.object({
  nroPassport: z.string().min(4).max(10),
  name: z.string().min(2).max(99),
  lastname: z.string().min(2).max(99),
  birthdate: z.string({
    invalid_type_error: "Birthdate must be a correct format",
    required_error: "Birthdate is required",
  }),
  genre: z.enum(["male", "female", "Prefer not to say"]),
  email: z.string().email(),
  celphone: z.string().min(5).max(30),
  createdBy: z.number(),
});

export function validatePassenger(data) {
  const result = passengerSchema.safeParse(data);

  const {
    hasError,
    errorMessage,
    data: dataValidate,
  } = extraValidationData(result);

  return {
    hasError,
    errorMessage,
    dataValidate,
  };
}

export function validatePartialPassenger(data) {
  const result = passengerSchema.partial().safeParse(data);

  const {
    hasError,
    errorMessage,
    data: dataValidate,
  } = extraValidationData(result);

  return {
    hasError,
    errorMessage,
    dataValidate,
  };
}
