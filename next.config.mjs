import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://this-house-that-house.github.io/thth-next-frontend/' : '',
  reactStrictMode: false,
  trailingSlash: true,
};

const config = withVanillaExtract(nextConfig);
export default config;