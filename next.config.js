/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'], // Add the domain for the image URLs
  },
};

module.exports = nextConfig;
