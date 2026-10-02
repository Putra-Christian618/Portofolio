import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import TopologicalMesh from '@/components/TopologMesh';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Christian Putra - Portfolio",
  description: "Computer Science student interested in building data-driven and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        Menambahkan kelas warna latar belakang utama di body.
        Pastikan ini sesuai dengan palet warna "near-black / charcoal" Anda.
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111] text-gray-200 min-h-screen relative flex flex-col`}
      >
        {/* Render animasi Topological Mesh di latar belakang */}
        <TopologicalMesh />
        
        {/* Navbar utama */}
        <Navbar />

        {/* Konten halaman akan di-render di dalam tag main ini */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}