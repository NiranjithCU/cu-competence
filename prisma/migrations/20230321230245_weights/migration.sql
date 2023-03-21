/*
  Warnings:

  - You are about to drop the column `response` on the `Feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Competence" ADD COLUMN     "weight" INTEGER;

-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "response",
ADD COLUMN     "easyToUse" TEXT;

-- AlterTable
ALTER TABLE "Theme" ADD COLUMN     "weight" INTEGER;
