// app/projects/[slug]/page.tsx
import { projects } from '@/lib/projectsData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12 animate-in fade-in duration-700 pb-20">
      {/* Breadcrumb / Back Link */}
      <div>
        <Link href="/projects" className="text-xs font-mono text-secondary hover:text-accent transition-colors">
          ← back to all projects
        </Link>
      </div>

      {/* Project Header */}
      <header className="space-y-4 border-b border-border/40 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
          <span>{project.context}</span>
          <span>•</span>
          <span className="text-accent">{project.categories.join(' · ')}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
          {project.title}
        </h1>

        <p className="text-lg text-secondary leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Role & Tech Stack Tags */}
        <div className="pt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="text-xs font-mono bg-surface px-2.5 py-1 rounded text-primary border border-border">
              {tech}
            </span>
          ))}
        </div>
      </header>

      {/* Metrics Bar (jika tersedia) */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-surface/40 border border-border">
              <div className="text-xs font-mono text-secondary uppercase">{metric.label}</div>
              <div className="text-lg md:text-xl font-mono text-primary font-medium mt-1">{metric.value}</div>
            </div>
          ))}
        </section>
      )}

      {/* Main Sections / Case Study Content */}
      {project.sections && project.sections.length > 0 && (
        <section className="space-y-8 max-w-3xl">
          {project.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl font-semibold font-mono text-primary tracking-tight">
                {section.title.toLowerCase()}
              </h2>
              <p className="text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Catatan khusus untuk proyek lain yang belum memiliki deep case-study */}
      {project.slug !== 'phishing-detection' && (
        <div className="p-6 rounded-lg bg-surface/20 border border-border text-sm text-secondary">
          <span className="font-mono text-accent">Note: </span>
          Detailed architectural breakdown, experiment logs, and visual evidence for this project are currently being prepared and will be added soon.
        </div>
      )}
    </article>
  );
}