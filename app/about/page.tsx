import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background, academic focus at BINUS University, and technical approach of Christian Putra in machine learning and data engineering.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-12 max-w-2xl">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
          about
        </h1>
      </div>

      <section className="space-y-4 text-secondary leading-relaxed">
        <p>
          I am pursuing a Bachelor&apos;s degree in Computer Science at Bina Nusantara University (BINUS), focusing on how raw data is transformed into reliable, intelligent software.
        </p>
        <p>
          Rather than treating model training in isolation, I enjoy working across the entire data lifecycle: cleaning noisy datasets, engineering meaningful features, building distributed processing pipelines, and comparing classical algorithms against deep learning architectures.
        </p>
        <p>
          Alongside my coursework, I work on academic research and independent engineering projects to test theoretical methods against practical constraints. For detailed coursework, skills, and project records, see the resume page.
        </p>
      </section>

      <section className="space-y-4 pt-8 border-t border-border/40">
        <h2 className="text-xl font-semibold font-mono tracking-tight text-primary">
          connect
        </h2>
        <div className="flex items-center gap-6 font-mono text-xs text-accent">
          <a href={`mailto:${siteConfig.email}`} className="hover:underline py-2">email</a>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline py-2">github</a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline py-2">linkedin</a>
        </div>
      </section>
    </div>
  );
}