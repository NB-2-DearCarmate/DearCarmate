import { CustomerRepository } from "../repositories/customersRepositories";
import prisma from "../lib/prisma";
import { CreateCustomerInput } from "../typings/customer";
import { Customer } from "@prisma/client";
import { Prisma } from "@prisma/client";
import { AgeGroup, Region } from "@prisma/client";

interface CustomerRecord {
  name: string;
  gender?: string;
  phoneNumber: string;
  ageGroup?: string;
  region?: string;
  email?: string;
  memo?: string;
  companyId: number; // 유저의 회사 ID (요구사항: 유저의 회사에 등록)
  contractCount?: number;
}

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
 
export const CustomerService = {
  createCustomer: async (data: CreateCustomerInput) => {
    return await CustomerRepository.create(data);
  },

  getCustomers: async ({
    page,
    limit,
    search = "",
    companyId,
    searchBy = "name",
  }: {
    page: number;
    limit: number;
    search?: string;
    memo?: string;
    companyId: number;
    searchBy?: "name" | "email";
  })  => {
    const searchCondition =
      searchBy === "name"
        ? { name: { contains: search, mode: Prisma.QueryMode.insensitive } }
        : { email: { contains: search, mode: Prisma.QueryMode.insensitive } };


        const customers = await prisma.customer.findMany({
          where: {
            companyId,
            ...searchCondition,
            deletedAt: null,
          },
          skip: (page - 1) * limit,
          take: limit,
          orderBy: { createdAt: "asc" },
        });
      
        const totalCount = await prisma.customer.count({
          where: {
            companyId,
            ...searchCondition,
          },
        });
      
        const totalPages = Math.ceil(totalCount / limit);

        const mappedCustomers = customers.map((customer) => ({
          ...customer,
          ageGroup:
            Object.entries(ageGroupMap).find(([, value]) => value === customer.ageGroup)?.[0] ??
            customer.ageGroup,
          region:
            Object.entries(regionMap).find(([, value]) => value === customer.region)?.[0] ??
            customer.region,
        }));
       
    return {
      currentPage: page,
      totalPages,
      data: mappedCustomers,
    };
  },
  
  patchCustomers: async (
    id: number,
    data: Partial<Customer>,
    companyId: number
  ) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
  
    if (!customer || customer.companyId !== companyId) {
      throw new Error("수정 권한이 없습니다.");
    }
  
    const mappedAgeGroup = data.ageGroup
      ? ageGroupMap[data.ageGroup as string] ?? data.ageGroup
      : undefined;
    const mappedRegion = data.region
      ? regionMap[data.region as string] ?? data.region
      : undefined;
  
      const updated = await CustomerRepository.update(id, {
        ...data,
        ageGroup: mappedAgeGroup,
        region: mappedRegion,
      }); 
      return {
        ...updated,
        ageGroup:
          Object.entries(ageGroupMap).find(([, value]) => value === updated.ageGroup)?.[0] ??
          updated.ageGroup,
        region:
          Object.entries(regionMap).find(([, value]) => value === updated.region)?.[0] ??
          updated.region,
      };
       
  },

  deleteCustomers: async (id: number, companyId: number) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });

    if (!customer || customer.companyId !== companyId) {
      return null;
    }

    return await CustomerRepository.delete(id);
  },

  finduniqueCustomers: async (id: number, companyId: number) => {
    const customer = await prisma.customer.findUnique({
      where: { id },
    });
 
    if (!customer || customer.companyId !== companyId) {
      return null;
    }

    return customer;
  },
  bulkCreateCustomers: async (dataList: any[], companyId: number) => {
    const customersToCreate = dataList.map((row, index) => {
      const ageGroupKey = row.ageGroup?.trim();
      const regionKey = row.region?.trim();
  
      const mappedAgeGroup = ageGroupMap[ageGroupKey];
      const mappedRegion = regionMap[regionKey];
  
      // ✅ 디버깅용 로그
      console.log(`🟡 [${index + 1}행]`);
      console.log(`raw ageGroup: "${row.ageGroup}"`);
      console.log(`trimmed ageGroupKey: "${ageGroupKey}"`);
      console.log(`mappedAgeGroup:`, mappedAgeGroup);
      console.log(`raw region: "${row.region}"`);
      console.log(`trimmed regionKey: "${regionKey}"`);
      console.log(`mappedRegion:`, mappedRegion);
      console.log("----------------------------------");
      console.log(Object.keys(row));
      console.log("row 전체 내용:", row);
      if (!mappedAgeGroup || !mappedRegion) {
        throw new Error(`행 ${index + 1}: 유효하지 않은 연령대 또는 지역입니다.`);
      }
  
      return {
        name: row.name,
        email: row.email,
        gender: row.gender as "male" | "female",
        phoneNumber: row.phoneNumber,
        ageGroup: mappedAgeGroup,
        region: mappedRegion,
        memo: row.memo || "",
        contractCount: 0,
        companyId,
      };
    });
  
    return await prisma.customer.createMany({
      data: customersToCreate,
      skipDuplicates: true,
    });
  }
  
};
