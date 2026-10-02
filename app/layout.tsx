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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111111] text-gray-200 min-h-screen relative`}
      >
        {/* 
          Animasi background dibiarkan di luar wrapper utama 
          agar tetap merender sepenuh layar 
        */}
        <TopologicalMesh />
        
        {/* 
          WRAPPER KONTEN: 
          max-w-4xl membatasi lebar maksimal (sekitar 896px).
          mx-auto menengahkan seluruh wrapper secara horizontal.
          px-6 memberikan jarak aman di sisi kiri-kanan untuk layar HP.
        */}
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