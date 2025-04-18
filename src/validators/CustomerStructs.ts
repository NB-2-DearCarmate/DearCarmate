import { object, string, optional, enums } from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

// 이메일 포맷 검사
const Email = optional(string());

export const CustomerStruct = object({
  name: string(),
  birthDate: string(),
  gender: enums(["male", "female"]),
  contact: string(),
  email: Email,
  address: optional(string()),
  ageGroup: optional(string()),
  memo: optional(string()),
  createdAt: string(),
  updatedAt: string(),
});

// 고객 목록 조회용
export const CustomerQueryStruct = object({
  ...PageParamsStruct, // page, limit, sort, order
  name: optional(string()),
  email: optional(string()),
});
