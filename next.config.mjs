/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    qualities: [25, 50, 75, 90, 100],
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
