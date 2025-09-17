import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Deshabilitar ESLint durante el build para permitir compilación
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
