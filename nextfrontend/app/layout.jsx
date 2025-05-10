import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "../components/theme-provider";
import { SiteHeader } from "../components/layout/site-header";
import { SiteFooter } from "../components/layout/site-footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'InsightBlog - Premium Content Hub',
  description: 'Delivering insightful content and analysis on the topics that matter most to you.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="relative min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}