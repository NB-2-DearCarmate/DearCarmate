export type CarType = "SEDAN" | "COMPACT" | "SUV";
export type CarStatus =
  | "POSSESSION"
  | "CONTRACT_PROCEEDING"
  | "CONTRACT_COMPLETED";

export interface CreateCarDTO {
  carNumber: string;
  manufacturerId: number;
  modelId: number;
  type: CarType;
  mileage: number;
  price: number;
  accidentCount: number;
  explanation: string;
  accidentDetails: string;
  status: CarStatus;
}
