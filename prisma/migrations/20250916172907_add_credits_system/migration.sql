-- AlterTable
ALTER TABLE "public"."UserServerLink" ADD COLUMN     "creditsAllocated" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "creditsRemaining" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "creditsUsed" INTEGER NOT NULL DEFAULT 0;
