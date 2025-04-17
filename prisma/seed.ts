import { PrismaClient } from '@prisma/client';
import {
  manufacturers,
  companies,
  users,
  cars,
  customers,
  contracts,
  meetings,
  models,
  alarms,
  contractDocuments,
} from "./mock";

console.log("Initializing Prisma Client...");
const prisma = new PrismaClient();
console.log("Prisma Client initialized.");

async function main() {
  try {
    console.log("Starting to clear database...");
    await prisma.contractDocument.deleteMany();
    await prisma.alarm.deleteMany();
    await prisma.meeting.deleteMany();
    await prisma.contract.deleteMany();
    await prisma.customer.deleteMany();
    await prisma.car.deleteMany();
    await prisma.user.deleteMany();
    await prisma.company.deleteMany();
    console.log("Database cleared.");

    console.log("Starting to seed database...");

    await prisma.manufacturers.createMany({
      data: manufacturers,
      skipDuplicates: true,
    });
    console.log("Companies seeded.");

    await prisma.company.createMany({
      data: companies,
      skipDuplicates: true,
    });
    console.log("Companies seeded.");

 

    await prisma.models.createMany({
      data: models,
      skipDuplicates: true,
    });
    console.log("Cars seeded.");
    
    await prisma.user.createMany({
      data: users,
      skipDuplicates: true,
    });
    console.log("Users seeded."); 
    
    await prisma.car.createMany({
      data: cars,
      skipDuplicates: true,
    });
    console.log("Cars seeded.");
    

    await prisma.customer.createMany({
      data: customers,
      skipDuplicates: true,
    });
    console.log("Customers seeded.");

    

    await prisma.contract.createMany({
      data: contracts,
      skipDuplicates: true,
    });
    console.log("Contracts seeded.");

    await prisma.meeting.createMany({
      data: meetings,
      skipDuplicates: true,
    });
    console.log("Meetings seeded.");

    await prisma.alarm.createMany({
      data: alarms,
      skipDuplicates: true,
    });
    console.log("Alarms seeded.");

    await prisma.contractDocument.createMany({
      data: contractDocuments,
      skipDuplicates: true,
    });
    console.log("Contract documents seeded.");

    console.log("Database has been seeded successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Disconnecting Prisma Client...");
    await prisma.$disconnect();
    console.log("Prisma Client disconnected.");
  });