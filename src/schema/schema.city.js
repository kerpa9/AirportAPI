import z from "zod";
import { extraValidationData } from "../common/utils/extractErrorData.js";

export const citySchema = z.object({
  name: z.string().min(3),
  country: z.string().min(3),
  lon: z.number(),
  lat: z.number(),
});

export function validateCity(data) {
  const result = citySchema.safeParse(data);

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
export function validatePartialCity(data) {
  const result = citySchema.partial().safeParse(data);

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
