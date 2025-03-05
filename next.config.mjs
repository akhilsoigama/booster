/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/public',

  async rewrites() {

    return [
      
        {
          source: '/api/:path*',
          destination: 'https://your-production-api-url.com/api/:path*', // Replace with the correct URL
        },
      ];
  },
};

export default nextConfig;