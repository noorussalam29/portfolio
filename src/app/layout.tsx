import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../context/ThemeContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Premium SEO Metadata
export const metadata: Metadata = {
  title: "Mohamed Noorus Salam | Frontend Developer Portfolio",
  description: "Portfolio of Mohamed Noorus Salam, a Frontend Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS. Crafting responsive and user-focused web solutions.",
  keywords: ["Mohamed Noorus Salam", "Frontend Developer", "React Developer", "Next.js Developer", "TypeScript", "Tailwind CSS", "Portfolio", "BCA Graduate"],
  authors: [{ name: "Mohamed Noorus Salam", url: "https://github.com/noorussalam29" }],
  creator: "Mohamed Noorus Salam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noorussalam.dev",
    title: "Mohamed Noorus Salam | Frontend Developer Portfolio",
    description: "Portfolio of Mohamed Noorus Salam, showcasing responsive web applications.",
    siteName: "Mohamed Noorus Salam Portfolio",
    images: [
      {
        url: "/project-corporate.png",
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
    images: ["/project-corporate.png"],
    creator: "@noorussalam",
  },
  metadataBase: new URL("https://noorussalam.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Noorus Salam",
    "jobTitle": "Frontend Developer",
    "url": "https://noorussalam.dev",
    "sameAs": [
      "https://github.com/noorussalam29"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "GitHub"
    ],
    "description": "Frontend Developer specializing in React.js, Next.js, TypeScript, and Tailwind CSS."
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
