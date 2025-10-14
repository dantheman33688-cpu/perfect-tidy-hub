// 极简版本
import { notFound } from 'next/navigation';
import { post1 } from '@/components/blogs/p1';
import { post2 } from '@/components/blogs/p2';
import { post3 } from '@/components/blogs/p3';
import BlogPostHeader from '@/components/BlogPostHeader';
import BlogPostContent from '@/components/BlogPostContent';
import RelatedArticles from '@/components/RelatedArticles';
import type { Metadata } from 'next';

const blogPosts = [
  { ...post1, date: "2025-10-10", author: "Perfect Tidy Team", readTime: "5 min read" },
  { ...post2, date: "2025-10-20", author: "Community Expert", readTime: "8 min read" },
  { ...post3, date: "2025-10-31", author: "Game Master", readTime: "6 min read" }
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const post = blogPosts.find(p => 
    p.slug.toLowerCase().replace(/\s+/g, '-') === decodedSlug.toLowerCase().replace(/\s+/g, '-')
  );

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#f0f4f8] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <BlogPostHeader 
          title={post.title} 
          author={post.author || "Unknown Author"} 
          date={post.date || "Unknown Date"} 
          readTime={post.readTime || "Unknown"} 
        />
        <BlogPostContent content={post.content} />
        <RelatedArticles postSlug={post.slug} blogPosts={blogPosts} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const decodedSlug = decodeURIComponent(params.slug);
  const post = blogPosts.find(p => p.slug === decodedSlug);

  if (!post) {
    return { title: "Post Not Found", description: "Post not found" };
  }

  return {
    title: post.title,
    description: post.description || post.content.substring(0, 160),
  };
}