import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

export function TrendingPosts({ posts }) {
  const trendingPosts = posts.filter(post => post.isTrending).slice(0, 4);

  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Trending This Week</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingPosts.map((post) => (
            <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <Link href={`/blog/${post.category.slug}/${post.slug}`}>
                <div className="relative h-48">
                  <Image 
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span className="text-primary font-medium">{post.category.name}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-3">
                      <Image 
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div className="text-xs">
                      <p className="font-medium">{post.author.name}</p>
                      <p className="text-muted-foreground">{formatDate(post.publishedAt)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}