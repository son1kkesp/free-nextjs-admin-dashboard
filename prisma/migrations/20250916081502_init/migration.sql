-- CreateEnum
CREATE TYPE "public"."RoleName" AS ENUM ('SUPER_ADMIN', 'TECH_ADMIN', 'PREMIUM_RESELLER', 'ADVANCED_RESELLER', 'BASIC_RESELLER', 'READ_ONLY');

-- CreateEnum
CREATE TYPE "public"."AccountStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'EXPIRED');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "hashedPassword" TEXT,
    "role" "public"."RoleName" NOT NULL DEFAULT 'READ_ONLY',
    "resellerTierId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "suspensionUntil" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ResellerTier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "creditToDaysRate" INTEGER NOT NULL DEFAULT 30,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResellerTier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditBalance" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CreditBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditLog" (
    "id" TEXT NOT NULL,
    "actorUserId" TEXT NOT NULL,
    "delta" INTEGER NOT NULL,
    "reason" TEXT,
    "targetUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CreditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmbyServer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "ownerUserId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmbyServer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Package" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PackageLibrary" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "libraryId" TEXT,
    "libraryName" TEXT,

    CONSTRAINT "PackageLibrary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserServerLink" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "packageId" TEXT,
    "status" "public"."AccountStatus" NOT NULL DEFAULT 'ACTIVE',
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expireAt" TIMESTAMP(3),
    "suspendedAt" TIMESTAMP(3),
    "suspendedById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserServerLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."EmbyAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "embyUserId" TEXT NOT NULL,
    "embyUsername" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EmbyAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ResellerTier_name_key" ON "public"."ResellerTier"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CreditBalance_userId_key" ON "public"."CreditBalance"("userId");

-- CreateIndex
CREATE INDEX "idx_user_server_unique" ON "public"."UserServerLink"("userId", "serverId");

-- CreateIndex
CREATE UNIQUE INDEX "UserServerLink_userId_serverId_key" ON "public"."UserServerLink"("userId", "serverId");

-- CreateIndex
CREATE UNIQUE INDEX "EmbyAccount_serverId_embyUserId_key" ON "public"."EmbyAccount"("serverId", "embyUserId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_resellerTierId_fkey" FOREIGN KEY ("resellerTierId") REFERENCES "public"."ResellerTier"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditBalance" ADD CONSTRAINT "CreditBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditLog" ADD CONSTRAINT "CreditLog_actorUserId_fkey" FOREIGN KEY ("actorUserId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditLog" ADD CONSTRAINT "CreditLog_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmbyServer" ADD CONSTRAINT "EmbyServer_ownerUserId_fkey" FOREIGN KEY ("ownerUserId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Package" ADD CONSTRAINT "Package_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."EmbyServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PackageLibrary" ADD CONSTRAINT "PackageLibrary_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserServerLink" ADD CONSTRAINT "UserServerLink_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserServerLink" ADD CONSTRAINT "UserServerLink_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."EmbyServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserServerLink" ADD CONSTRAINT "UserServerLink_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserServerLink" ADD CONSTRAINT "UserServerLink_suspendedById_fkey" FOREIGN KEY ("suspendedById") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmbyAccount" ADD CONSTRAINT "EmbyAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."EmbyAccount" ADD CONSTRAINT "EmbyAccount_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."EmbyServer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
