import Link from "next/link";
import { post1 } from "@/components/blogs/p1";
import { post2 } from "@/components/blogs/p2";
import { post3 } from "@/components/blogs/p3";

// 定义博客文章类型
interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  author?: string; // 添加可选作者属性
  date?: string;   // 添加可选日期属性
  readTime?: string; // 添加可选阅读时间属性
}

// 创建博客文章数组并添加缺失的属性
const blogPosts: BlogPost[] = [
  { ...post1, author: "Perfect Tidy Team", date: "2025-10-10", readTime: "5 min read" },
  { ...post2, author: "Community Expert", date: "2025-10-20", readTime: "8 min read" },
  { ...post3, author: "Game Master", date: "2025-10-31", readTime: "6 min read" }
];

export default function BlogListPage() {
  return (
    <>
      <head>
        <title>Perfect Tidy Blog - Latest News, Tips & Updates</title>
        <meta 
          name="description" 
          content="Welcome to the Perfect Tidy Blog. Explore the latest updates, tips, and strategies for the Perfect Tidy puzzle game." 
        />
        <link 
          rel="canonical" 
          href="https://www.perfecttidyhub.com/blogs" 
        />
        <meta 
          property="og:title" 
          content="Perfect Tidy Blog - Latest News, Tips & Updates" 
        />
        <meta 
          property="og:description" 
          content="Welcome to the Perfect Tidy Blog. Explore the latest updates, tips, and strategies for the Perfect Tidy puzzle game." 
        />
        <meta 
          property="og:url" 
          content="https://www.perfecttidyhub.com/blogs" 
        />
        <meta 
          property="og:image" 
          content="https://www.perfecttidyhub.com/assets/perfect-tidy-logo.webp" 
        />
      </head>

      <div className="min-h-screen bg-[#f0f4f8] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-600 mb-8">Perfect Tidy Blog</h1>

          <div className="space-y-8">
            {blogPosts.map(post => (
              <Link 
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{post.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <span className="font-medium mr-4">{post.author || "Unknown Author"}</span>
                  <span className="mr-4">•</span>
                  <span className="mr-4">{post.date || "Unknown Date"}</span>
                  <span>•</span>
                  <span className="ml-4">{post.readTime || "Unknown"}</span>
                </div>
                <p className="text-gray-700 line-clamp-3">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 200)}...
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}