/*
  Warnings:

  - You are about to drop the column `manufacturerId` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Car` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Contract` table without a default value. This is not possible if the table is not empty.
  - Made the column `companyId` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `type` to the `Models` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Car" DROP CONSTRAINT "Car_manufacturerId_fkey";

-- DropForeignKey
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_companyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "manufacturerId",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Contract" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "companyId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Models" ADD COLUMN     "type" "CarType" NOT NULL;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
