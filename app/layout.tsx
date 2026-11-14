import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import TopologicalMesh from '@/components/TopologMesh';
import { siteConfig } from '@/lib/siteConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.author} — Computer Science Portfolio`,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.metaDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: `${siteConfig.author} — Portfolio`,
    title: `${siteConfig.author} — Computer Science Portfolio`,
    description: siteConfig.metaDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${siteConfig.author} — Computer Science Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.author} — Computer Science Portfolio`,
    description: siteConfig.metaDescription,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-primary min-h-screen relative`}
      >
        <TopologicalMesh />

        <div className="max-w-4xl mx-auto w-full px-6 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pb-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}