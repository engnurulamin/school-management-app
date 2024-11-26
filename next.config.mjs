/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: 'images.pexels.com', port: '', pathname: '/**/**'}
    ]
  }
};

export default nextConfig;
