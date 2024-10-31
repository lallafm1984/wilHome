/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://lallafm1984.github.io/wilHomeBuild"
      : "",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/wilHomeBuild' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/wilHomeBuild/' : '',
  // ... 다른 설정들
}

module.exports = nextConfig 