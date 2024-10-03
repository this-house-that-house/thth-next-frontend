import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();
const isProd = process.env.NODE_ENV === 'production';

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
  assetPrefix: isProd ? 'https://this-house-that-house.github.io/thth-next-frontend/' : '',
};
export default withVanillaExtract(nextConfig);