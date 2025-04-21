import {
  coerce,
  type Infer,
  nonempty,
  object,
  string,
  number,
  optional,
} from "superstruct";

export const CreateCompanyStruct = object({
  companyName: coerce(nonempty(string()), string(), (value) => value.trim()),
  companyCode: nonempty(string()),
});

export const QueryStruct = object({
  page: number(),
  pageSize: number(),
  orderBy: optional(string()),
  keyword: optional(string()),
  searchBy: optional(string()),
});

export const PatchCompanyStruct = object({
  companyName: optional(
    coerce(nonempty(string()), string(), (value) => value.trim())
  ),
  companyCode: optional(nonempty(string())),
});
