import { posts, categories } from "@/lib/blog-data";
import { FeaturedPosts } from "@/components/blog/featured-posts";
import { TrendingPosts } from "@/components/blog/trending-posts";
import { CategoryList } from "@/components/blog/category-list";
import { PostGrid } from "@/components/blog/post-grid";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Code, Pencil } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to <span className="text-primary">InsightBlog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Discover in-depth articles on technology, business, design, marketing, and productivity from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Button size="lg" asChild>
              <Link href="/blog">
                Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-card border-y border-border/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Your Content Creator</h2>
            <p className="text-muted-foreground">Passionate about sharing knowledge and building amazing things</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Youtube className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">New YouTuber</h3>
              <p className="text-muted-foreground">Creating engaging content about software development, tech trends, and coding tutorials.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Software Developer</h3>
              <p className="text-muted-foreground">Building innovative solutions and sharing practical coding insights from real-world experience.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Pencil className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold mb-2">Content Creator</h3>
              <p className="text-muted-foreground">Writing in-depth articles and creating educational content to help others learn and grow.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-lg mb-6">
              Hey there! I'm excited to share my journey as a new content creator and software developer. Through this blog and my YouTube channel, I aim to make complex technical concepts accessible and engaging for everyone.
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                <Youtube className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <FeaturedPosts posts={posts} />
      
      {/* Trending Posts */}
      <TrendingPosts posts={posts} />
      
      {/* Categories Section */}
      <section className="py-12 md:py-16" id="categories">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Explore by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/blog/${category.slug}`}
                className="p-6 bg-card rounded-xl border border-border transition-all hover:shadow-md hover:border-primary/20 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{category.name}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>
                <div className="flex items-center text-primary hover:underline">
                  Browse articles <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <Link 
              href="/blog" 
              className="text-primary flex items-center hover:underline"
            >
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <PostGrid posts={posts.slice(0, 6)} />
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  );
}