import {
  object,
  enums,
  integer,
  optional,
  date,
  string,
  coerce,
  array,
} from "superstruct";
import { CursorParamsStruct } from "./CommonStruct";

// 미팅, 알람 정보

const MeetingStruct = object({
  date: string(),
  alarms: optional(array(string())),
});

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
  resolutionDate: optional(date()),
  meetings: optional(array(MeetingStruct)),
});

export const UpdateContractStruct = object({
  carId: optional(integer()),
  customerId: optional(integer()),
  contractPrice: optional(integer()),
  status: optional(ContractStatus),
  resolutionDate: optional(
    coerce(date(), string(), (value) => new Date(value))
  ),
});

export const updatePriceStruct = object({
  contractPrice: integer(),
});

// 계약 목록 조회용
export const ContractListStruct = CursorParamsStruct;
