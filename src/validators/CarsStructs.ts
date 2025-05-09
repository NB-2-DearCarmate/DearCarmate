import {
  object,
  string,
  number,
  nonempty,
  min,
  max,
  partial,
  optional,
  coerce,
} from "superstruct";

export const CarStruct = object({
  carNumber: nonempty(string()),
  manufacturer: nonempty(string()),
  model: nonempty(string()),
  manufacturingYear: min(max(number(), 2025), 1975),
  mileage: min(number(), 0),
  price: min(number(), 0),
  accidentCount: min(number(), 0),
  explanation: optional(string()),
  accidentDetails: optional(string()),
});

export const CarQueryStruct = object({
  page: coerce(number(), string(), (value) => Number(value)),
  pageSize: coerce(number(), string(), (value) => Number(value)),
  status: optional(string()),
  orderBy: optional(string()),
  keyword: optional(string()),
  searchBy: optional(string()),
});

export const UpdateCarStruct = partial(CarStruct);
