import { object, string, refine } from "superstruct";

export const CompanyStruct = object({
  name: string(),
  businessNumber: refine(string(), "businessNumber", (value) =>
    /^\d{3}-\d{2}-\d{5}$/.test(value)
  ),
  ceoName: string(),
  address: string(),
  phone: string(),
});
