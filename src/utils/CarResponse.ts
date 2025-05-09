import { CarResponse } from "../typings/car";

export function mapToCarResponse(car: any): CarResponse {
  return {
    id: car.id,
    carNumber: car.carNumber,
    manufacturer: car.model.manufacturer.name,
    model: car.model.name,
    type: car.model.type,
    manufacturingYear: car.year,
    mileage: car.mileage,
    price: car.price,
    accidentCount: car.accidentCount,
    explanation: car.explanation,
    accidentDetails: car.accidentDetails,
    status: car.status,
  };
}
