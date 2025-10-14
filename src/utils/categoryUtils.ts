// utils/categoryUtils.ts
// 添加分类映射验证
export const categoryMappings: Record<string, string> = {
  // 显示名称: URL slug
  'Normal': 'normal',
  'Happy Valentine Day': 'happy-valentine-day',
  'Happy New Year': 'happy-new-year',
  'Mother and Child': 'mother-and-child',
  'Summer Vibe': 'summer-vibe',
  'Christmas': 'christmas',
  'Halloween': 'halloween',
  // 添加其他分类映射...
};

export function categoryNameToSlug(category: string): string {
  // 首先检查映射表
  if (categoryMappings[category]) {
    return categoryMappings[category];
  }
  
  // 如果没有映射，使用默认转换
  return category
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function slugToCategoryName(slug: string): string {
  // 反向查找映射表
  const reverseMappings = Object.fromEntries(
    Object.entries(categoryMappings).map(([key, value]) => [value, key])
  );
  
  if (reverseMappings[slug]) {
    return reverseMappings[slug];
  }
  
  // 如果没有映射，使用默认转换
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}