import {
  object,
  partial,
  string,
  boolean,
  nonempty,
  pattern,
} from "superstruct";
import { createCompanyStruct } from "./CompanyStructs.js";

const PhoneNumber = pattern(string(), /^01[0|1|6|7|8|9]-\d{3,4}-\d{4}$/);

const Email = pattern(string(), /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

export const CreateUserStruct = object({
  name: nonempty(string()),
  email: nonempty(Email),
  phoneNumber: nonempty(PhoneNumber),
  password: nonempty(string()),
  passwordConfirmation: nonempty(string()),
  employeeNumber: nonempty(string()),
  isAdmin: boolean(),
  imageUrl: string(),
  company: createCompanyStruct,
});

export const UpdateUserStruct = partial(
  object({
    employeeNumber: nonempty(string()),
    phoneNumber: nonempty(PhoneNumber),
    currentPassword: nonempty(string()),
    password: nonempty(string()),
    passwordConfirmation: nonempty(string()),
    imageUrl: string(),
  })
);
