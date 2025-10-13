// src/app/download/perfect-tidy-download.tsx

import { Metadata } from 'next';
import Download from "@/components/Download"; // 假设这个组件包含下载按钮和标题
import Levels from "@/components/Levels";
import PerfectTidyDownloadFAQ from '@/components/DownloadFAQ'; // 您的 FAQ 组件

// --- SEO 元数据替换开始 ---
export const metadata: Metadata = {
  title: 'Download Perfect Tidy - Free ASMR Organizing Game & Walkthroughs',
  description: 'Download Perfect Tidy, the satisfying ASMR organizing game. Find detailed level guides, system requirements, and FAQs on our website. Available on App Store and Google Play.',
  alternates: {
    canonical: 'https://www.perfecttidyhub.com/download', // 确保路径正确
  },
  openGraph: {
    title: 'Download Perfect Tidy - Free ASMR Organizing Game & Walkthroughs',
    description: 'Download Perfect Tidy, the satisfying ASMR organizing game. Find detailed level guides, system requirements, and FAQs on our website.',
    images: ['/perfect-tidy-social.jpg'], // 请确保图片路径正确
    url: 'https://www.perfecttidyhub.com/download',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Perfect Tidy - Free ASMR Organizing Game & Walkthroughs',
    description: 'Download Perfect Tidy, the satisfying ASMR organizing game. Find detailed level guides, system requirements, and FAQs on our website.',
    images: ['/perfect-tidy-twitter.jpg'],
  },
};
// --- SEO 元数据替换结束 ---


export default function PerfectTidyDownloadPage() {
  return (
    <main>
      {/* 1. 下载组件 (包含标题和下载按钮) */}
      <Download /> 

      <div className="max-w-6xl mx-auto px-4 py-8">
          <PerfectTidyDownloadFAQ />
      </div>
  
      <Levels />
    </main>
  );
}