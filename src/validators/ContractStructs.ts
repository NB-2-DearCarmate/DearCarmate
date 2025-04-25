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
import { CONTRACT_STATUS_VALUES } from "../typings/contract"; 

// 미팅, 알람 정보

const MeetingStruct = object({
  date: string(),
  alarms: optional(array(string())),
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
  carId: integer(),
  customerId: integer(),
  contractPrice: integer(),
  status: ContractStatusStruct,
  resolutionDate: optional(
    coerce(date(), string(), (value) => new Date(value))
  ),
  userId: integer(),
});

// 계약 목록 조회용
export const ContractListStruct = CursorParamsStruct;
