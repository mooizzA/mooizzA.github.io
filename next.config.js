/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Add basePath
  basePath: "/home",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
