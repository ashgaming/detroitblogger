import Image from "next/image";
import { Author } from "@/lib/blog-data";

export function AuthorCard({ author }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-6 bg-card rounded-xl border border-border">
      <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
        <Image 
          src={author.avatar}
          alt={author.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold mb-2">About the Author</h3>
        <h4 className="font-medium mb-2">{author.name}</h4>
        <p className="text-muted-foreground">{author.bio}</p>
      </div>
    </div>
  );
}