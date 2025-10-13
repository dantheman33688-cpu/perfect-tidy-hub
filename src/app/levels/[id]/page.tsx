import data from "@/data/levels.json";
import LevelDetail from "@/components/LevelDetail";
import Levels from "@/components/Levels";
import { Metadata } from "next";

// 定义 Level 类型
interface Level {
  id: number;
  title: string;
  videoId: string;
  thumb: string;
}

// 动态生成元数据
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  try {
    // 等待 params 解析
    const { id } = await params;
    const levelId = Number(id);
    
    // 查找对应的关卡数据
    const levels = data as Level[];
    const level = levels.find(l => l.id === levelId);
    
    if (!level) {
      return {
        title: `Perfect Tidy Level ${levelId} Guide – Tips & Strategies`,
        description: `Complete walkthrough and solutions for Perfect Tidy level ${levelId}. Find tips and strategies to master this level and progress through the game.`,
        alternates: {
          canonical: `https://www.hexasortlevel.com/levels/${levelId}`,
        },
      };
    }
    
    return {
      title: level.title,
      description: `Complete walkthrough and solutions for ${level.title}. Find tips and strategies to master this level and progress through the game.`,
      alternates: {
        canonical: `https://www.hexasortlevel.com/levels/${levelId}`,
      },
      openGraph: {
        title: level.title,
        description: `Complete walkthrough and solutions for ${level.title}. Find tips and strategies to master this level and progress through the game.`,
        url: `https://www.hexasortlevel.com/levels/${levelId}`,
        siteName: 'Perfect Tidy Level Guide',
        images: [
          {
            url: level.thumb,
            width: 1200,
            height: 630,
            alt: level.title,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: level.title,
        description: `Complete walkthrough and solutions for ${level.title}. Find tips and strategies to master this level and progress through the game.`,
        images: [level.thumb],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: false,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Perfect Tidy Level Guide – Tips & Strategies',
      description: 'Complete walkthrough and solutions for Perfect Tidy levels. Find tips and strategies to master the game.',
    };
  }
}

// 生成静态路径参数
export async function generateStaticParams() {
  return (data as Level[]).map((l) => ({ id: String(l.id) }));
}

// 详情页
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  try {
    // 等待 params 解析
    const { id } = await params;
    const levelId = Number(id);
    const levels = data as Level[];

    const idx = levels.findIndex((l) => l.id === levelId);
    const level = idx >= 0 ? levels[idx] : null;
    
    if (!level) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Level Not Found</h1>
            <p className="text-gray-600">The requested level does not exist.</p>
          </div>
        </div>
      );
    }

    // 查找前后关卡
    const prev = idx > 0 ? levels[idx - 1] : null;
    const next = idx < levels.length - 1 ? levels[idx + 1] : null;

    // 获取邻近关卡
    const start = Math.max(0, idx - 12);
    const adjacent = levels.slice(start, start + 24);

    return (
      <>
        <LevelDetail level={level} prev={prev} next={next} adjacent={adjacent} />
        <Levels />
      </>
    );
  } catch (error) {
    console.error('Error rendering page:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Level</h1>
          <p className="text-gray-600">An error occurred while loading the level. Please try again later.</p>
        </div>
      </div>
    );
  }
}