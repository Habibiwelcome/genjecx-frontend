/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/genjecx-frontend",
  assetPrefix: "/genjecx-frontend/",
};

export default nextConfig;
