// 로그인 요청
export interface LoginRequestBody {
  email: string;
  password: string;
}

// 회사 정보
export interface CompanyInfo {
  companyCode: string;
}

// 유저 정보
export interface UserInfo {
  id: number;
  name: string;
  email: string;
  employeeNumber: string;
  phoneNumber: string;
  imageUrl: string;
  isAdmin: boolean;
  company: CompanyInfo;
}

// 로그인 성공 응답
export interface LoginSuccessResponse {
  user: UserInfo;
  accessToken: string;
  refreshToken: string;
}

// 공통 에러 응답
export interface ErrorResponse {
  message: string;
}

// 토큰 갱신
export interface RefreshTokenRequestBody {
  refreshToken: string;
}

export interface RefreshTokenSuccessResponse {
  accessToken: string;
  refreshToken: string;
}
