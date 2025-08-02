import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL('http://www.nanasio.com/'),
  openGraph: {
    title: 'nanature',
    description: 'nanasioのサイトです',
    images: [
      {
        url: 'https://www.nanasio.com/ogp.jpg',
        width: 1200,
        height: 630,
      },
    ],
    url: 'https://www.nanasio.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nanasio_vr',
    creator: '@nanasio_vr',
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
              url: "https://www.nanasio.com",
              logo: "https://www.nanasio.com/logo.png"
            }),
          }}
        />
        {/* Google Analytics GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}
          strategy="afterInteractive"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XKSC1FWQKY');
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}