import { CarResponse, CarRequest, UpdateCar } from "../typings/car";

//차량 생성
export type CreateCarDTO = CarRequest;

export type CreateCarResponseDTO = CarResponse;

//차량 목록 조회
export type CarListResponseDTO = {
  currentPage: number;
  totalPages: number;
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
export type UpdateCarDTO = UpdateCar;

export type UpdateCarResponseDTO = CarResponse;

//대용량 파일 업로드
export type UploadCarDTO = CarRequest;

export type UploadCarResponseDTO = {
  count: number;
};
