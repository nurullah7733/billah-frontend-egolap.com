/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  distDir: "build",
  env: {
    BASE_URL: "https://e-golap-server.up.railway.app",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
