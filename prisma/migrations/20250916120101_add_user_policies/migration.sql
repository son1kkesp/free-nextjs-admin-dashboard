-- CreateTable
CREATE TABLE "public"."UserPolicy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "enableTranscoding" BOOLEAN NOT NULL DEFAULT true,
    "maxTranscodingBitrate" INTEGER,
    "transcodingFormats" TEXT,
    "enableDownload" BOOLEAN NOT NULL DEFAULT false,
    "maxDownloadBitrate" INTEGER,
    "maxStreamingBitrate" INTEGER,
    "enableRemoteAccess" BOOLEAN NOT NULL DEFAULT true,
    "maxDevices" INTEGER,
    "enableSchedule" BOOLEAN NOT NULL DEFAULT false,
    "scheduleStart" TEXT,
    "scheduleEnd" TEXT,
    "enableLiveTV" BOOLEAN NOT NULL DEFAULT false,
    "enableSync" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serverId" TEXT,

    CONSTRAINT "UserPolicy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserPolicy_name_key" ON "public"."UserPolicy"("name");

-- CreateIndex
CREATE INDEX "UserPolicy_serverId_idx" ON "public"."UserPolicy"("serverId");

-- AddForeignKey
ALTER TABLE "public"."UserPolicy" ADD CONSTRAINT "UserPolicy_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "public"."EmbyServer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
