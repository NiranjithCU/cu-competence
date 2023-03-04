/*
  Warnings:

  - A unique constraint covering the columns `[assesmentId]` on the table `Feedback` will be added. If there are existing duplicate values, this will fail.
  - Made the column `assesmentId` on table `Feedback` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Feedback" DROP CONSTRAINT "Feedback_assesmentId_fkey";

-- AlterTable
ALTER TABLE "Feedback" ALTER COLUMN "assesmentId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_assesmentId_key" ON "Feedback"("assesmentId");

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_assesmentId_fkey" FOREIGN KEY ("assesmentId") REFERENCES "Assesment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
