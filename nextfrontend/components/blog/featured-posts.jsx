"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Post } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";



export function FeaturedPosts({ posts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredPosts = posts.filter(post => post.isFeatured).slice(0, 3);

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
          <Link 
            href="/blog" 
            className="text-primary flex items-center hover:underline"
          >
            View all
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 h-[400px] md:h-[500px] relative rounded-xl overflow-hidden">
            {featuredPosts.map((post, index) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.category.slug}/${post.slug}`}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image 
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center text-xs mb-2">
                      <span className="bg-primary px-2 py-1 rounded-full">{post.category.name}</span>
                      <span className="mx-2">•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-sm md:text-base text-white/90 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
            
            <div className="absolute bottom-4 right-4 z-20 flex space-x-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-primary" : "w-2 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View featured post ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`flex flex-col h-[150px] border rounded-xl overflow-hidden transition-colors ${
                  index === activeIndex 
                    ? "border-primary bg-primary/5" 
                    : "border-border bg-card hover:bg-primary/5"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <Link 
                  href={`/blog/${post.category.slug}/${post.slug}`}
                  className="flex flex-col h-full p-4"
                >
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <span className="text-primary font-medium">{post.category.name}</span>
                    <span className="mx-2">•</span>
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}