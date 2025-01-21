/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  distDir: "build",
  env: {
    BASE_URL: "https://billah-backend-egolap-com.vercel.app",
    // BASE_URL: "https://backend.egolap.com",
    // BASE_URL: "http://localhost:4000",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
