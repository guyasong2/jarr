import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// app/layout.tsx
export const metadata: Metadata = {
  title: "Jarr – AI Study App for Past Papers & Exam Prep",
  description:
    "Jarr is an AI-powered study platform that helps students in Africa prepare for exams using past papers, summaries, flashcards and quizzes.",
  metadataBase: new URL("https://jarr-cm.vercel.app/"), // update with real domain
  openGraph: {
    title: "Jarr – AI Study App for Past Papers & Exam Prep",
    description:
      "Use Jarr to find past exam papers, get AI-generated notes, flashcards and quizzes, and study smarter.",
    url: "https://jarr-cm.vercel.app/",
    siteName: "Jarr",
    images: [
      {
        url: "/jarr-logo.png", // create a nice image in /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarr – AI Study App for Past Papers & Exam Prep",
    description: "AI + past papers to help students study smarter in Africa.",
    images: ["/jarr-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Jarr",
              url: "https://jarr-cm.vercel.app/",
              logo: "https://jarr-cm.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJarr-Transparent-Logo.2bece992.webp&w=640&q=75",
              sameAs: [
                "https://www.linkedin.com/company/jarr-cm/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BKfIZilhJTKKA2fmrONid2Q%3D%3D",
                "https://x.com/Jarr_cm",
                "https://www.instagram.com/jarr.cm0/",
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
