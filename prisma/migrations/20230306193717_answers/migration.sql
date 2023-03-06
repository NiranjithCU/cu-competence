/*
  Warnings:

  - You are about to drop the column `answer` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `area` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `competence` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `Answers` table. All the data in the column will be lost.
  - You are about to drop the column `theme` on the `Answers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Answers" DROP COLUMN "answer",
DROP COLUMN "area",
DROP COLUMN "competence",
DROP COLUMN "level",
DROP COLUMN "theme",
ADD COLUMN     "areaId" INTEGER,
ADD COLUMN     "choiceId" INTEGER,
ADD COLUMN     "competenceId" INTEGER,
ADD COLUMN     "themeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_competenceId_fkey" FOREIGN KEY ("competenceId") REFERENCES "Competence"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_themeId_fkey" FOREIGN KEY ("themeId") REFERENCES "Theme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_choiceId_fkey" FOREIGN KEY ("choiceId") REFERENCES "Choice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
