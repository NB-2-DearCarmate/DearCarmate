import { object, string, number, enums, optional, refine } from "superstruct";

// 고객 유효성 검사
export const CustomerStruct = object({
  name: string(),
  contact: string(),
  email: refine(string(), "email", (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  ),
  birthDate: optional(string()),
  gender: optional(enums(["male", "female"])),
});

// 회사 유효성 검사
export const CompanyStruct = object({
  name: string(),
  businessNumber: refine(string(), "businessNumber", (value) =>
    /^\d{3}-\d{2}-\d{5}$/.test(value)
  ),
  ceoName: string(),
  address: string(),
  phone: string(),
});

// 계약 유효성 검사
export const ContractStruct = object({
  contractNumber: string(),
  customerId: number(),
  companyId: number(),
  startDate: string(),
  endDate: string(),
  status: enums(["active", "terminated", "pending"]),
});
