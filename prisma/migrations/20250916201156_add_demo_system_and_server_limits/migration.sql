-- AlterTable
ALTER TABLE "public"."EmbyServer" ADD COLUMN     "maxUsers" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "public"."UserServerLink" ADD COLUMN     "demoHours" INTEGER,
ADD COLUMN     "isDemo" BOOLEAN NOT NULL DEFAULT false;
