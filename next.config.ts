import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Routem_Mock',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
