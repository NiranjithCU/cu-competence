/*
  Warnings:

  - You are about to drop the column `scale` on the `Answers` table. All the data in the column will be lost.
  - The `level` column on the `Answers` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `competenceId` on the `Choice` table. All the data in the column will be lost.
  - You are about to drop the `Level` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Choice" DROP CONSTRAINT "Choice_competenceId_fkey";

-- DropForeignKey
ALTER TABLE "Competence" DROP CONSTRAINT "Competence_levelId_fkey";

-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "scale",
ADD COLUMN     "area" TEXT,
ADD COLUMN     "theme" TEXT,
DROP COLUMN "level",
ADD COLUMN     "level" INTEGER;

-- AlterTable
ALTER TABLE "Choice" DROP COLUMN "competenceId",
ADD COLUMN     "levelId" INTEGER,
ADD COLUMN     "themeId" INTEGER;

-- AlterTable
ALTER TABLE "Competence" ADD COLUMN     "areaId" INTEGER,
ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Level";

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetenceLevel" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "CompetenceLevel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Theme" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "competenceId" INTEGER,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChoiceLevel" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "description" TEXT,

    CONSTRAINT "ChoiceLevel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competence" ADD CONSTRAINT "Competence_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competence" ADD CONSTRAINT "Competence_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "CompetenceLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Choice" ADD CONSTRAINT "Choice_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "ChoiceLevel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
