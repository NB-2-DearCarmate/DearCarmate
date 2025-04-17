import {
  coerce,
  integer,
  object,
  string,
  defaulted,
  optional,
  enums,
  nonempty,
} from "superstruct";

const integerString = coerce(integer(), string(), (value) => parseInt(value));

export const IdParamsStruct = object({
  id: integerString,
});

//페이지네이션
export const PageParamsStruct = object({
  page: defaulted(integerString, 1),
  pageSize: defaulted(integerString, 10),
  orderBy: optional(enums(["recent"])),
  keyword: optional(nonempty(string())),
});

//커서
export const CursorParamsStruct = object({
  cursor: defaulted(integerString, 0),
  limit: defaulted(integerString, 10),
  orderBy: optional(enums(["recent"])),
  keyword: optional(nonempty(string())),
});

//차량
export const CarPageParamsStruct = object({
  page: defaulted(integerString, 1),
  pageSize: defaulted(integerString, 10),
  status: optional(
    enums(["possession", "contractProceeding", "contractCompleted"])
  ),
  searchBy: optional(enums(["carNumber", "model"])),
  keyword: optional(nonempty(string())),
});
