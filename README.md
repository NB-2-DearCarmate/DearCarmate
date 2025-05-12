# 🚘 Dear Carmate - 중고차 계약 관리 서비스 <br>

> 계약부터 매출 분석까지, 복잡한 중고차 판매 프로세스를 간편하게 관리해보세요.  
차량∙고객∙계약 관리에 특화된 스마트 서비스로, 계약서 업로드와 통계 대시보드까지 지원하는 올인원 솔루션입니다.<br>
(프로젝트 기간 - 25.04.16 ~ 25.05.13)
---

## 👥 팀원 구성

- **송유택** (팀장)
- **김승희** 
- **조연정**
- **노제인** 
- **이민호** 

---

## ✅ 주요 기능 요약

- 고객, 차량, 계약, 회사, 유저에 대한 CRUD 기능  
- 계약서 파일 업로드 및 다운로드  
- 관리자 기능 (유저/회사 관리)  
- 대용량 업로드 기능 (엑셀 기반 등)  
- 통계 대시보드 (매출/계약 추이)

---

## 🛠️ 기술 스택 및 협업 도구

**백엔드**: Node.js, Express, Prisma ORM  
**데이터베이스**: PostgreSQL  
**API 문서화**: Swagger  
**배포 플랫폼**: Render  

---

### 🧑‍💻 협업 도구

- 커뮤니케이션: Discord  
- 문서 관리: Notion  
- 형상 관리: GitHub  
- 일정 관리: Notion Timeline  

---

## 📚 API 문서

- Swagger: [https://dearcarmate.onrender.com/api-docs](https://dearcarmate.onrender.com/api-docs)

---

## 📊 ERD
![image](https://github.com/user-attachments/assets/211605eb-875a-42a7-ad3d-2072338f5aef)


---

## 🔗 관련 레포 & 배포 주소

- 배포 주소: [https://dearcarmate.onrender.com](https://dearcarmate.onrender.com)

---

## 👤 팀원별 역할 및 담당 기능

### 송유택
- 고객 등록 / 목록 조회 / 상세 정보 조회  
- 고객 수정 / 삭제 / 대용량 데이터 업로드

### 김승희
- 차량 등록 / 목록 조회 / 상세 정보 조회
- 모델 목록 조회  
- 차량 수정 / 삭제 / 대용량 데이터 업로드

### 조연정
- 계약 등록 / 목록 조회 / 수정 / 삭제  
- 계약용 차량 / 고객 / 유저 목록 조회  
- 이미지
- 통계 조회

### 노제인
- 회원가입 / 내 정보 조회 / 수정 / 탈퇴  
- 유저 삭제 (관리자 기능)  
- 로그인 / 토큰 갱신

### 이민호
- 회사 등록 / 목록 조회 / 수정 / 삭제 (관리자 기능)  
- 회사별 유저 조회 (관리자 기능)  
- 계약서 업로드 / 다운로드  
- 계약 목록 조회 / 계약서 추가

---

## 🧪 프로젝트 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env

# 3. Prisma 마이그레이션 및 DB 준비
npx prisma generate
npx prisma migrate dev

# 4. TypeScript 빌드 및 서버 실행
npm run build
npm run start

# 개발용
npm run dev
```
### 프로젝트 개발 및 회고 링크
[발표자료-개인 개발 보고서]
