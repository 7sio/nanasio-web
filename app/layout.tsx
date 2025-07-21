import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: '%s | nanature',
    template: 'nanature',
  },
  description: "nanasio",
  metadataBase: new URL('http://www.nanasio.net/'),
  openGraph: {
    title: 'nanature',
    description: 'nanasioのサイトです',
    images: '/og-image.png',
    url: '/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* 共通の構造化データ（JSON-LD） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "nanasio",
              url: "https://www.nanasio.net",
              logo: "https://www.nanasio.net/logo.png"
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
