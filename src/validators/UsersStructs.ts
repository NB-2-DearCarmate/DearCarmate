import { object, string, nullable, optional, refine } from "superstruct";

const isPasswordMatch = refine(
  string(),
  "passwordConfirmation",
  (value, context) => {
    const password = context.branch[0].password;
    return value === password;
  }
);

export const CreateUserStruct = object({
  name: string(),
  email: string(),
  employeeNumber: string(),
  phoneNumber: string(),
  password: string(),
  passwordConfirmation: isPasswordMatch,
  companyName: string(),
  companyCode: string(),
});

export const UpdateMyInfoStruct = object({
  employeeNumber: optional(string()),
  phoneNumber: optional(string()),
  currentPassword: string(),
  password: optional(string()),
  passwordConfirmation: optional(isPasswordMatch),
  imageUrl: optional(nullable(string())),
});
