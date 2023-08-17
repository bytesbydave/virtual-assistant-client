const GIPHY_API_KEY = process.env.GIPHY_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.giphy.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
  env: {
    GIPHY_API_KEY,
  },
};

module.exports = nextConfig;
