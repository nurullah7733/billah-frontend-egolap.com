/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  distDir: "build",
  env: {},
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
