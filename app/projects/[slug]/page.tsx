import type { Metadata } from 'next';
import Image from 'next/image';
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      type: 'article',
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const currentIndex = projects.findIndex((p) => p.slug === resolvedParams.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const hasSections = Boolean(project.sections && project.sections.length > 0);
  const primaryVisual = project.images?.[0];

  return (
    <article className="max-w-[680px] space-y-10 animate-in fade-in duration-700 pb-20">
      <div>
        <Link
          href="/projects"
          className="text-xs font-mono text-secondary hover:text-accent transition-colors inline-block py-1"
        >
          ← back to all projects
        </Link>
      </div>

      <header className="space-y-6 border-b border-border/40 pb-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary lowercase">
            <span>{project.context}</span>
            <span>·</span>
            <span>{project.categories.join(' · ')}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-primary leading-tight">
            {project.title}
          </h1>

          <p className="text-base text-secondary leading-relaxed">
            {project.description || project.summary}
          </p>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="px-3.5 py-3 rounded-lg bg-surface/40 border border-border"
              >
                <div className="text-[11px] font-mono text-secondary lowercase">
                  {metric.label}
                </div>
                <div className="text-base md:text-lg font-mono text-primary font-medium mt-0.5">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-1.5 text-xs font-mono text-secondary">
          {project.role && project.role.length > 0 && (
            <div>
              <span className="text-primary">role:</span>{' '}
              <span className="lowercase">{project.role.join(', ')}</span>
            </div>
          )}
          <div>
            <span className="text-primary">stack:</span>{' '}
            <span>{project.technologies.join(' · ')}</span>
          </div>
        </div>
      </header>

      {primaryVisual ? (
        <figure className="space-y-2">
          <div className="overflow-hidden rounded-lg border border-border bg-surface/40">
            <Image
              src={primaryVisual}
              alt={`Visual artifact for ${project.title}`}
              className="w-full h-auto block"
            />
          </div>
          <figcaption className="text-xs font-mono text-secondary">
            figure 1 — architectural or experimental artifact
          </figcaption>
        </figure>
      ) : (
        hasSections && (
          <div className="rounded-lg border border-dashed border-border bg-surface/20 px-5 py-8 text-center space-y-1">
            <p className="text-xs font-mono text-secondary">
              [ISI: Visual Case Study — mis. Confusion Matrix / Feature Importance / Diagram Arsitektur]
            </p>
            <p className="text-[11px] font-mono text-secondary/70">
              simpan gambar di public/images/ lalu tambahkan path-nya pada properti images di lib/projectsData.ts
            </p>
          </div>
        )
      )}

      {hasSections ? (
        <section className="space-y-8">
          {project.sections!.map((section, idx) => (
            <div key={idx} className="space-y-2.5">
              <h2 className="text-xs font-mono uppercase tracking-wider text-secondary">
                {section.title}
              </h2>
              <p className="text-sm md:text-base text-primary/90 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      ) : (
        <div className="p-5 rounded-lg bg-surface/20 border border-border text-sm text-secondary leading-relaxed">
          <span className="font-mono text-primary">note: </span>
          Detailed architectural breakdown, experiment logs, and visual evidence for this project are currently being prepared and will be added soon.
        </div>
      )}

      <nav
        aria-label="Project pagination"
        className="pt-8 border-t border-border/40 flex items-center justify-between gap-4"
      >
        <Link
          href="/projects"
          className="text-xs font-mono text-secondary hover:text-accent transition-colors py-2"
        >
          ← all projects
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="text-right group py-2 focus-visible:outline-none"
        >
          <span className="block text-[11px] font-mono text-secondary">
            next project →
          </span>
          <span className="text-xs font-mono text-primary group-hover:text-accent group-focus-visible:text-accent transition-colors">
            {nextProject.title}
          </span>
        </Link>
      </nav>
    </article>
  );
}