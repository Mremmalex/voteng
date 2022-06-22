-- DropForeignKey
ALTER TABLE "Contestant" DROP CONSTRAINT "Contestant_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Contestant" DROP CONSTRAINT "Contestant_electionId_fkey";

-- DropForeignKey
ALTER TABLE "Election" DROP CONSTRAINT "Election_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_contestantId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_electionId_fkey";

-- DropForeignKey
ALTER TABLE "Vote" DROP CONSTRAINT "Vote_voterId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "pvc" DROP DEFAULT;
