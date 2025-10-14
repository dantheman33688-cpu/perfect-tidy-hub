// src/app/levels/[category]/[id]/page.tsx
import data from "@/data/levels.json";
import LevelDetail from "@/components/LevelDetail";
import Levels from "@/components/Levels";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from 'next/head'; // 添加 Head 组件导入

// 定义 Level 类型
interface Level {
  id: number;
  category: string;
  title: string;
  videoId: string;
  thumb: string;
}

// 辅助函数：标准化分类名称（处理大小写和空格）
function normalizeCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

// 获取分类的简洁URL形式
function getCategorySlug(category: string): string {
  const normalized = normalizeCategory(category);
  
  // 定义分类到简洁URL的映射
  const categoryMap: Record<string, string> = {
    'normal': 'normal',
    'happy woman\'s day': 'happy-womans-day',
    'happy valentine day': 'happy-valentine-day',
    'happy new year': 'happy-new-year',
    'mother and child': 'mother-and-child',
    'summer vibe': 'summer-vibe',
    'unpacking memories': 'unpacking-memories',
    'christmas': 'christmas',
    'halloween': 'halloween',
    'kitchen': 'kitchen',
    'thanksgiving': 'thanksgiving'
  };
  
  return categoryMap[normalized] || category.toLowerCase().replace(/\s+/g, '-');
}

// 获取规范URL
function getCanonicalUrl(level: Level): string {
  const categorySlug = getCategorySlug(level.category);
  return categorySlug === 'normal' 
    ? `/levels/${level.id}`
    : `/levels/${categorySlug}/${level.id}`;
}

// 动态生成元数据
export async function generateMetadata({ params }: { 
  params: Promise<{ category: string; id: string }>
}): Promise<Metadata> {
  try {
    const { category, id } = await params;
    const levelId = Number(id);
    
    // 解码URL参数
    const decodedCategory = decodeURIComponent(category);
    const normalizedCategory = normalizeCategory(decodedCategory);
    
    // 查找对应的关卡数据 - 使用更灵活的匹配
    const levels = data as Level[];
    const level = levels.find(l => {
      const levelCategoryNormalized = normalizeCategory(l.category);
      return l.id === levelId && levelCategoryNormalized === normalizedCategory;
    });
    
    if (!level) {
      return {
        title: `Perfect Tidy Level ${levelId} Guide`,
        description: `Complete walkthrough and solutions for Perfect Tidy level ${levelId}.`,
      };
    }
    
    // 获取规范URL
    const canonicalUrl = getCanonicalUrl(level);
    
    return {
      title: `${level.title} - Perfect Tidy Walkthrough`,
      description: `Complete walkthrough and solutions for ${level.title}. Find tips and strategies to master this level.`,
      alternates: {
        canonical: canonicalUrl,
      },
    };
  } catch (error) {
    return {
      title: 'Perfect Tidy Level Guide',
      description: 'Complete walkthrough and solutions for Perfect Tidy levels.',
    };
  }
}

// 生成静态路径参数
export async function generateStaticParams() {
  const levels = data as Level[];
  
  return levels.map(level => ({
    category: encodeURIComponent(level.category), // 使用编码后的分类名称
    id: String(level.id)
  }));
}

// 详情页
export default async function Page({ params }: { 
  params: Promise<{ category: string; id: string }>
}) {
  try {
    const { category, id } = await params;
    const levelId = Number(id);
    const levels = data as Level[];
    
    // 解码URL参数
    const decodedCategory = decodeURIComponent(category);
    const normalizedCategory = normalizeCategory(decodedCategory);
    
    // 使用更灵活的匹配逻辑
    const level = levels.find(l => {
      const levelCategoryNormalized = normalizeCategory(l.category);
      return l.id === levelId && levelCategoryNormalized === normalizedCategory;
    });
    
    if (!level) {
      // 不再使用重定向，直接返回404
      notFound();
    }

    // 获取规范URL
    const canonicalUrl = getCanonicalUrl(level);
    
    // 获取当前关卡在所属分类中的位置
    const categoryLevels = levels.filter(l => 
      normalizeCategory(l.category) === normalizedCategory
    );
    const idx = categoryLevels.findIndex(l => l.id === levelId);
    
    // 查找前后关卡（同分类内）
    const prev = idx > 0 ? categoryLevels[idx - 1] : null;
    const next = idx < categoryLevels.length - 1 ? categoryLevels[idx + 1] : null;

    // 获取邻近关卡（同分类内）
    const start = Math.max(0, idx - 12);
    const adjacent = categoryLevels.slice(start, start + 24);

    return (
      <>
        {/* 添加规范链接 */}
        <Head>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        
        <LevelDetail 
          level={level} 
          prev={prev} 
          next={next} 
          adjacent={adjacent}
          category={decodedCategory}
        />
        <Levels />
      </>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    notFound();
  }
}