// app/projects/page.tsx
import { projects } from '@/lib/projectsData';
import ProjectCard from '@/components/ProjectCard';

export default function ProjectsPage() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700 pb-12">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
          {'project archive'}
        </h1>
        <p className="text-secondary max-w-xl text-sm md:text-base leading-relaxed">
          A curated collection of academic, research, and independent projects exploring machine learning, deep learning, big data pipelines, and data analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}