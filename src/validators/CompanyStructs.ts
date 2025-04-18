<<<<<<< HEAD
import { object, string } from "superstruct";

export const createCompanyStruct = object({
  companyName: string(),
  companyCode: string(),
=======
import {
  Infer,
  object,
  string,
  optional,
  refine,
  intersection,
} from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

// 사업자등록번호
const BusinessNumber = refine(string(), "BusinessNumber", (value: string) =>
  /^\d{3}-\d{2}-\d{5}$/.test(value)
);

// 전화번호
const Phone = refine(string(), "Phone", (value: string) =>
  /^\d{2,3}-\d{3,4}-\d{4}$/.test(value)
);

// 숫자 ID 문자열
const NumericId = refine(string(), "NumericId", (value: string) =>
  /^\d+$/.test(value)
);

export const CompanyStruct = object({
  name: string(),
  businessNumber: BusinessNumber,
  ceoName: string(),
  address: string(),
  phone: Phone,
  createdAt: optional(string()),
  updatedAt: optional(string()),
>>>>>>> f7621834751eaef383b7a2f11b66c60fe2158cf9
});

export type Company = Infer<typeof CompanyStruct>;

// 회사 목록 조회용
export const CompanyQueryStruct = intersection([
  PageParamsStruct,
  object({
    name: optional(string()), // 회사명
    ceoName: optional(string()), // 대표자명
  }),
]);

export type CompanyQuery = Infer<typeof CompanyQueryStruct>;

// 회사별 유저 조회용
export const CompanyUserQueryStruct = intersection([
  PageParamsStruct,
  object({
    companyId: NumericId,
  }),
]);

export type CompanyUserQuery = Infer<typeof CompanyUserQueryStruct>;
