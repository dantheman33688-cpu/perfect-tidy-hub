// src/app/levels/[category]/[id]/page.tsx
import data from "@/data/levels.json";
import LevelDetail from "@/components/LevelDetail";
import Levels from "@/components/Levels";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

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
    
    return {
      title: `${level.title} - Perfect Tidy Walkthrough`,
      description: `Complete walkthrough and solutions for ${level.title}. Find tips and strategies to master this level.`,
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
      // 尝试查找任何匹配ID的关卡
      const anyLevelWithSameId = levels.find(l => l.id === levelId);
      if (anyLevelWithSameId) {
        // 重定向到正确的分类URL
        const correctCategory = encodeURIComponent(anyLevelWithSameId.category);
        redirect(`/levels/${correctCategory}/${levelId}`);
      }
      notFound();
    }

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