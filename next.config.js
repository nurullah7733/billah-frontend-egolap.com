/** @type {import('next').NextConfig} */
const nextConfig = {
  //   reactStrictMode: false,
  distDir: "build",
  env: {},
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
