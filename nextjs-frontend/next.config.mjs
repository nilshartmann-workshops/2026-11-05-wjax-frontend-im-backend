const backendUrl = process.env.BACKEND_URL ?? "http://localhost:63080";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
  devIndicators:  false,
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: `${backendUrl}/images/:path*`,
      },
    ];
  },
};

export default nextConfig;
