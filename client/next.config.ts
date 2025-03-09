import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'upload.wikimedia.org', 'i.pinimg.com'],
  },
};

export default nextConfig;
