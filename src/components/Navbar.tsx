"use client";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  // 检查当前路径是否与链接匹配
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 品牌标识 */}
        <div className="flex items-center space-x-3">
          <Image 
            src="/perfect-tidy-logo.webp" 
            alt="Perfect Tidy Logo" 
            className="h-8 w-8" 
            width={32}
            height={32}
          />
          <span className="font-bold text-xl text-gray-800">Perfect Tidy</span>
        </div>
        
        {/* 导航链接 */}
        <div className="space-x-8 hidden md:flex">
          <Link 
            href="/" 
            className={`relative font-medium transition-colors duration-200 ${
              isActive('/') 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform translate-y-2"></span>
            )}
          </Link>
          
          <Link 
            href="/levels" 
            className={`relative font-medium transition-colors duration-200 ${
              isActive('/levels') 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Levels
            {isActive('/levels') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform translate-y-2"></span>
            )}
          </Link>
          
          <Link 
            href="/playonline" 
            className={`relative font-medium transition-colors duration-200 ${
              isActive('/playonline') 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Play Online
            {isActive('/playonline') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform translate-y-2"></span>
            )}
          </Link>
          
          <Link 
            href="/download" 
            className={`relative font-medium transition-colors duration-200 ${
              isActive('/download') 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Download
            {isActive('/download') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform translate-y-2"></span>
            )}
          </Link>
          
          <Link 
            href="/blogs" 
            className={`relative font-medium transition-colors duration-200 ${
              isActive('/blogs') 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-500'
            }`}
          >
            Blogs
            {isActive('/blogs') && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform translate-y-2"></span>
            )}
          </Link>
        </div>
        
        {/* 移动端菜单按钮（可选） */}
        <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}