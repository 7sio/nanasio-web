// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LoadingProvider from './loading-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '%s | ななのーと',
    template: 'ななのーと',
  },
  description: 'nanasio',
  metadataBase: new URL('http://www.nanasio.com/'),
  openGraph: {
    title: 'ななのーと',
    description: 'nanasioのポートフォリオサイト',
    siteName: 'ななのーと',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://www.nanasio.com/ogp.webp',
        width: 1200,
        height: 630,
        alt: 'ななのーと',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nanasio',
    creator: '@nanasio',
    title: 'ななのーと',
    description: 'nanasioのポートフォリオサイト',
    images: ['https://www.nanasio.com/ogp.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
