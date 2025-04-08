/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  reactStrictMode: true,
  // Configure trailing slashes for consistent URLs
  trailingSlash: true,
};

module.exports = nextConfig;
