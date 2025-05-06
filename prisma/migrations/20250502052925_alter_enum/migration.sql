/*
  Warnings:

  - The values [CARINSPECTION,PRICENEGOTIATION,CONTRACTSUCCESSFUL,CONTRACTFAILED,CONTRACTDRAFT] on the enum `ContractStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [MALE,FEMALE] on the enum `GenderType` will be removed. If these variants are still used in the database, this will fail.
  - The `status` column on the `Car` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CarStatus" AS ENUM ('possession', 'contractProceeding', 'contractCompleted');

-- AlterEnum
BEGIN;
CREATE TYPE "ContractStatus_new" AS ENUM ('carInspection', 'priceNegotiation', 'contractDraft', 'contractSuccessful', 'contractFailed');
ALTER TABLE "Contract" ALTER COLUMN "status" TYPE "ContractStatus_new" USING ("status"::text::"ContractStatus_new");
ALTER TYPE "ContractStatus" RENAME TO "ContractStatus_old";
ALTER TYPE "ContractStatus_new" RENAME TO "ContractStatus";
DROP TYPE "ContractStatus_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "GenderType_new" AS ENUM ('male', 'female');
ALTER TABLE "Customer" ALTER COLUMN "gender" TYPE "GenderType_new" USING ("gender"::text::"GenderType_new");
ALTER TYPE "GenderType" RENAME TO "GenderType_old";
ALTER TYPE "GenderType_new" RENAME TO "GenderType";
DROP TYPE "GenderType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Car" DROP COLUMN "status",
ADD COLUMN     "status" "CarStatus";

-- DropEnum
DROP TYPE "VehicleStatus";
