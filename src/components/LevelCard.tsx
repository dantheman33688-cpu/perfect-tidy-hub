import React from 'react';
import Image from 'next/image';

type LevelCardProps = {
  level: number;
  title: string;
  thumbnail: string;
  category: string; // 添加这个属性
  onSelect: (levelId: number, category: string) => void; // 修改函数签名
};

export default function LevelCard({ level, title, thumbnail, category, onSelect }: LevelCardProps) {
  // 修改点击处理函数，传递两个参数
  const handleClick = () => {
    onSelect(level, category);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
      onClick={handleClick} // 使用新的点击处理函数
    >
      <Image 
        src={thumbnail}
        alt={`Perfect Tidy Level ${level} Game Walkthrough and Solution`} 
        className="rounded-lg mb-3 w-full h-32 object-cover" 
        width={400}
        height={128}
        onError={(e) => {
          // 图片加载失败时的处理
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          // 可以添加一个占位符
          const placeholder = document.createElement('div');
          placeholder.className = 'rounded-lg mb-3 w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center';
          placeholder.innerHTML = `<span class="text-white font-bold">Level ${level}</span>`;
          target.parentNode?.insertBefore(placeholder, target.nextSibling);
        }}
      />
      <p className="font-bold text-blue-600 text-center">Level {level}</p>
      <p className="text-amber-700 text-sm text-center mt-1">{title}</p>
      {/* 可选：显示分类标签 */}
      <div className="mt-2 text-center">
        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
          {category === 'normal' ? 'Normal' : category}
        </span>
      </div>
    </div>
  );
}