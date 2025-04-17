import { object, string, enums } from "superstruct";

export const ContractStruct = object({
  contractNumber: string(),
  customerId: number(),
  companyId: number(),
  startDate: string(),
  endDate: string(),
  status: enums(["active", "terminated", "pending"]),
});
