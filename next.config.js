/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  distDir: "build",
  env: {
    // BASE_URL: "https://e-golap-server.up.railway.app",
    BASE_URL: "http://localhost:4000",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
