/*
  Warnings:

  - Changed the type of `year` on the `Models` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CarYear" AS ENUM ('2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025');

-- AlterTable
ALTER TABLE "Models" DROP COLUMN "year",
ADD COLUMN     "year" "CarYear" NOT NULL;
