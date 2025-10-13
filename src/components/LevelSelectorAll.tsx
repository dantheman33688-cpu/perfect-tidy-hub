"use client";
import React, { useState, useEffect } from 'react';
import LevelCard from './LevelCard';
import { useRouter } from "next/navigation";
import allLevels from '@/data/levels.json'; // 导入所有关卡数据

type LevelRange = {
  start: number;
  end: number;
  label: string;
};

// 定义关卡类型
interface Level {
  id: number;
  category: string;
  title: string;
  videoId: string;
  thumb: string;
}

// 定义分类选项
const CATEGORIES = [
  { value: 'ALL', label: 'ALL Levels' },
  { value: 'normal', label: 'Normal Levels' },
  { value: 'Christmas', label: 'Christmas' },
  { value: 'Cosmetics', label: 'Cosmetics' },
  { value: 'Halloween', label: 'Halloween' },
  { value: 'Happy New Year', label: 'Happy New Year' },
  { value: 'Happy Valentine Day', label: 'Happy Valentine Day' },
  { value: "Happy Woman's Day", label: "Happy Woman's Day" },
  { value: 'Kitchen', label: 'Kitchen' },
  { value: 'Mother and Child', label: 'Mother and Child' },
  { value: 'Summer Vibe', label: 'Summer Vibe' },
  { value: 'Thanksgiving', label: 'Thanksgiving' },
  { value: 'Unpacking Memories', label: 'Unpacking Memories' }
];

const generateLevelRanges = (): LevelRange[] => {
  const ranges: LevelRange[] = [];
  const maxLevel = 728;
  
  // 添加ALL选项
  ranges.push({
    start: 1,
    end: maxLevel,
    label: "ALL Levels"
  });
  
  // 根据第二张图片中的分段方式
  const segments = [
    { start: 1, end: 31 },
    { start: 32, end: 71 },
    { start: 72, end: 111 },
    { start: 112, end: 151 },
    { start: 152, end: 191 },
    { start: 192, end: 209 },
  ];
  
  segments.forEach(segment => {
    ranges.push({
      start: segment.start,
      end: segment.end,
      label: `Level ${segment.start}-${segment.end}`
    });
  });
  
  return ranges;
};

export default function LevelSelector() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL'); // 新增：选中的分类
  const [selectedRange, setSelectedRange] = useState<LevelRange>({ start: 1, end: 728, label: 'ALL Levels' });
  const [displayedLevels, setDisplayedLevels] = useState<Level[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showAllRanges, setShowAllRanges] = useState<boolean>(false); // 控制是否显示全部分段
  
  const levelRanges = generateLevelRanges();
  
  // 计算要显示的分段（可折叠）
  const visibleRanges = showAllRanges ? levelRanges : levelRanges.slice(0, 5);
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setLoading(true);
    
    // 从所有关卡数据中筛选当前分类的关卡
    let filtered: Level[] = [];
    if (category === 'ALL') {
      // 对于ALL选项，显示所有关卡
      filtered = allLevels;
    } else {
      filtered = allLevels.filter(level => level.category === category);
    }
    
    setDisplayedLevels(filtered);
    setLoading(false);
  };
  
  const handleRangeSelect = (range: LevelRange) => {
    setSelectedRange(range);
    setLoading(true);
    
    // 从所有关卡数据中筛选当前范围的关卡
    let filtered: Level[] = [];
    if (range.label === "ALL Levels") {
      // 对于ALL选项，显示所有关卡
      filtered = allLevels;
    } else {
      filtered = allLevels.filter(level => level.id >= range.start && level.id <= range.end);
    }
    
    // 如果当前有选中的分类（不是ALL），则进一步筛选
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(level => level.category === selectedCategory);
    }
    
    setDisplayedLevels(filtered);
    setLoading(false);
  };
  
  const handleLevelSelect = (level: number) => {
    router.push(`/levels/${level}`);
  };
  
  // 搜索时如果输入的是准确关卡号，也可直接跳
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm) {
      const levelNum = parseInt(searchTerm);
      if (!isNaN(levelNum) && levelNum >= 1 && levelNum <= 728) {
        router.push(`/levels/${levelNum}`);
        return;
      }
      // 不是纯数字则按标题过滤
      // 这里我们不需要改变范围，而是从当前displayedLevels中过滤
      // 所以不需要调用handleRangeSelect
    }
  };
  
  const toggleRangesVisibility = () => {
    setShowAllRanges(!showAllRanges);
  };
  
  useEffect(() => {
    // 初始化加载所有关卡
    setDisplayedLevels(allLevels);
  }, []);
  
  // 过滤搜索结果
  const filteredLevels = displayedLevels.filter(level => {
    if (!searchTerm) return true;
    return level.id.toString().includes(searchTerm) || 
           level.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <div className="min-h-screen bg-[#f0f4f8] p-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Perfect Tidy Game: Complete Walkthrough, ASMR Solutions & Level Guides
          </h1>
          <p className="text-amber-700 text-lg">
          Master the Art of Organizing! Full Solutions and Strategy Tips for All 200+ Levels, Continuously Updated!
          </p>
        </div>
        
        {/* 搜索框 */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search levels by ID or title..."
              className="w-full p-4 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              type="submit"
              className="absolute inset-y-0 right-0 px-6 bg-blue-600 text-white font-medium rounded-r-xl hover:bg-blue-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>
        
        {/* 分类选择器 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Select Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategorySelect(category.value)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* 分段选择器 - 可折叠 */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">Select Level Range</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {visibleRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => handleRangeSelect(range)}
                className={`px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  selectedRange.start === range.start && selectedRange.end === range.end
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-blue-600 border border-blue-200 hover:bg-blue-50'
                }`}
              >
                {range.label}
              </button>
            ))}
            
            {/* 添加展开/折叠按钮 */}
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
        
        {/* 当前范围信息 */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100 text-center">
          <p className="text-blue-600 font-medium">
            Showing {filteredLevels.length} levels: {selectedCategory === 'ALL' ? 'All Categories' : selectedCategory}
          </p>
        </div>
        
        {/* 关卡网格 */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
          </div>
        ) : filteredLevels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-amber-700 text-xl">No levels found matching your search</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {filteredLevels.map(level => (
              <LevelCard
                key={`${level.id}-${level.category}`} // 使用关卡ID和分类组合作为唯一key
                level={level.id}
                title={level.title}
                thumbnail={level.thumb} // 使用 level.thumb 作为缩略图路径
                category={level.category} // 传递 category 属性
                onSelect={handleLevelSelect}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}