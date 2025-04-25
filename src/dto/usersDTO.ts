export interface CreateUserRequest {
  name: string;
  email: string;
  employeeNumber: string;
  phoneNumber: string;
  password: string;
  passwordConfirmation: string;
  company: string;
  companyCode: string;
}

export interface UserResponse {
  id: number;
  name: string;
  email: string;
  employeeNumber: string;
  phoneNumber: string;
  imageUrl: string | null;
  isAdmin: boolean;
  company: {
    companyCode: string;
  };
}

export interface UpdateMyInfoRequest {
  employeeNumber?: string;
  phoneNumber?: string;
  currentPassword: string;
  password?: string;
  passwordConfirmation?: string;
  imageUrl?: string;
}
