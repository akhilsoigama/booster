/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/public',

  async rewrites() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://booster-f0cy2omok-akhilsoigamas-projects.vercel.app';

    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;