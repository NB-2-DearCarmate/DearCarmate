export interface UserKoResponse {
  유저ID: number;
  이름: string;
  이메일: string;
  사번: string;
  전화번호: string;
  이미지: string | null;
  관리자여부: boolean;
  회사코드: string;
}
