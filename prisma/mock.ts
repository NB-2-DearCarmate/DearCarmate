 
import { PrismaClient, CarType, VehicleStatus , GenderType, AgeGroup, Region, ContractStatus} from '@prisma/client';

export const manufacturers = [
  {
    name: "기아",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "현대",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "BMW",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "벤츠",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "쉐보레",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "르노코리아자동차",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const companies = [
  {
    companyName: "ABC 자동차",
    companyCode: "ABC001", 
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  { 
    companyName: "XYZ 모터스",
    companyCode: "XYZ001",
    createdAt: new Date("2022-03-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    companyName: "자동차와 사람",
    companyCode: "CARPEOPLE001",
    createdAt: new Date("2021-07-20"),
    updatedAt: new Date("2023-04-01"), 
  },
];

export const users = [
  {
    id: 1,
    name: "이상혁",
    email: "admin@carsales.com",
    password: "12341234",
    employeeNumber: "EMP-2023-001",
    isAdmin: true, 
    companyId: 1, 
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-01"),
  },
  {
    id: 2,
    name: "김소희",
    email: "sales@carsales.com",
    password: "12341234",
    employeeNumber: "EMP-2023-002",
    isAdmin: false, 
    companyId: 2, 
    createdAt: new Date("2023-03-05"),
    updatedAt: new Date("2023-03-05"),
  },
  {
    id: 3,
    name: "박지현",
    email: "consultant@carsales.com",
    password: "12341234",
    employeeNumber: "EMP-2023-005", 
    companyId: 3, 
    isAdmin: false,
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2023-03-10"),
  },
]; 
export const models = [
  {
    year: 2023,
    name: "K5",
    manufacturerId: 1, // 기아
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    year: 2022,
    name: "쏘나타",
    manufacturerId: 2, // 현대
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    year: 2024,
    name: "X5",
    manufacturerId: 3, // BMW
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    year: 2023,
    name: "C-클래스",
    manufacturerId: 4, // 벤츠
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    year: 2024,
    name: "그랜저",
    manufacturerId: 2, // 현대
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    year: 2022,
    name: "모닝",
    manufacturerId: 1, // 기아
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const cars = [
  {
    carNumber: "111루 3456",
    type: CarType.SEDAN,  // CarType Enum 값을 사용해야 합니다. 
    mileage: 35000,
    price: 22000000,
    explanation: "깨끗한 K5, 무사고 차량입니다.",
    accidentCount: 0,
    accidentDetails: null, 
    status: VehicleStatus.FOR_SALE, // VehicleStatus Enum 값을 사용해야 합니다.
    createdAt: new Date("2023-04-01"),
    updatedAt: new Date("2023-04-01"),
    modelId: 1,  // 모델 ID는 실제 데이터베이스에서 참조해야 할 값입니다.
    manufacturerId: 1  // 제조사 ID는 실제 데이터베이스에서 참조해야 할 값입니다.
  },
  {
    carNumber: "222가 4567",
    type: CarType.SUV,  // CarType Enum 값을 사용해야 합니다.
    mileage: 50000,
    price: 27000000,
    explanation: "견고하고 넓은 SUV, 가족용으로 적합합니다.",
    accidentCount: 1,
    accidentDetails: "후방 사고 있음",
    status: VehicleStatus.FOR_SALE, // VehicleStatus Enum 값을 사용해야 합니다.
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-05-15"),
    modelId: 2,
    manufacturerId: 2
  },
  {
    carNumber: "222가 4567",
    type: CarType.COMPACT,  // CarType Enum 값을 사용해야 합니다.
    mileage: 50000,
    price: 27000000,
    explanation: "견고하고 넓은 SUV, 가족용으로 적합합니다.",
    accidentCount: 1,
    accidentDetails: "후방 사고 있음",
    status: VehicleStatus.FOR_SALE, // VehicleStatus Enum 값을 사용해야 합니다.
    createdAt: new Date("2023-05-15"),
    updatedAt: new Date("2023-05-15"),
    modelId: 3,
    manufacturerId: 3
  },
];
export const customers = [
  {
    name: "홍길동",
    email: "hong@example.com",
    gender: GenderType.MALE, // Enum 값 사용
    phoneNumber: "010-1234-5678",
    ageGroup: AgeGroup.AGE_10, // Enum 값 사용
    region: Region.SEOUL, // Enum 값 사용
    memo: "VIP 고객",
    contractCount: 2,
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
    companyId: 1, // 실제 존재하는 회사 ID
  },
  {
    name: "김영희",
    email: "kim@example.com",
    gender: GenderType.FEMALE, // Enum 값 사용
    phoneNumber: "010-9876-5432",
    ageGroup: AgeGroup.AGE_20, // Enum 값 사용
    region: Region.BUSAN, // Enum 값 사용
    memo: "첫 차 구매 고객",
    contractCount: 1,
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-02-15"),
    companyId: 2, // 실제 존재하는 회사 ID
  },
  {
    name: "이순신",
    email: "lee@example.com",
    gender: GenderType.MALE, // Enum 값 사용
    phoneNumber: "010-1111-2222",
    ageGroup: AgeGroup.AGE_40, // Enum 값 사용
    region: Region.INCHEON, // Enum 값 사용
    memo: "오래된 고객",
    contractCount: 5,
    createdAt: new Date("2020-05-10"),
    updatedAt: new Date("2023-03-10"),
    companyId: null, // 회사 미참여 고객
  },
];



export const contracts = [
  {
    carId: 1, // 차 ID
    customerId: 1, // 고객 ID
    status: ContractStatus.VEHICLE_CHECK, // Enum 값 사용
    resolutionDate: null,
    contractPrice: 20000000,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    carId: 2,
    customerId: 2,
    status: ContractStatus.PRICE_NEGOTIATION, // Enum 값 사용
    resolutionDate: new Date("2023-02-15"),
    contractPrice: 15000000,
    createdAt: new Date("2023-01-20"),
    updatedAt: new Date("2023-02-20"),
  },
  {
    carId: 3,
    customerId: 3,
    status: ContractStatus.SUCCESS, // Enum 값 사용
    resolutionDate: null,
    contractPrice: 25000000,
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-01"),
  },  
];

export const meetings = [
  {
    id: 1,
    date: new Date("2023-06-05T14:00:00"),
    contractId: 1,
    createdAt: new Date("2023-06-02"),
    updatedAt: new Date("2023-06-02"),
  },
  {
    id: 2,
    date: new Date("2023-06-12T10:00:00"),
    contractId: 2,
    createdAt: new Date("2023-06-08"),
    updatedAt: new Date("2023-06-08"),
  },
  {
    id: 3,
    date: new Date("2023-06-25T15:30:00"),
    contractId: 3,
    createdAt: new Date("2023-06-21"),
    updatedAt: new Date("2023-06-21"),
  },
  {
    id: 4,
    date: new Date("2023-06-28T11:00:00"),
    contractId: 3,
    createdAt: new Date("2023-06-22"),
    updatedAt: new Date("2023-06-22"),
  },
];

export const alarms = [
  {
    id: 1,
    meetingId: 1,
    alarmAt: new Date("2023-06-05T13:00:00"),
    createdAt: new Date("2023-06-02"),
    updatedAt: new Date("2023-06-02"),
  },
  {
    id: 2,
    meetingId: 2,
    alarmAt: new Date("2023-06-12T09:00:00"),
    createdAt: new Date("2023-06-08"),
    updatedAt: new Date("2023-06-08"),
  },
  {
    id: 3,
    meetingId: 3,
    alarmAt: new Date("2023-06-25T14:30:00"),
    createdAt: new Date("2023-06-21"),
    updatedAt: new Date("2023-06-21"),
  },
  {
    id: 4,
    meetingId: 3,
    alarmAt: new Date("2023-06-25T08:00:00"),
    createdAt: new Date("2023-06-21"),
    updatedAt: new Date("2023-06-21"),
  },
];

export const contractDocuments = [
  {
    id: 1,
    contractId: 1,
    fileName: "홍길동_구매계약서.pdf",
    filePath: "/documents/contracts/1/contract.pdf", 
    fileSize: 2097152, // 2MB 
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2023-06-15"),
  },
  {
    id: 2,
    contractId: 1,
    fileName: "홍길동_차량점검표.pdf",
    filePath: "/documents/contracts/1/inspection.pdf", 
    fileSize: 1572864, // 1.5MB 
    createdAt: new Date("2023-06-15"),
    updatedAt: new Date("2023-06-15"),
  },
  {
    id: 3,
    contractId: 2,
    fileName: "이철수_견적서.pdf",
    filePath: "/documents/contracts/2/quote.pdf", 
    fileSize: 1048576, // 1MB
    createdAt: new Date("2023-06-10"),
    updatedAt: new Date("2023-06-10"),
  },
]; 
