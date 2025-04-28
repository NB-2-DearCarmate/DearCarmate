import { VehicleStatus } from "@prisma/client";
import { CarResponse } from "../typings/car";

//차량 생성
export type CreateCarDTO = {
  carNumber: string;
  manufacturerId: number;
  modelId: number;
  type: "SEDAN" | "COMPACT" | "SUV";
  mileage: number;
  price: number;
  accidentCount: number;
  explanation: string | null;
  accidentDetails: string | null;
  status: VehicleStatus | null;
};

export type CreateCarResponseDTO = {
  id: number;
  carNumber: string;
  manufacturerId: number;
  modelId: number;
  type: "SEDAN" | "COMPACT" | "SUV";
  mileage: number;
  price: number;
  accidentCount: number;
  explanation: string | null;
  accidentDetails: string | null;
  status: VehicleStatus | null;
};

//차량 목록 조회
export type CarListResponseDTO = {
  currentPage: number;
  totalPage: number;
  totalItemCount: number;
  data: CarResponse[];
};

//차량 ID
export type CarByIdDTO = {
  id: number;
};

//차량 ID 조회
export type GetCarByIdResponseDTO = CarResponse;

//차량 제조사 및 모델 조회
export type CarModelListDTO = string[];

export type ManufacturerModelDTO = {
  manufacturer: string;
  model: CarModelListDTO;
};

export type GetAllCarModelsResponseDTO = {
  data: ManufacturerModelDTO[];
};

//차량 수정
export type UpdateCarDTO = Partial<CreateCarDTO>;

export type UpdateCarResponseDTO = Partial<CreateCarDTO>;

//대용량 파일 업로드
export type UploadCarDTO = CreateCarDTO;

export type UploadCarResponseDTO = {
  count: number;
};
