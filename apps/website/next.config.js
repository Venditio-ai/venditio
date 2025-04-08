/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com"],
  },
  reactStrictMode: true,
  // Add assetPrefix to ensure assets load correctly on Netlify
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  // Allow trailing slashes to avoid unnecessary redirects
  trailingSlash: true,
};

module.exports = nextConfig;
