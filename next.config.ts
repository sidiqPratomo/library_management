import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  typescript:{
    ignoreBuildErrors: true, // This is set to true to ignore TypeScript errors during the build process
  },
  eslint:{
    ignoreDuringBuilds: true, // This is set to true to ignore ESLint errors during the build process
  }
};

export default nextConfig;
