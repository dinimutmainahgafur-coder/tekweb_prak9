/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/tekweb_prak9',   // tambahkan ini
  assetPrefix: '/tekweb_prak9', // tambahkan ini supaya _next/static juga ikut prefix
};

module.exports = nextConfig;
