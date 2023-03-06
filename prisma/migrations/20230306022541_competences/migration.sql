/*
  Warnings:

  - You are about to drop the column `levelId` on the `Competence` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Competence" DROP CONSTRAINT "Competence_levelId_fkey";

-- AlterTable
ALTER TABLE "Competence" DROP COLUMN "levelId";
