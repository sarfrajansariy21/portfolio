import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ThreeBackground } from "@/components/layout/ThreeBackground";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | ${personalInfo.role}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `Professional portfolio of ${personalInfo.name}, a ${personalInfo.role} specializing in Next.js, TypeScript, and modern web technologies.`,
  keywords: ["Full Stack Developer", "Web3 Developer", "Next.js", "React", "TypeScript", "Portfolio", personalInfo.name],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-demo.vercel.app",
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: `Professional portfolio of ${personalInfo.name}, a ${personalInfo.role}.`,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: `Professional portfolio of ${personalInfo.name}, a ${personalInfo.role}.`,
    creator: `@${personalInfo.name.toLowerCase().replace(' ', '')}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth`} style={{ colorScheme: 'dark' }}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/30">
        <ThreeBackground />
        <Header />
        <main className="flex-grow">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
