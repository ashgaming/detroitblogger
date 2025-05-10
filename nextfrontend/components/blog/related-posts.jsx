import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";


export function RelatedPosts({ currentPostId, categoryId, posts }) {
  const relatedPosts = posts
    .filter((post) => post.id !== currentPostId && post.category.id === categoryId)
    .slice(0, 3);
    
  if (relatedPosts.length === 0) return null;
  
  return (
    <div className="mt-12">
      <h3 className="text-xl font-bold mb-6">Related Articles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <div key={post.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.category.slug}/${post.slug}`}>
              <div className="relative h-40">
                <Image 
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <span className="text-primary font-medium">{post.category.name}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h4 className="font-bold mb-2 line-clamp-2">{post.title}</h4>
                <p className="text-xs text-muted-foreground mt-2">
                  {formatDate(post.publishedAt)}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}