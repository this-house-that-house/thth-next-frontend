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
  basePath: process.env.NODE_ENV === 'production' ? '/thth-next-frontend' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/thth-next-frontend/' : '',
  reactStrictMode: false,
};

const config = withVanillaExtract(nextConfig);
export default config;