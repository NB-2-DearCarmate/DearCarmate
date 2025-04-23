import {
  coerce,
  nonempty,
  object,
  string,
  number,
  optional,
} from "superstruct";
const CoercedNumber = coerce(number(), string(), (value) => Number(value));

export const CreateCompanyStruct = object({
  companyName: coerce(nonempty(string()), string(), (value) => value.trim()),
  companyCode: nonempty(string()),
});

export const QueryStruct = object({
  page: optional(CoercedNumber),
  pageSize: optional(CoercedNumber),
  orderBy: optional(string()),
  searchBy: optional(string()),
  keyword: optional(string()),
});

export const PatchCompanyStruct = object({
  companyName: optional(
    coerce(nonempty(string()), string(), (value) => value.trim())
  ),
  companyCode: optional(nonempty(string())),
});
