// src/app/levels/[category]/[id]/page.tsx
import data from "@/data/levels.json";
import LevelDetail from "@/components/LevelDetail";
import Levels from "@/components/Levels";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Head from 'next/head';

// 定义 Level 类型
interface Level {
  id: number;
  category: string;
  title: string;
  videoId: string;
  thumb: string;
}

// 将 URL 分类转换为显示名称
function getDisplayName(category: string): string {
  const displayMap: Record<string, string> = {
    'normal': 'Normal',
    'happy-valentine-day': 'Happy Valentine Day',
    'happy-new-year': 'Happy New Year',
    'mother-and-child': 'Mother and Child',
    'summer-vibe': 'Summer Vibe',
    'unpacking-memories': 'Unpacking Memories',
    'happy-womans-day': 'Happy Woman\'s Day',
    'christmas': 'Christmas',
    'halloween': 'Halloween',
    'kitchen': 'Kitchen',
    'thanksgiving': 'Thanksgiving'
  };
  
  return displayMap[category] || category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

// 动态生成元数据
export async function generateMetadata({ params }: { 
  params: Promise<{ category: string; id: string }>
}): Promise<Metadata> {
  try {
    const { category, id } = await params;
    const levelId = Number(id);
    
    // 查找对应的关卡数据
    const levels = data as Level[];
    const level = levels.find(l => l.category === category && l.id === levelId);
    
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
    category: level.category, // 直接使用分类名称
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
    
    // 查找对应的关卡
    const level = levels.find(l => l.category === category && l.id === levelId);
    
    if (!level) {
      notFound();
    }

    // 获取显示名称
    const displayCategory = getDisplayName(category);
    
    // 获取当前关卡在所属分类中的位置
    const categoryLevels = levels.filter(l => l.category === category);
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
          category={displayCategory}
        />
        <Levels />
      </>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    notFound();
  }
}