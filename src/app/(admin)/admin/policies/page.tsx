import { prisma } from "@/lib/prisma";
import PoliciesWidget from "./policies.widget";

export default async function PoliciesPage() {
  // Obtener políticas existentes
  const policies = await prisma.policy.findMany({
    include: {
      user: {
        select: {
          id: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // Obtener servidores para crear políticas
  const servers = await prisma.embyServer.findMany({
    select: {
      id: true,
      name: true,
      url: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  // Transformar los datos para que coincidan con el tipo esperado
  const transformedPolicies = policies.map(policy => ({
    id: policy.id,
    name: policy.name,
    description: policy.description,
    enableTranscoding: policy.allowTranscoding,
    maxTranscodingBitrate: null,
    transcodingFormats: null,
    enableDownload: false,
    maxDownloadBitrate: null,
    maxStreamingBitrate: null,
    enableRemoteAccess: true,
    maxDevices: null,
    enableSchedule: false,
    scheduleStart: null,
    scheduleEnd: null,
    enableLiveTV: false,
    enableSync: false,
    enableCameraUpload: policy.allowCameraUpload,
    serverId: null,
    server: null,
    createdAt: policy.createdAt,
    updatedAt: policy.updatedAt,
  }));

  // Transformar servidores para que coincidan con el tipo esperado
  const transformedServers = servers.map(server => ({
    id: server.id,
    name: server.name,
    baseUrl: server.url,
  }));

  return (
    <div>
      <PoliciesWidget policies={transformedPolicies} servers={transformedServers} />
    </div>
  );
}

