import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',

  images: {
    domains: [
      "api.microlink.io",
    ],
    unoptimized: true,
  },
};

export default nextConfig;