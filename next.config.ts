import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for production builds, not for development
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
