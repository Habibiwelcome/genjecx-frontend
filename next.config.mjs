/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // ⭐ THIS is the important line ⭐
  output: "export",

  // Image optimization
  images: {
    formats: ['image/webp'],
  },

  async headers() {
    return [
      {
        source: '/pdfs/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self'" },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  async redirects() {
    return [];
  },

  async rewrites() {
    return { beforeFiles: [] };
  },
};

export default nextConfig;
