import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";


export function PostGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {posts.map((post) => (
        <div key={post.id} className="bg-card rounded-xl overflow-hidden border border-border transition-all hover:shadow-md hover:border-primary/20">
          <Link href={`/blog/${post.category.slug}/${post.slug}`}>
            <div className="relative h-48">
              <Image 
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center text-xs text-muted-foreground mb-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{post.category.name}</span>
                <span className="mx-2">•</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime} min read</span>
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image 
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}