/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "avatars.githubusercontent.com",
      "www.startech.com.bd",
      "lh3.googleusercontent.com"
    ],
  },
};

module.exports = nextConfig;
