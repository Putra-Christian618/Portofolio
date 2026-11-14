import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isComplete = Boolean(project.sections && project.sections.length > 0);
  const displayMetrics = project.metrics ? project.metrics.slice(0, 2) : [];

  return (
    <article
      className={`group p-6 rounded-lg border border-border bg-surface/40 transition-colors duration-200 flex flex-col justify-between ${
        isComplete ? 'hover:border-accent/50' : ''
      }`}
    >
      <div className="space-y-3.5">
        {/* Konteks & Kategori (netral, lowercase) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary lowercase">
          <span>{project.context}</span>
          <span>·</span>
          <span>{project.categories[0]}</span>
        </div>

        {/* Judul Proyek */}
        <h3
          className={`text-lg font-semibold text-primary leading-snug transition-colors ${
            isComplete ? 'group-hover:text-accent' : ''
          }`}
        >
          {isComplete ? (
            <Link
              href={`/projects/${project.slug}`}
              className="focus-visible:outline-none focus-visible:underline"
            >
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        {/* Satu baris deskripsi */}
        <p
          title={project.summary}
          className="text-sm text-secondary line-clamp-1"
        >
          {project.summary}
        </p>

        {/* Maksimal 2 metrik */}
        {displayMetrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-1">
            {displayMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-background/60 px-3 py-2 rounded border border-border/60"
              >
                <div className="text-[10px] font-mono text-secondary lowercase">
                  {metric.label}
                </div>
                <div className="text-sm font-mono text-primary font-medium">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Kartu: Tech stack teks kecil + aksi / status */}
      <div className="pt-4 mt-5 border-t border-border/40 flex items-center justify-between gap-4">
        <p className="text-[11px] font-mono text-secondary truncate">
          {project.technologies.join(' · ')}
        </p>

        {isComplete ? (
          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-mono text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded shrink-0"
          >
            view case study →
          </Link>
        ) : (
          <span className="text-[11px] font-mono text-secondary bg-background border border-border px-2 py-0.5 rounded shrink-0">
            in progress
          </span>
        )}
      </div>
    </article>
  );
}