import { posts, categories } from "@/lib/blog-data";
import { CategoryList } from "@/components/blog/category-list";
import { PostGrid } from "@/components/blog/post-grid";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) return {};
  
  return {
    title: `${category.name} | InsightBlog`,
    description: category.description
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug
  }));
}

export default function CategoryPage({ params }) {
  const category = categories.find(c => c.slug === params.category);
  
  if (!category) {
    notFound();
  }
  
  const categoryPosts = posts.filter(post => post.category.slug === params.category);
  
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-muted">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {category.name}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <CategoryList categories={categories} currentCategory={params.category} />
          
          {categoryPosts.length > 0 ? (
            <PostGrid posts={categoryPosts} />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                We haven't published any articles in this category yet. Please check back later.
              </p>
            </div>
          )}
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
}