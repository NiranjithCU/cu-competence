/*
  Warnings:

  - You are about to drop the column `profileId` on the `Assesment` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Assesment" DROP CONSTRAINT "Assesment_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Assesment" DROP COLUMN "profileId",
ADD COLUMN     "age" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "job" TEXT,
ADD COLUMN     "program" TEXT,
ADD COLUMN     "semester" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL DEFAULT 'clex99eyu00004a1gudnhick2';

-- DropTable
DROP TABLE "Profile";

-- AddForeignKey
ALTER TABLE "Assesment" ADD CONSTRAINT "Assesment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
