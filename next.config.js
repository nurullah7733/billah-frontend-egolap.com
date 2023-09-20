/** @type {import('next').NextConfig} */
const nextConfig = {
  //   reactStrictMode: false,
  distDir: "build",
  env: {},
  images: {
    domains: ["res.cloudinary.com"],
  },
  headers: {
    "x-url": ({ req }) => req.url,
  },
};

module.exports = nextConfig;
