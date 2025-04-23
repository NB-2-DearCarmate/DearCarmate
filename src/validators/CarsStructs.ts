import {
  object,
  string,
  number,
  nonempty,
  min,
  partial,
  union,
  literal,
  optional,
  coerce,
} from "superstruct";

export const CarStruct = object({
  carNumber: nonempty(string()),
  manufacturerId: min(number(), 1),
  modelId: min(number(), 1),
  type: union([literal("SEDAN"), literal("COMPACT"), literal("SUV")]),
  mileage: min(number(), 0),
  price: min(number(), 0),
  accidentCount: min(number(), 0),
  explanation: nonempty(string()),
  accidentDetails: nonempty(string()),
  status: union([
    literal("POSSESSION"),
    literal("CONTRACT_PROCEEDING"),
    literal("CONTRACT_COMPLETED"),
  ]),
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
