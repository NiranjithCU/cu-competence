-- AlterTable
ALTER TABLE "Answers" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Assesment" ADD COLUMN     "entreprenur" TEXT,
ADD COLUMN     "rolemodel" TEXT;

-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "assessmentLength" TEXT,
ADD COLUMN     "competenceRange" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "difficultyLevel" TEXT,
ADD COLUMN     "goodResults" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;