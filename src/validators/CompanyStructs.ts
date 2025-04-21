import { object, string } from "superstruct";

export const createCompanyStruct = object({
  companyName: string(),
  companyCode: string(),
});
