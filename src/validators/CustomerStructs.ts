import { object, string, enums, optional, refine } from "superstruct";

export const CustomerStruct = object({
  name: string(),
  contact: string(),
  email: refine(string(), "email", (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ),
  birthDate: optional(string()),
  gender: optional(enums(["male", "female"])),
});
