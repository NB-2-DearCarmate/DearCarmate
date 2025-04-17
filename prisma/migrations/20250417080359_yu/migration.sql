/*
  Warnings:

  - You are about to drop the column `manufacturer` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `Car` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Company` table. All the data in the column will be lost.
  - Added the required column `manufacturerId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelId` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `companyName` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `Contract` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `gender` on the `Customer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ageGroup` on the `Customer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `region` on the `Customer` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Car" DROP COLUMN "manufacturer",
DROP COLUMN "model",
ADD COLUMN     "manufacturerId" INTEGER NOT NULL,
ADD COLUMN     "modelId" INTEGER NOT NULL,
ADD COLUMN     "type" "CarType" NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "VehicleStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "name",
ADD COLUMN     "companyName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Contract" DROP COLUMN "status",
ADD COLUMN     "status" "ContractStatus" NOT NULL;

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "companyId" INTEGER,
DROP COLUMN "gender",
ADD COLUMN     "gender" "GenderType" NOT NULL,
DROP COLUMN "ageGroup",
ADD COLUMN     "ageGroup" "AgeGroup" NOT NULL,
DROP COLUMN "region",
ADD COLUMN     "region" "Region" NOT NULL;

-- DropEnum
DROP TYPE "CarModel";

-- DropEnum
DROP TYPE "Manufacturer";

-- CreateTable
CREATE TABLE "Manufacturers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Manufacturers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Models" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "manufacturerId" INTEGER NOT NULL,

    CONSTRAINT "Models_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Models" ADD CONSTRAINT "Models_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
