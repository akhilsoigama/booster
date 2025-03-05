/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {

    return [
      {
        source: '/api/:path*',
        destination: 'https://booster-f0cy2omok-akhilsoigamas-projects.vercel.app/api/:path*',
      },
    ];

  },
};

export default nextConfig;
