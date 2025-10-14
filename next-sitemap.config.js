import fs from 'fs';
import path from 'path';

// 读取 levels.json 文件
const levelsData = JSON.parse(
  fs.readFileSync(path.resolve('src/data/levels.json'), 'utf-8')
);

// URL 格式化函数 - 将分类名称转换为 URL 友好格式
function formatCategoryForURL(category) {
  return category
    .toLowerCase()                   // 转换为小写
    .replace(/\s+/g, '-')            // 将空格替换为连字符
    .replace(/[^\w-]+/g, '')         // 移除非单词字符
    .replace(/--+/g, '-')            // 替换多个连字符为单个
    .replace(/^-+/, '')              // 移除开头的连字符
    .replace(/-+$/, '');             // 移除结尾的连字符
}

export default {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.perfecttidyhub.com/',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,

  // 排除包含分类的路径
  exclude: [
    '/levels/normal/*', // 只排除 normal 类型的路径
  ],

  // 转换函数，强制使用简洁URL
  transform: async (config, path) => {
    // 查找是否为 levels 路径
    if (path.match(/\/levels\/\w+\/\d+/i)) {
      const parts = path.split('/');
      const category = parts[2]; // 获取分类（如 normal、halloween 等）
      const levelId = parts[3]; // 获取 levelId

      // 如果是 normal，转换为简洁路径
      if (category === 'normal') {
        path = `/levels/${levelId}`;
      } else {
        // 其他分类：先解码，然后转换为 URL 友好格式
        const decodedCategory = decodeURIComponent(category);
        const urlFriendlyCategory = formatCategoryForURL(decodedCategory);
        path = `/levels/${urlFriendlyCategory}/${levelId}`;
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // 手动生成所有路径
  additionalPaths: async (config) => {
    // 静态页面路径
    const staticPaths = [
      '/',
      '/privacy', 
      '/terms',
      '/playonline',
      '/download',
      '/levels',
      '/blogs',
    ];

    // 动态博客页面路径
    const blogSlugs = ['expert-perfect-tidy-levels-walkthrough'];

    // 动态关卡页面路径 - 使用简洁URL
    const levelPaths = levelsData.map(level => {
      const { category, id } = level;
      if (category === 'normal') {
        return `/levels/${id}`;
      } 
      return null;
    }).filter(path => path !== null); // 过滤 null

    // 手动定义的关卡路径
    const levelsSlugs = [
      'Cosmetics/1', 'Kitchen/1', 'Christmas/1', 'Christmas/2', 'Christmas/3', 'Christmas/4', 'Christmas/5',
      'Christmas/6', 'Christmas/7', 'Christmas/8', 'Christmas/9', 'Christmas/10', 'Halloween/1', 'Halloween/2',
      'Halloween/3', 'Halloween/4', 'Halloween/5', 'Halloween/6', 'Halloween/7', 'Halloween/8', 'Halloween/9',
      'Halloween/10', 'Halloween/11', 'Thanksgiving/1', 'Thanksgiving/2', 'Thanksgiving/3', 'Thanksgiving/4',
      'Thanksgiving/5', 'Thanksgiving/6', 'Thanksgiving/7', 'Thanksgiving/8', 'Thanksgiving/9', 'Thanksgiving/10',
      'Thanksgiving/11','Unpacking%20Memories/1','Mother%20and%20Child/1','Happy%20Woman\'s%20Day/1',
      'Happy%20Valentine%20Day/1','/Happy%20New%20Year/1','/Happy%20New%20Year/2',
      '/Happy%20New%20Year/3','/Happy%20New%20Year/4'
    ];

    // 合并所有路径
    const allPaths = [
      ...staticPaths,
      ...blogSlugs.map(slug => `/blogs/${slug}`),
      ...levelsSlugs.map(slug => `/levels/${slug}`), // 手动生成的路径
      ...levelPaths // 动态生成的路径
    ];

    return allPaths.map(path => ({
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : (typeof path === 'string' && path.startsWith('/blogs/') ? 0.8 : 0.7),
      lastmod: new Date().toISOString(),
    }));
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/llms-full.txt'],
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User', 
        allow: ['/llms.txt', '/llms-full.txt'],
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/llms.txt', '/llms-full.txt'],
        disallow: '/',
      }
    ],
  },
};
