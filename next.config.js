/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    directusUrl: 'https://directus.autonomy.institute/',
  },
};

module.exports = nextConfig;
