// app/resume/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Education, research, machine learning & data engineering projects, and technical skills of Christian Putra.',
  alternates: {
    canonical: '/resume',
  },
};

export default function ResumePage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-20 max-w-3xl">
      {/* Header, Contact & PDF Action */}
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border/40 pb-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            resume
          </h1>
          <p className="font-mono text-sm text-primary">
            Christian Putra Dwiyan Setyo Pradana
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-secondary pt-1">
            <span>Indonesia</span>
            <span>·</span>
            <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
              {siteConfig.email}
            </a>
            <span>·</span>
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              github
            </a>
            <span>·</span>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              linkedin
            </a>
          </div>
        </div>

        {/* File PDF diletakkan di public/cv-christian.pdf */}
        <a
          href="/cv-christian.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded bg-primary text-background font-mono text-xs font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors text-center shrink-0"
        >
          download pdf ↓
        </a>
      </header>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-mono text-primary tracking-tight">
          education
        </h2>
        <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-1.5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="font-semibold text-primary">Bina Nusantara University (BINUS)</h3>
            <span className="font-mono text-xs text-secondary">Expected Graduation: [ISI: Tahun Lulus, mis. 2027]</span>
          </div>
          <p className="text-sm text-secondary">
            Bachelor of Computer Science · Indonesia
          </p>
          <p className="text-xs font-mono text-secondary/80">
            GPA: [ISI: IPK, mis. 3.xx / 4.00 — hapus baris ini jika tidak dicantumkan]
          </p>
          <p className="text-xs text-secondary/90 pt-1">
            Relevant Coursework: Algorithms, Data Structures, Machine Learning, Database Systems, and Distributed Data Processing.
          </p>
        </div>
      </section>

      {/* Technical Projects & Research (All 5 Projects) */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-mono text-primary tracking-tight">
          projects &amp; research
        </h2>

        <div className="space-y-3">
          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <Link href="/projects/phishing-detection" className="font-semibold text-primary hover:text-accent transition-colors">
                Phishing URL Detection: Classical vs Deep Learning ↗
              </Link>
              <span className="font-mono text-xs text-secondary">First Author · [ISI: Bulan/Tahun]</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Evaluated Random Forest (99.98% accuracy) and hybrid CNN-LSTM (99.97% accuracy) on 101,218 cleaned URLs from the LegitPhish dataset using SMOTE balancing, character-level tokenization, and feature importance analysis.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-semibold text-primary">DermaScan: Skin Disease Classification</h3>
              <span className="font-mono text-xs text-secondary">Academic Project · [ISI: Bulan/Tahun]</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Built a Convolutional Neural Network (CNN) classification pipeline on ~20,000 medical skin images across 10 condition categories, optimized for TensorFlow Lite deployment.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-semibold text-primary">Olist Dataset Big Data Pipeline</h3>
              <span className="font-mono text-xs text-secondary">Data Engineering · [ISI: Bulan/Tahun]</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Designed and executed a distributed ETL pipeline using Apache Hadoop HDFS and PySpark for large-scale e-commerce data cleaning, feature engineering, and Parquet storage.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-semibold text-primary">EcoRouter: Logistics Cost &amp; Route Optimization</h3>
              <span className="font-mono text-xs text-secondary">Independent Project · [ISI: Bulan/Tahun]</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Integrated YOLO object detection with OSRM distance matrices and Google OR-Tools in a web application to optimize delivery routes and reduce logistics costs.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-surface/40 border border-border space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="font-semibold text-primary">EuroMart Sales &amp; RFM Business Analysis</h3>
              <span className="font-mono text-xs text-secondary">Data Analytics · [ISI: Bulan/Tahun]</span>
            </div>
            <p className="text-sm text-secondary leading-relaxed">
              Analyzed historical retail transaction records to uncover sales and discount trends, implementing RFM customer segmentation using Python, Pandas, and Seaborn.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills (Grouped by Proficiency & Type) */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold font-mono text-primary tracking-tight">
          technical skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1.5">
            <h3 className="font-mono text-xs text-primary uppercase">Strong (Core Stack)</h3>
            <p className="text-sm text-secondary">
              Python, Scikit-Learn, TensorFlow, Apache PySpark, Hadoop HDFS, Pandas, NumPy, SQL, Git &amp; GitHub
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1.5">
            <h3 className="font-mono text-xs text-primary uppercase">Familiar (Working Knowledge)</h3>
            <p className="text-sm text-secondary">
              TypeScript, JavaScript, Java, C, OpenCV, YOLO, Google OR-Tools, Cloudflare Pages
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface/40 border border-border space-y-1.5 md:col-span-2">
            <h3 className="font-mono text-xs text-primary uppercase">Methods &amp; Concepts</h3>
            <p className="text-sm text-secondary">
              Supervised Classification, Hybrid CNN-LSTM Architectures, Class Imbalance Handling (SMOTE), Feature Engineering, Distributed ETL, RFM Customer Segmentation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}