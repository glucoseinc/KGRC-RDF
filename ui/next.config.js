const isProd = process.env.EXPORT === 'true';

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? '/risk-ui' : '',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { net: false, fs: false, child_process: false }
    return config
  }
}