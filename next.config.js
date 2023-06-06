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
  output: "export",
};

module.exports = nextConfig;
