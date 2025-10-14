"use client";
import React, { useState, useEffect } from 'react';
import LevelCard from './LevelCard';
import levelsData from '@/data/levels.json';

type LevelRange = {
  start: number;
  end: number;
  label: string;
};

interface Level {
  id: number;
  category: string;
  title: string;
  videoId: string;
  thumb: string;
}

// 定义固定的分类顺序（与图片一致）
const FIXED_CATEGORY_ORDER = [
  'Normal Levels',
  'Christmas',
  'Cosmetics',
  'Halloween',
  'Happy New Year',
  'Happy Valentine Day',
  'Happy Woman\'s Day',
  'Kitchen',
  'Mother and Child',
  'Summer Vibe',
  'Thanksgiving',
  'Unpacking Memories'
];

// 添加获取关卡URL的函数
const getLevelUrl = (category: string, levelId: number): string => {
  // 定义分类到简洁URL的映射
  const categorySlugMap: Record<string, string> = {
    'normal': 'normal',
    'Normal Levels': 'normal',
    'Christmas': 'christmas',
    'Cosmetics': 'cosmetics',
    'Halloween': 'halloween',
    'Happy New Year': 'happy-new-year',
    'Happy Valentine Day': 'happy-valentine-day',
    'Happy Woman\'s Day': 'happy-womans-day',
    'Kitchen': 'kitchen',
    'Mother and Child': 'mother-and-child',
    'Summer Vibe': 'summer-vibe',
    'Thanksgiving': 'thanksgiving',
    'Unpacking Memories': 'unpacking-memories'
  };
  
  // 获取分类的简洁形式
  const categorySlug = categorySlugMap[category] || category.toLowerCase().replace(/\s+/g, '-');
  
  // 对于 normal 分类使用简洁 URL，其他使用详细 URL
  return categorySlug === 'normal' 
    ? `/levels/${levelId}`
    : `/levels/${categorySlug}/${levelId}`;
};

const getCategories = (): string[] => {
  // 从数据中提取所有分类
  const dataCategories = Array.from(new Set(levelsData.map(level => {
    // 将数据中的分类名称映射到显示名称
    if (level.category === 'normal') return 'Normal Levels';
    return level.category;
  })));
  
  // 按照固定顺序排序，确保Normal Levels在最前面
  return FIXED_CATEGORY_ORDER.filter(category => 
    dataCategories.includes(category)
  );
};

const generateLevelRanges = (): LevelRange[] => {
  const ranges: LevelRange[] = [];
  const maxLevel: number = 300;
  
  if (typeof maxLevel !== 'number' || maxLevel <= 0) {
    return ranges;
  }
  
  for (let start = 1; start <= maxLevel; start += 30) {
    const end = Math.min(start + 29, maxLevel);
    ranges.push({
      start,
      end,
      label: `Level ${start}-${end}`
    });
  }
  
  return ranges;
};

export default function LevelSelector() {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>('Normal Levels');
  const [selectedRange, setSelectedRange] = useState<LevelRange>({ 
    start: 1, 
    end: 30, 
    label: 'Level 1-30' 
  });
  const [levelsInRange, setLevelsInRange] = useState<Level[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showAllRanges, setShowAllRanges] = useState<boolean>(false);
  
  const levelRanges = generateLevelRanges();
  const visibleRanges = showAllRanges ? levelRanges : levelRanges.slice(0, 5);
  
  // 根据搜索词过滤关卡，并按关卡ID从小到大排序
  const filteredLevels = levelsInRange
    .filter(level => {
      const categoryMatch = selectedCategory === 'Normal Levels' 
        ? level.category === 'normal'
        : level.category === selectedCategory;
      
      const searchMatch = level.id.toString().includes(searchTerm) || 
        level.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return categoryMatch && searchMatch;
    })
    .sort((a, b) => a.id - b.id); // 按关卡ID从小到大排序
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedRange({ start: 1, end: 30, label: 'Level 1-30' });
    setShowAllRanges(false);
    
    // 立即更新显示的数据，并按关卡ID排序
    const filtered = levelsData
      .filter(level => {
        if (category === 'Normal Levels') {
          return level.category === 'normal' && level.id >= 1 && level.id <= 30;
        }
        return level.category === category && level.id >= 1 && level.id <= 30;
      })
      .sort((a, b) => a.id - b.id); // 按关卡ID从小到大排序
    
    setLevelsInRange(filtered);
  };
  
  const handleRangeSelect = (range: LevelRange) => {
    setSelectedRange(range);
    setLoading(true);
    
    // 筛选数据并按关卡ID排序
    const filtered = levelsData
      .filter(level => {
        if (selectedCategory === 'Normal Levels') {
          return level.category === 'normal' && level.id >= range.start && level.id <= range.end;
        }
        return level.category === selectedCategory && level.id >= range.start && level.id <= range.end;
      })
      .sort((a, b) => a.id - b.id); // 按关卡ID从小到大排序
    
    setLevelsInRange(filtered);
    setLoading(false);
  };
  
  const handleLevelSelect = (levelId: number, category: string) => {
    const url = getLevelUrl(category, levelId);
    window.open(url, '_blank');
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const toggleRangesVisibility = () => {
    setShowAllRanges(!showAllRanges);
  };
  
  useEffect(() => {
    // 初始化加载数据，并按关卡ID排序
    const initialData = levelsData
      .filter(level => 
        level.category === 'normal' && level.id >= 1 && level.id <= 30
      )
      .sort((a, b) => a.id - b.id); // 按关卡ID从小到大排序
    
    setLevelsInRange(initialData);
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Perfect Tidy Level Guides & Walkthroughs
          </h2>
          <p className="text-xl text-amber-700">
            Find the definitive solution, tips, and strategies for every challenging level.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search levels by ID or title..."
              className="w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Select Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">Select Level Range</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {visibleRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedRange.start === range.start
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {range.label}
              </button>
            ))}
            
            {levelRanges.length > 5 && (
              <button
                onClick={toggleRangesVisibility}
                className="px-5 py-3 rounded-xl text-base font-medium bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 transition-all duration-200 flex items-center"
              >
                {showAllRanges ? (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7-7" />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Show More ({levelRanges.length - 5})
                  </>
                )}
              </button>
            )}
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        ) : (
          <>
            {filteredLevels.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-lg text-gray-600">
                  {searchTerm ? 'No levels found matching your search.' : `No ${selectedCategory} levels found in this range.`}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-center">
                  <p className="text-lg text-blue-600">
                    Showing {filteredLevels.length} {selectedCategory} levels (sorted by level ID)
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {filteredLevels.map(level => (
                    <LevelCard
                      key={`${level.category}-${level.id}`}
                      level={level.id}
                      title={level.title}
                      thumbnail={level.thumb}
                      category={level.category}
                      onSelect={(levelId) => handleLevelSelect(levelId, level.category)}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}