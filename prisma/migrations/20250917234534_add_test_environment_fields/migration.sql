/*
  Warnings:

  - You are about to drop the `CreditBalance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CreditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmbyAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmbyServer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PackageLibrary` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResellerTier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPolicy` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserServerLink` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."UserRole" AS ENUM ('SUPER_ADMIN', 'TECH_ADMIN', 'PREMIUM_RESELLER', 'ADVANCED_RESELLER', 'BASIC_RESELLER');

-- CreateEnum
CREATE TYPE "public"."CreditType" AS ENUM ('ONE_CONNECTION', 'TWO_CONNECTIONS');

-- DropForeignKey
ALTER TABLE "public"."CreditBalance" DROP CONSTRAINT "CreditBalance_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CreditLog" DROP CONSTRAINT "CreditLog_actorUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CreditLog" DROP CONSTRAINT "CreditLog_targetUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EmbyAccount" DROP CONSTRAINT "EmbyAccount_serverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EmbyAccount" DROP CONSTRAINT "EmbyAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."EmbyServer" DROP CONSTRAINT "EmbyServer_ownerUserId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Package" DROP CONSTRAINT "Package_serverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PackageLibrary" DROP CONSTRAINT "PackageLibrary_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."User" DROP CONSTRAINT "User_resellerTierId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserPolicy" DROP CONSTRAINT "UserPolicy_serverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserServerLink" DROP CONSTRAINT "UserServerLink_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserServerLink" DROP CONSTRAINT "UserServerLink_serverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserServerLink" DROP CONSTRAINT "UserServerLink_suspendedById_fkey";

-- DropForeignKey
ALTER TABLE "public"."UserServerLink" DROP CONSTRAINT "UserServerLink_userId_fkey";

-- DropTable
DROP TABLE "public"."CreditBalance";

-- DropTable
DROP TABLE "public"."CreditLog";

-- DropTable
DROP TABLE "public"."EmbyAccount";

-- DropTable
DROP TABLE "public"."EmbyServer";

-- DropTable
DROP TABLE "public"."Package";

-- DropTable
DROP TABLE "public"."PackageLibrary";

-- DropTable
DROP TABLE "public"."ResellerTier";

-- DropTable
DROP TABLE "public"."User";

-- DropTable
DROP TABLE "public"."UserPolicy";

-- DropTable
DROP TABLE "public"."UserServerLink";

-- DropEnum
DROP TYPE "public"."AccountStatus";

-- DropEnum
DROP TYPE "public"."RoleName";

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT,
    "role" "public"."UserRole" NOT NULL DEFAULT 'BASIC_RESELLER',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isTest" BOOLEAN NOT NULL DEFAULT false,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emby_servers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "maxUsers" INTEGER NOT NULL DEFAULT 100,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isTest" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "emby_servers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."emby_accounts" (
    "id" TEXT NOT NULL,
    "embyUserId" TEXT NOT NULL,
    "embyUserName" TEXT NOT NULL,
    "embyUserEmail" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "emby_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_server_links" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "isDemo" BOOLEAN NOT NULL DEFAULT false,
    "expirationDate" TIMESTAMP(3),
    "creditType" "public"."CreditType" NOT NULL DEFAULT 'ONE_CONNECTION',
    "credits" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_server_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."demos" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "embyUserName" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "hoursDuration" INTEGER NOT NULL DEFAULT 24,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "demos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."packages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "serverId" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."libraries" (
    "id" TEXT NOT NULL,
    "embyId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "libraries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."package_libraries" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "libraryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "package_libraries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."policies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "isGlobal" BOOLEAN NOT NULL DEFAULT false,
    "allowCameraUpload" BOOLEAN NOT NULL DEFAULT false,
    "allowPasswordChange" BOOLEAN NOT NULL DEFAULT false,
    "allowTranscoding" BOOLEAN NOT NULL DEFAULT false,
    "allowRemuxing" BOOLEAN NOT NULL DEFAULT false,
    "allowAudioTranscoding" BOOLEAN NOT NULL DEFAULT false,
    "enableNotifications" BOOLEAN NOT NULL DEFAULT false,
    "policyData" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "policies_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "emby_accounts_embyUserId_key" ON "public"."emby_accounts"("embyUserId");

-- CreateIndex
CREATE UNIQUE INDEX "user_server_links_userId_serverId_key" ON "public"."user_server_links"("userId", "serverId");

-- CreateIndex
CREATE UNIQUE INDEX "libraries_embyId_serverId_key" ON "public"."libraries"("embyId", "serverId");

-- CreateIndex
CREATE UNIQUE INDEX "package_libraries_packageId_libraryId_key" ON "public"."package_libraries"("packageId", "libraryId");

-- AddForeignKey
ALTER TABLE "public"."emby_servers" ADD CONSTRAINT "emby_servers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."emby_accounts" ADD CONSTRAINT "emby_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_server_links" ADD CONSTRAINT "user_server_links_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."emby_servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."demos" ADD CONSTRAINT "demos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."demos" ADD CONSTRAINT "demos_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."emby_servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."packages" ADD CONSTRAINT "packages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."packages" ADD CONSTRAINT "packages_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."emby_servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."libraries" ADD CONSTRAINT "libraries_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."emby_servers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."package_libraries" ADD CONSTRAINT "package_libraries_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."packages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."package_libraries" ADD CONSTRAINT "package_libraries_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "public"."libraries"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."policies" ADD CONSTRAINT "policies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
