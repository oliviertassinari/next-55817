/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: () => {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = nextConfig
