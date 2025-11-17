/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEWSDATA_API_KEY: process.env.NEWSDATA_API_KEY,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY
  },
  images: {
    domains: [
      "cdn.thenewsapi.com",
      "newsdata.io",
      "i.ytimg.com",
      "images.unsplash.com"
    ]
  }
};

module.exports = nextConfig;
