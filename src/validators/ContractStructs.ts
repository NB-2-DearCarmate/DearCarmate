import { object, enums, integer, optional, date } from "superstruct";
import { CursorParamsStruct } from "./CommonStruct";

// 미팅, 알람 정보
const timeRegex = /^\d{4}년 \d{2}월 \d{2}일 \d{2}시 \d{2}분$/;

// 계약 상태 (칸반용)
export const ContractStatus = enums([
  "VEHICLE_CHECK",
  "PRICE_NEGOTIATION",
  "SUCCESS",
  "FAIL",
]);

// 계약 등록/수정용 구조
export const ContractStruct = object({
  carId: integer(),
  customerId: integer(),
  contractPrice: integer(),
});

export const UpdateContractStruct = object({
  carId: optional(integer()),
  customerId: optional(integer()),
  contractPrice: optional(integer()),
  status: optional(ContractStatus),
});

// 계약 목록 조회용
export const ContractListStruct = CursorParamsStruct;
