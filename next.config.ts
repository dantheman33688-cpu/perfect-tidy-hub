import { NextConfig } from 'next';
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 使用重写将简洁URL映射到实际页面
  async rewrites() {
    return [
      {
        source: '/levels/:id(\\d+)',
        destination: '/levels/normal/:id',
      },
      // 其他分类的重写 - 使用正确的分类名称
      {
        source: '/levels/happy-womans-day/:id(\\d+)',
        destination: '/levels/Happy Woman\'s Day/:id',
      },
      {
        source: '/levels/happy-valentine-day/:id(\\d+)',
        destination: '/levels/Happy Valentine Day/:id',
      },
      {
        source: '/levels/happy-new-year/:id(\\d+)',
        destination: '/levels/Happy New Year/:id',
      },
      {
        source: '/levels/mother-and-child/:id(\\d+)',
        destination: '/levels/Mother and Child/:id',
      },
      {
        source: '/levels/summer-vibe/:id(\\d+)',
        destination: '/levels/Summer Vibe/:id',
      },
      {
        source: '/levels/unpacking-memories/:id(\\d+)',
        destination: '/levels/Unpacking Memories/:id',
      },
      // 以下分类如果名称就是单数形式，保持原样
      {
        source: '/levels/christmas/:id(\\d+)',
        destination: '/levels/Christmas/:id',
      },
      {
        source: '/levels/halloween/:id(\\d+)',
        destination: '/levels/Halloween/:id',
      },
      {
        source: '/levels/kitchen/:id(\\d+)',
        destination: '/levels/Kitchen/:id',
      },
      {
        source: '/levels/thanksgiving/:id(\\d+)',
        destination: '/levels/Thanksgiving/:id',
      },
    ];
  },

  webpack(config: Configuration) {
    // Force Webpack to be used instead of Turbopack
    config.experiments = {
      topLevelAwait: true,
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'anotherdomain.com',
      },
    ],
  },
};

export default nextConfig;