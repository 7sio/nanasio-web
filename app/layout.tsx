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
    default: '%s | nanature',
    template: 'nanature',
  },
  description: 'nanasio',
  metadataBase: new URL('http://www.nanasio.net/'),
  openGraph: {
    title: 'nanature',
    description: 'nanasioのサイトです',
    images: [
      {
        url: 'https://www.nanasio.net/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'nanature',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
