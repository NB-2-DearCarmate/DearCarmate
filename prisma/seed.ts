import bcrypt from "bcrypt";
import { PrismaClient, Company, Manufacturers } from "@prisma/client";
import {
  manufacturers,
  companies,
  users,
  models,
  // cars,
  customers,
  contracts,
  meetings,
  alarms,
  contractDocuments,
} from "./mock";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("데이터 초기화 중...");
    await prisma.contractDocument.deleteMany();
    await prisma.alarm.deleteMany();
    await prisma.meeting.deleteMany();
    await prisma.contract.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.car.deleteMany();
    await prisma.models.deleteMany();
    await prisma.user.deleteMany();
    await prisma.company.deleteMany();
    await prisma.manufacturers.deleteMany();

    await prisma.$executeRawUnsafe(`TRUNCATE TABLE 
      "Manufacturers", "Company", "User", "Models", "Car", "Customer", 
      "Contract", "Meeting", "Alarm", "ContractDocument" RESTART IDENTITY CASCADE;`);

    console.log("데이터 초기화 완료.");

    console.log("시딩 시작");
    const createdManufacturers: Manufacturers[] = [];
    for (const manufacturer of manufacturers) {
      const created = await prisma.manufacturers.create({ data: manufacturer });
      createdManufacturers.push(created);
    }

    const createdCompanies: Company[] = [];
    for (const company of companies) {
      const created = await prisma.company.create({ data: company });
      createdCompanies.push(created);
    }

    for (const user of users) {
      const company = createdCompanies.find((c) => c.id === user.companyId);
      if (!company) throw new Error("not found companyid");
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.create({
        data: {
          ...user,
          password: hashedPassword,
          companyId: company.id,
        },
      });
    }

    for (const model of models) {
      const manufacturer = createdManufacturers.find(
        (m) => m.id === model.manufacturerId
      );
      if (!manufacturer) throw new Error("not found manufacturers");
      await prisma.models.create({
        data: {
          ...model,
          manufacturerId: manufacturer.id,
        },
      });
    }

    // for (const car of cars) {
    //   await prisma.car.create({ data: car });
    // }

    for (const customer of customers) {
      await prisma.customer.create({ data: customer });
    }

    for (const contract of contracts) {
      await prisma.contract.create({ data: contract });
    }

    for (const meeting of meetings) {
      await prisma.meeting.create({ data: meeting });
    }

    for (const alarm of alarms) {
      await prisma.alarm.create({ data: alarm });
    }

    for (const contractDocument of contractDocuments) {
      await prisma.contractDocument.create({ data: contractDocument });
    }

    console.log("모든 시딩이 성공적으로 완료되었습니다!");
  } catch (error) {
    console.error("시딩실패:", error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("예외 발생:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
