import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactCompiler: true,
  devIndicators: {
    position: "bottom-left",
  },
  experimental: {
    appNavFailHandling: false,
    turbopackFileSystemCacheForDev: true,
    turbopackClientSideNestedAsyncChunking: true,
    optimizePackageImports: ["lucide-react", "@fortawesome/fontawesome-free"],
  },
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8029",
        pathname: "/api/uploads/images/**",
      },
    ],
  },
};

export default nextConfig;
