/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.able.mn',
            port: '',
            pathname: '/main.php/**',
          },
        ],
      },
}

module.exports = nextConfig
