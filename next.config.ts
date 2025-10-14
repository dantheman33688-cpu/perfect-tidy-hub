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
      // 其他分类使用简单的映射
      {
        source: '/levels/happy_valentine_day/:id(\\d+)',
        destination: '/levels/happy_valentine_day/:id',
      },
      {
        source: '/levels/happy_new_year/:id(\\d+)',
        destination: '/levels/happy_new_year/:id',
      },
      {
        source: '/levels/mother_and_child/:id(\\d+)',
        destination: '/levels/mother_and_child/:id',
      },
      {
        source: '/levels/summer_vibe/:id(\\d+)',
        destination: '/levels/summer_vibe/:id',
      },
      {
        source: '/levels/unpacking_memories/:id(\\d+)',
        destination: '/levels/unpacking_memories/:id',
      },
      // 单单词分类保持不变
      {
        source: '/levels/Christmas/:id(\\d+)',
        destination: '/levels/christmas/:id',
      },
      {
        source: '/levels/halloween/:id(\\d+)',
        destination: '/levels/halloween/:id',
      },
      {
        source: '/levels/kitchen/:id(\\d+)',
        destination: '/levels/kitchen/:id',
      },
      {
        source: '/levels/thanksgiving/:id(\\d+)',
        destination: '/levels/thanksgiving/:id',
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