import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group p-6 rounded-lg border border-border bg-surface/40 hover:border-accent/50 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        {/* Kategori / Konteks */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-secondary">
          <span>{project.context}</span>
          <span>•</span>
          <span className="text-accent">{project.categories[0]}</span>
        </div>

        {/* Judul Proyek */}
        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Ringkasan */}
        <p className="text-sm text-secondary leading-relaxed">
          {project.summary}
        </p>

        {/* Metrik Kunci (jika ada) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-background/60 p-2 rounded border border-border/60">
                <div className="text-[10px] font-mono text-secondary uppercase">{metric.label}</div>
                <div className="text-sm font-mono text-primary font-medium">{metric.value}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between">
        {/* Teknologi yang digunakan */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-[11px] font-mono bg-background px-2 py-0.5 rounded text-secondary border border-border">
              {tech}
            </span>
          ))}
        </div>

        {/* Tautan Detail Case Study */}
        <Link 
          href={`/projects/${project.slug}`} 
          className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
        >
          view case study →
        </Link>
      </div>
    </article>
  );
}