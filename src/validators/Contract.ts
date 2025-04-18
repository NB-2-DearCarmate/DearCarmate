
import {
  object,
  string,
  number,
  optional,
  enums,
  refine,
  Infer,
  intersection,
} from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

// 공통 유효성 검사기
const DateString = refine(string(), "DateString", (value: string) =>
  /^\d{4}-\d{2}-\d{2}/.test(value)
);

// 계약 상태 (칸반용)
const ContractStatus = enums([
  "차량 확인",
  "가격 협의",
  "계약 성공",
  "계약 실패",
]);

// 미팅 정보 구조
const MeetingStruct = object({
  date: DateString,
  place: string(),
  method: optional(enums(["대면", "비대면"])),
});

// 계약 등록/수정용 구조
export const ContractStruct = object({
  contractNumber: string(),
  contractName: string(),
  customerId: number(),
  contractDate: DateString,
  startDate: DateString,
  endDate: DateString,
  amount: number(),
  status: ContractStatus,
  description: optional(string()),
  vehicleId: optional(number()),
  meeting: optional(MeetingStruct),
  createdAt: optional(DateString),
  updatedAt: optional(DateString),
});

export type Contract = Infer<typeof ContractStruct>;

// 계약 목록 조회용
export const ContractQueryStruct = intersection([
  PageParamsStruct,
  object({
    customerName: optional(string()),
    managerName: optional(string()),
    limit: optional(string()),
    sort: optional(string()),
    order: optional(string()),
  }),
]);

export type ContractQuery = Infer<typeof ContractQueryStruct>;

