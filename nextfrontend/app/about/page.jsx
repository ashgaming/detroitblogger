import Image from "next/image";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";

export const metadata = {
  title: "About Us | InsightBlog",
  description: "Learn more about InsightBlog, our mission, and our team of expert writers."
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-10 md:pt-40 md:pb-12 bg-muted">
        <div className="container max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about delivering valuable insights through high-quality content.
          </p>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At DetroitBlogger.Blog, we're dedicated to providing thoughtful, in-depth content that helps our readers stay informed, grow professionally, and find practical solutions to everyday challenges.
              </p>
              <p className="text-muted-foreground">
                We believe that quality content has the power to educate, inspire, and transform. That's why we work with industry experts to deliver articles that go beyond surface-level information to provide genuine insight and value.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-12">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-muted-foreground mb-4">
                We focus on five key areas that impact professional and personal growth: technology, business, design, marketing, and productivity. Our content is carefully researched, thoroughly vetted, and presented in an accessible, engaging format.
              </p>
              <p className="text-muted-foreground">
                Rather than chasing trends or producing shallow content, we take the time to explore topics deeply, providing context, analysis, and practical takeaways that you can apply right away.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Content creation process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Quality</h3>
                <p className="text-muted-foreground">We never compromise on the quality of our content, ensuring it's accurate, well-researched, and valuable.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="17" cy="17" r="3"></circle><path d="M10.7 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10.3"></path><path d="M8 10h8"></path><path d="M8 15h2"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">We maintain editorial independence and transparency in all our content and business practices.</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 14.14 14.14"></path></svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Relevance</h3>
                <p className="text-muted-foreground">We focus on topics that matter to our readers, providing practical insights they can apply immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*       
      <section className="py-12 md:py-16 bg-muted">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Expert Writers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sarah Johnson"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Sarah Johnson</h3>
              <p className="text-primary mb-3">Technology Editor</p>
              <p className="text-muted-foreground text-sm">
                Sarah is a technology journalist with over 10 years of experience covering emerging tech trends and digital transformation.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Michael Chen"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Michael Chen</h3>
              <p className="text-primary mb-3">Business Writer</p>
              <p className="text-muted-foreground text-sm">
                Michael is a business analyst and consultant specializing in startup growth strategies and market analysis.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col items-center text-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image 
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">Emily Rodriguez</h3>
              <p className="text-primary mb-3">Design Specialist</p>
              <p className="text-muted-foreground text-sm">
                Emily is a UX designer and design thinking advocate with a passion for creating intuitive digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* <NewsletterSignup /> */}
    </div>
  );
}