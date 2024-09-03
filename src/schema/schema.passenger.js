import z from "zod";

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

export const extraValidationData = (resultValidation) => {
  let errorMessage;
  let data;
  const hasError = !resultValidation.success;

  if (hasError) errorMessage = JSON.parse(resultValidation.error.message);

  if (!hasError) data = resultValidation.data;

  return {
    hasError,
    errorMessage,
    data,
  };
};
