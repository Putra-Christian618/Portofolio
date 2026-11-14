import { projects } from '@/lib/projectsData';
import ProjectCard from '@/components/ProjectCard';
import { siteConfig } from '@/lib/siteConfig';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-12 md:space-y-16 animate-in fade-in duration-700">
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            {siteConfig.author}
          </h1>
          <p className="font-mono text-sm md:text-base text-secondary">
            {siteConfig.role} · {siteConfig.focusLine}
          </p>
        </div>
        
        <div className="space-y-4 max-w-xl text-secondary leading-relaxed">
          <p className="text-lg md:text-xl text-primary">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link 
            href="/projects" 
            className="px-5 py-2.5 rounded bg-primary text-background font-mono text-xs font-medium hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all"
          >
            explore all work
          </Link>
          <Link 
            href="/resume" 
            className="px-5 py-2.5 rounded border border-border text-primary font-mono text-xs hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all"
          >
            view resume
          </Link>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-border/40">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold font-mono tracking-tight text-primary">
            selected work
          </h2>
          <Link href="/projects" className="text-xs font-mono text-secondary hover:text-accent transition-colors py-2">
            view all {projects.length} projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-4 pt-8 border-t border-border/40 pb-12">
        <h2 className="text-xl font-semibold font-mono tracking-tight text-primary">
          let&apos;s connect
        </h2>
        <div className="flex items-center gap-6 font-mono text-xs text-accent pt-2">
          <a href={`mailto:${siteConfig.email}`} className="hover:underline py-2">email</a>
          <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline py-2">github</a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline py-2">linkedin</a>
        </div>
      </section>
    </div>
  );
}