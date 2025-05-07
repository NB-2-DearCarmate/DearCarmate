import prisma from "../lib/prisma";
import NotFoundError from "../errors/NotFoundError";
import { ContractType } from "../typings/contract";
import { CursorPaginationParams } from "../typings/pagination"; 
import { Customer, AgeGroup, Region } from "@prisma/client";



const ageGroupMap: Record<string, AgeGroup> = {
  "10대": "AGE_10",
  "20대": "AGE_20",
  "30대": "AGE_30",
  "40대": "AGE_40",
  "50대": "AGE_50",
  "60대": "AGE_60",
  "70대": "AGE_70",
  "80대": "AGE_80",
};

const regionMap: Record<string, Region> = {
  "서울": "SEOUL",
  "경기": "GYEONGGI",
  "인천": "INCHEON",
  "강원": "GANGWON",
  "충북": "CHUNGBUK",
  "충남": "CHUNGNAM",
  "세종": "SEJONG",
  "대전": "DAEJEON",
  "전북": "JEONBUK",
  "전남": "JEONNAM",
  "광주": "GWANGJU",
  "경북": "GYEONGBUK",
  "경남": "GYEONGNAM",
  "대구": "DAEGU",
  "울산": "ULSAN",
  "부산": "BUSAN",
  "제주": "JEJU",
};


export const CustomerRepository = {
  create: async (data: any) => {
    console.log("[CustomerRepository.create] 입력된 data:", data);

    const mappedAgeGroup = ageGroupMap[data.ageGroup]; 
    const mappedRegion = regionMap[data.region];
    if (!mappedAgeGroup) {
      throw new Error(`유효하지 않은 ageGroup 값입니다: ${data.ageGroup}`);
    }

    return prisma.customer.create({
      data: {
        ...data,
        ageGroup: mappedAgeGroup,      
        contractCount: 0,            
        companyId: undefined,  
        Company: {
          connect: { id: data.companyId },  
        },
       region: mappedRegion,
      },
    });
  },

  findMany: async () => {
    const result = await prisma.customer.findMany();
    return result.map((customer) => ({
      ...customer,
      ageGroup:
        Object.entries(ageGroupMap).find(([, value]) => value === customer.ageGroup)?.[0] ??
        customer.ageGroup,
      region:
        Object.entries(regionMap).find(([, value]) => value === customer.region)?.[0] ??
        customer.region,
    }));
  },

  update: async (id: number, data: Partial<Customer>) => {
    const mappedAgeGroup = data.ageGroup ? ageGroupMap[data.ageGroup as string] : undefined;
    const mappedRegion = data.region ? regionMap[data.region as string] : undefined;
  
    return prisma.customer.update({
      where: { id },
      data: {
        ...data,
        ageGroup: mappedAgeGroup ?? data.ageGroup,
        region: mappedRegion ?? data.region,
      },
    });
  },

  delete: async (id: number) => {
    return prisma.customer.delete({
      where: { id },
    });
  },

  findunique: async (id: number) => {
    return prisma.customer.findUnique({
      where: { id },
    });
  },  
};
