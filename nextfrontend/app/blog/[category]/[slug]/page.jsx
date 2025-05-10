import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { posts, categories } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import { AuthorCard } from "@/components/blog/author-card";
import { RelatedPosts } from "@/components/blog/related-posts";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";



export function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug && p.category.slug === params.category);
  
  if (!post) return {};
  
  return {
    title: `${post.title} | InsightBlog`,
    description: post.excerpt,
    openGraph: {
      images: [post.featuredImage]
    }
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    category: post.category.slug,
    slug: post.slug
  }));
}

export default function PostPage({ params }) {
  const post = posts.find(p => p.slug === params.slug && p.category.slug === params.category);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="min-h-screen">
      <div className="pt-28 md:pt-32 pb-20 bg-muted">
        <div className="container max-w-5xl">
          <Link href={`/blog/${post.category.slug}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {post.category.name}
          </Link>
          
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-sm mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category.name}</span>
              <span className="text-muted-foreground">{formatDate(post.publishedAt)}</span>
              <span className="text-muted-foreground">{post.readTime} min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                <Image 
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-left">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image 
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="py-12">
        <div className="container max-w-3xl">
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          
          <div className="mt-12 pt-12 border-t">
            <AuthorCard author={post.author} />
          </div>
          
          <RelatedPosts 
            currentPostId={post.id} 
            categoryId={post.category.id} 
            posts={posts} 
          />
        </div>
      </div>
      
      <NewsletterSignup />
    </div>
  );
}