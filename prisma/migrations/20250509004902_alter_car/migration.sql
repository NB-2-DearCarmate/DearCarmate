/*
  Warnings:

  - You are about to drop the column `year` on the `Models` table. All the data in the column will be lost.
  - Added the required column `year` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Models" DROP COLUMN "year";
