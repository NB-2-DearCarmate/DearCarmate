/*
  Warnings:

  - The values [VEHICLE_CHECK,PRICE_NEGOTIATION,SUCCESS,FAIL] on the enum `ContractStatus` will be removed. If these variants are still used in the database, this will fail.
  - Made the column `accidentCount` on table `Car` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ContractStatus_new" AS ENUM ('CARINSPECTION', 'PRICENEGOTIATION', 'CONTRACTSUCCESSFUL', 'CONTRACTFAILED');
ALTER TABLE "Contract" ALTER COLUMN "status" TYPE "ContractStatus_new" USING ("status"::text::"ContractStatus_new");
ALTER TYPE "ContractStatus" RENAME TO "ContractStatus_old";
ALTER TYPE "ContractStatus_new" RENAME TO "ContractStatus";
DROP TYPE "ContractStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "ContractDocument" DROP CONSTRAINT "ContractDocument_contractId_fkey";

-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "accidentCount" SET NOT NULL,
ALTER COLUMN "status" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ContractDocument" ADD CONSTRAINT "ContractDocument_contractId_fkey" FOREIGN KEY ("contractId") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;
