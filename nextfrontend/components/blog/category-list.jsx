import Link from "next/link";
import { Category } from "@/lib/blog-data";

export function CategoryList({ categories, currentCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <Link 
        href="/blog" 
        className={`px-4 py-2 rounded-full text-sm transition-colors ${
          !currentCategory 
            ? "bg-primary text-primary-foreground font-medium" 
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        All
      </Link>
      
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/blog/${category.slug}`}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            currentCategory === category.slug 
              ? "bg-primary text-primary-foreground font-medium" 
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}