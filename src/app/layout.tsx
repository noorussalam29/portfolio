import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Noorus Salam | Frontend Developer Portfolio",
  description: "Portfolio of Mohamed Noorus Salam, a Frontend Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS. Crafting responsive and user-focused web solutions.",
  keywords: ["Mohamed Noorus Salam", "Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Tailwind CSS", "Portfolio", "BCA Graduate"],
  authors: [{ name: "Mohamed Noorus Salam", url: "https://github.com/noorussalam29" }],
  creator: "Mohamed Noorus Salam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noorussalam-portfolio.vercel.app", // FIXED: Points to active production deployment
    title: "Mohamed Noorus Salam | Frontend Developer Portfolio",
    description: "Portfolio of Mohamed Noorus Salam, showcasing responsive web applications.",
    siteName: "Mohamed Noorus Salam Portfolio",
    images: [
      {
        url: "/project-corp.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Noorus Salam Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Noorus Salam | Frontend Developer Portfolio",
    description: "Portfolio of Mohamed Noorus Salam, showcasing responsive web applications.",
    images: ["/project-corp.png"],
    creator: "@noorussalam",
  },
  metadataBase: new URL("https://noorussalam-portfolio.vercel.app"), // FIXED: Absolute routing base fallback resolved
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Noorus Salam",
    jobTitle: "Frontend Developer",
    url: "https://noorussalam-portfolio.vercel.app", // FIXED: Match primary canonical mapping
    sameAs: [
      "https://github.com/noorussalam29",
      "https://www.linkedin.com/in/mohamed-noorus-salam-0186632b0",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub",
      "Cloudflare",
      "Vercel",
    ],
    description: "Frontend Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS.",
  };

  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-950 selection:bg-sky-50 selection:text-sky-900">
        {children}
      </body>
    </html>
  );
}