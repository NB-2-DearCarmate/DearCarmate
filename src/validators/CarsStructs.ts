import {
  object,
  string,
  number,
  nonempty,
  min,
  partial,
  union,
  literal,
} from "superstruct";
import { CarPageParamsStruct } from "./CommonStruct";

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
  status: union([literal("POSSESSION"), literal("FOR_SALE")]),
});

export const GetCarListParamsStruct = CarPageParamsStruct;
export const UpdateCarStruct = partial(CarStruct);
