/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wilHome' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wilHome/' : '',
  // ... 다른 설정들
}

module.exports = nextConfig 