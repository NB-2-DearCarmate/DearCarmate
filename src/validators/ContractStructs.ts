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
import { CONTRACT_STATUS_VALUES } from "../typings/contract";

// 미팅, 알람 정보

export const MeetingStruct = object({
  date: coerce(date(), string(), (value) => new Date(value)),
  alarms: optional(array(coerce(date(), string(), (value) => new Date(value)))),
});

// 계약 상태 (칸반용)
export const ContractStatusStruct = enums(CONTRACT_STATUS_VALUES);

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
  status: optional(ContractStatusStruct),
  resolutionDate: optional(
    coerce(date(), string(), (value) => new Date(value))
  ),
  userId: optional(integer()),
});

export const updateMeetings = optional(array(MeetingStruct));

// 계약 목록 조회용
export const searchByStruct = enums(["customerName", "userName"]);

export const ContractListStruct = object({
  searchBy: optional(searchByStruct),
  keyword: optional(string()),
});
