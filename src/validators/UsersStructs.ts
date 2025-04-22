import { object, string, refine } from "superstruct";

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
  company: string(),
  companyCode: string(),
});
