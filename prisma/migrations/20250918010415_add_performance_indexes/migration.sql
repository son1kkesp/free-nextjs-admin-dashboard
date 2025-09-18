-- AlterTable
ALTER TABLE "public"."user_server_links" ADD COLUMN     "embyUserEmail" TEXT,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "demos_serverId_idx" ON "public"."demos"("serverId");

-- CreateIndex
CREATE INDEX "demos_isActive_idx" ON "public"."demos"("isActive");

-- CreateIndex
CREATE INDEX "demos_expirationDate_idx" ON "public"."demos"("expirationDate");

-- CreateIndex
CREATE INDEX "demos_createdAt_idx" ON "public"."demos"("createdAt");

-- CreateIndex
CREATE INDEX "emby_servers_isActive_idx" ON "public"."emby_servers"("isActive");

-- CreateIndex
CREATE INDEX "emby_servers_isTest_idx" ON "public"."emby_servers"("isTest");

-- CreateIndex
CREATE INDEX "emby_servers_userId_idx" ON "public"."emby_servers"("userId");

-- CreateIndex
CREATE INDEX "emby_servers_createdAt_idx" ON "public"."emby_servers"("createdAt");

-- CreateIndex
CREATE INDEX "user_server_links_serverId_idx" ON "public"."user_server_links"("serverId");

-- CreateIndex
CREATE INDEX "user_server_links_isDemo_idx" ON "public"."user_server_links"("isDemo");

-- CreateIndex
CREATE INDEX "user_server_links_isActive_idx" ON "public"."user_server_links"("isActive");

-- CreateIndex
CREATE INDEX "user_server_links_expirationDate_idx" ON "public"."user_server_links"("expirationDate");

-- CreateIndex
CREATE INDEX "user_server_links_createdAt_idx" ON "public"."user_server_links"("createdAt");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "public"."users"("role");

-- CreateIndex
CREATE INDEX "users_isActive_idx" ON "public"."users"("isActive");

-- CreateIndex
CREATE INDEX "users_isTest_idx" ON "public"."users"("isTest");

-- CreateIndex
CREATE INDEX "users_createdBy_idx" ON "public"."users"("createdBy");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "public"."users"("createdAt");
