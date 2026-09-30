// app/page.tsx
import { projects } from '@/lib/projectsData';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Christian Putra
          </h1>
          <p className="font-mono text-sm md:text-base text-accent">
            Computer Science Student
          </p>
        </div>
        
        <div className="space-y-4 max-w-2xl text-secondary leading-relaxed">
          <p className="text-lg md:text-xl text-primary">
            I am a Computer Science student interested in building data-driven and intelligent systems.
          </p>
          <p className="text-sm md:text-base">
            Through academic and independent projects, I have explored machine learning, deep learning, data analytics, and big data processing—from training classification models and analyzing business data to building distributed data pipelines.
          </p>
          <p className="text-sm md:text-base">
            I enjoy understanding the process behind a solution: preparing the data, experimenting with different approaches, evaluating the results, and turning the outcome into something useful.
          </p>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <Link 
            href="/projects" 
            className="px-5 py-2.5 rounded bg-primary text-background font-mono text-xs font-medium hover:bg-accent transition-colors"
          >
            explore all work
          </Link>
          <Link 
            href="/resume" 
            className="px-5 py-2.5 rounded border border-border text-primary font-mono text-xs hover:border-accent transition-colors"
          >
            view resume
          </Link>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="space-y-8 pt-8 border-t border-border/40">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold font-mono tracking-tight text-primary">
            {/* selected work */}
            selected work
          </h2>
          <span className="text-xs font-mono text-secondary">
            5 core projects
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="space-y-4 pt-8 border-t border-border/40 pb-12">
        <h2 className="text-xl font-semibold font-mono tracking-tight text-primary">
          let&apos;s connect
        </h2>
        <p className="text-sm text-secondary max-w-xl">
          Interested in discussing machine learning research, data pipelines, or software engineering? You can reach out via email or connect through professional networks.
        </p>
        <div className="flex items-center gap-6 font-mono text-xs text-accent pt-2">
          <a href="mailto:christian.pradana@binus.ac.id" className="hover:underline">email</a>
          <a href="https://github.com/Putra-Christian618" target="_blank" rel="noreferrer" className="hover:underline">github</a>
          <a href="https://www.linkedin.com/in/christian-putra-7b95b7335/" target="_blank" rel="noreferrer" className="hover:underline">linkedin</a>
        </div>
      </section>
    </div>
  );
}