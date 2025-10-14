// src/app/levels/[category]/page.tsx
import { permanentRedirect } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default function CategoryPage() {
  // 使用301永久重定向
  permanentRedirect('/levels');
}