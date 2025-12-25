const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/tekweb_prak9" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
