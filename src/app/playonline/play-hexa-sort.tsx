// src/app/playonline/play-hexa-sort.tsx

import { Metadata } from 'next';
import HexaSortPageClient from './page';
import Ads from '@/components/Ads';  // 确保广告组件路径正确


export const metadata: Metadata = {
  title: 'Play Perfect Tidy Online - Free ASMR Organizing & Puzzle Game',
  description: 'Escape into ultimate chill & relaxation with Perfect Tidy. Play the satisfying ASMR puzzle game online for free, featuring cleaning, sorting, and organizing mini-games to ease your stress and calm your mind.',
  keywords: 'Perfect Tidy, ASMR game, organizing game, sorting puzzle, cleaning game, free online game, anti-stress game',
  openGraph: {
    title: 'Play Perfect Tidy Online - Free ASMR Organizing Game',
    description: 'Play the highly-addictive Perfect Tidy online for free. Enjoy hundreds of satisfying levels of cleaning, sorting, and tidying up.',
    images: ['/perfect-tidy-logo.webp'], // 请确保您的图片路径正确
    url: 'https://www.perfecttidyhub.com/playonline/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Play Perfect Tidy Online - Free ASMR Organizing Game',
    description: 'Play the highly-addictive Perfect Tidy online for free. Enjoy hundreds of satisfying levels of cleaning, sorting, and tidying up.',
    images: ['/perfect-tidy-logo.webp'], // 请确保您的图片路径正确
  },
};

export default function HexaSortPage() {
  {/* 顶部广告 */}
  <Ads />

  return <HexaSortPageClient />;

  
}
