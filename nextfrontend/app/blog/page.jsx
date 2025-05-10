import { posts, categories } from "@/lib/blog-data";
import { CategoryList } from "@/components/blog/category-list";
import { PostGrid } from "@/components/blog/post-grid";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";

export const metadata = {
  title: "Blog | InsightBlog",
  description: "Explore our collection of articles on technology, business, design, marketing, and productivity."
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-muted">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            In-depth articles, guides, and insights to help you stay informed and inspired.
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <CategoryList categories={categories} />
          
          <PostGrid posts={posts} />
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
}