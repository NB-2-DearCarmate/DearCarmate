// src/validators/CompanyStruct.ts
import {
  Infer,
  object,
  string,
  optional,
  refine,
  intersection,
} from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

// 사업자등록번호 형식: 123-45-67890
const BusinessNumber = refine(string(), "BusinessNumber", (value: string) =>
  /^\d{3}-\d{2}-\d{5}$/.test(value)
);

// 전화번호 형식: 02-1234-5678 또는 010-1234-5678
const Phone = refine(string(), "Phone", (value: string) =>
  /^\d{2,3}-\d{3,4}-\d{4}$/.test(value)
);

// 숫자 ID 문자열 확인용
const NumericId = refine(string(), "NumericId", (value: string) =>
  /^\d+$/.test(value)
);

export const CompanyStruct = object({
  name: string(), // 회사명
  businessNumber: BusinessNumber, // 사업자등록번호
  ceoName: string(), // 대표자명
  address: string(), // 주소
  phone: Phone, // 전화번호
  createdAt: optional(string()), // 등록일시
  updatedAt: optional(string()), // 수정일시
});

export type Company = Infer<typeof CompanyStruct>;

// 회사 목록 조회용 쿼리 구조
export const CompanyQueryStruct = intersection([
  PageParamsStruct,
  object({
    name: optional(string()), // 회사명 검색
    ceoName: optional(string()), // 대표자명 검색
  }),
]);

export type CompanyQuery = Infer<typeof CompanyQueryStruct>;

// 회사별 유저 조회용 쿼리 구조
export const CompanyUserQueryStruct = intersection([
  PageParamsStruct,
  object({
    companyId: NumericId,
  }),
]);

export type CompanyUserQuery = Infer<typeof CompanyUserQueryStruct>;
