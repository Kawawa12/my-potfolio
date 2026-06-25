import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  // Allow serving images from public directory
  devIndicators: false,
};

export default nextConfig;
