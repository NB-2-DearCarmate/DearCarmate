import {
  object,
  string,
  optional,
  enums,
  refine,
  Infer,
  intersection,
} from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

// 유효성 검사기
const Phone = refine(string(), "Phone", (value: string) =>
  /^01[016789]-\d{3,4}-\d{4}$/.test(value)
);

const Email = refine(string(), "Email", (value: string) =>
  /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)
);

const DateString = refine(string(), "DateString", (value: string) =>
  /^\d{4}-\d{2}-\d{2}/.test(value)
);

// 고객 등록/수정용
export const CustomerStruct = object({
  name: string(),
  birthDate: DateString,
  gender: enums(["male", "female"]),
  contact: Phone,
  email: optional(Email),
  address: optional(string()),
  ageGroup: optional(string()),
  memo: optional(string()),
  createdAt: DateString,
  updatedAt: DateString,
});

export type Customer = Infer<typeof CustomerStruct>;

// 고객 목록 조회용
export const CustomerQueryStruct = intersection([
  PageParamsStruct,
  object({
    name: optional(string()),
    email: optional(string()),
  }),
]);

export type CustomerQuery = Infer<typeof CustomerQueryStruct>;
