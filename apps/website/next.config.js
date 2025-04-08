/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  reactStrictMode: true,
  target: "serverless", // add this line
};

module.exports = nextConfig;
