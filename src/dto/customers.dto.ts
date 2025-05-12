// src/dto/customer.dto.ts

// 전체 고객 조회 응답
export type CustomerDTO = {
  id: number;
  name: string;
  email: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  ageGroup: string;
  region: string;
  memo?: string;
  contractCount: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // soft delete 확인용
};

// 고객 생성 요청
export type CreateCustomerDTO = {
  name: string;
  email: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  ageGroup: string;
  region: string;
  memo?: string;
  contractCount: number;
  companyId: number;
};

// 고객 생성 응답
export type CreateCustomerResponseDTO = CustomerDTO;

// 고객 수정 요청
export type UpdateCustomerDTO = Partial<Omit<CreateCustomerDTO, "companyId">>;

// 고객 수정 응답
export type UpdateCustomerResponseDTO = CustomerDTO;

// 고객 단건 조회 응답
export type FindCustomerResponseDTO = CustomerDTO;

// 고객 삭제 응답
export type DeleteCustomerResponseDTO = {
  id: number;
  deletedAt: Date;
};

// 고객 업로드용 (Excel 업로드)
export type UploadCustomerDTO = {
  name: string;
  email: string;
  gender: "MALE" | "FEMALE";
  phoneNumber: string;
  ageGroup: string;
  region: string;
  memo?: string;
  contractCount: number;
  companyId: number;
};

// 고객 업로드 응답
export type UploadCustomerResponseDTO = {
  message: string;
  count: number;
};