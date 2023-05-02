/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:['images.ctfassets.net']
  },
  eslint:{
    ignoreDuringBuilds:true
  }
}

module.exports = nextConfig
