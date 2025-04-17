import { object, string, number, nonempty, min, partial } from "superstruct";
import { PageParamsStruct } from "./CommonStruct";

export const CarStruct = object({
  carNumber: nonempty(string()),
  manufacturer: nonempty(string()),
  model: nonempty(string()),
  manufacturingYear: min(number(), 1990),
  mileage: min(number(), 0),
  price: min(number(), 0),
  accidentCount: min(number(), 0),
  explanation: nonempty(string()),
  accidentDetails: nonempty(string()),
});

export const GetCarListParamsStruct = PageParamsStruct;
export const UpdateCarStruct = partial(CarStruct);
