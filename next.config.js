/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Use unoptimized images for simpler deployment
    unoptimized: true,
  },
};

module.exports = nextConfig;
