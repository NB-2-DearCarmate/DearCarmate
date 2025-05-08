-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "CarYear" ADD VALUE '1975';
ALTER TYPE "CarYear" ADD VALUE '1976';
ALTER TYPE "CarYear" ADD VALUE '1977';
ALTER TYPE "CarYear" ADD VALUE '1978';
ALTER TYPE "CarYear" ADD VALUE '1979';
ALTER TYPE "CarYear" ADD VALUE '1980';
ALTER TYPE "CarYear" ADD VALUE '1981';
ALTER TYPE "CarYear" ADD VALUE '1982';
ALTER TYPE "CarYear" ADD VALUE '1983';
ALTER TYPE "CarYear" ADD VALUE '1984';
ALTER TYPE "CarYear" ADD VALUE '1985';
ALTER TYPE "CarYear" ADD VALUE '1986';
ALTER TYPE "CarYear" ADD VALUE '1987';
ALTER TYPE "CarYear" ADD VALUE '1988';
ALTER TYPE "CarYear" ADD VALUE '1989';
ALTER TYPE "CarYear" ADD VALUE '1990';
ALTER TYPE "CarYear" ADD VALUE '1991';
ALTER TYPE "CarYear" ADD VALUE '1992';
ALTER TYPE "CarYear" ADD VALUE '1993';
ALTER TYPE "CarYear" ADD VALUE '1994';
ALTER TYPE "CarYear" ADD VALUE '1995';
ALTER TYPE "CarYear" ADD VALUE '1996';
ALTER TYPE "CarYear" ADD VALUE '1997';
ALTER TYPE "CarYear" ADD VALUE '1998';
ALTER TYPE "CarYear" ADD VALUE '1999';
