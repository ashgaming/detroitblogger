"use client";
import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { CheckCircle2, Mail } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit this to your backend
    if (email) {
      setSubmitted(true);
    }
  };
  
  return (
    <section className="bg-primary/5 border-y border-primary/10 py-12">
      <div className="container max-w-4xl text-center">
        <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
        
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Stay Updated with Our Newsletter
        </h2>
        
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest insights, trends, and thought leadership delivered straight to your inbox. We'll never spam you or share your email.
        </p>
        
        {submitted ? (
          <div className="max-w-md mx-auto p-4 bg-card rounded-lg border border-border">
            <CheckCircle2 className="mx-auto h-10 w-10 text-green-500 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Thank You for Subscribing!</h3>
            <p className="text-muted-foreground">
              You're now part of our community. Watch your inbox for valuable insights and updates.
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-3"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-background"
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}