import { object, enums, integer, date, partial } from "superstruct";
import { CursorParamsStruct } from "./CommonStruct";

// 미팅, 알람 정보
const timeRegex = /^\d{4}년 \d{2}월 \d{2}일 \d{2}시 \d{2}분$/;

// 계약 상태 (칸반용)
const ContractStatus = enums([
  "VEHICLE_CHECK",
  "PRICE_NEGOTIATION",
  "SUCCESS",
  "FAIL",
]);

// 계약 등록/수정용 구조
export const ContractStruct = object({
  carId: integer(),
  customerId: integer(),
  userId: integer(),
  status: ContractStatus,
  contractPrice: integer(),
  meeting: date(),
});

export const UpdateContractStruct = partial(ContractStruct);

// 계약 목록 조회용
export const ContractListStruct = partial(CursorParamsStruct);
