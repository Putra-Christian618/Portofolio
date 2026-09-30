// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-6 border-b border-border/40 mb-12">
      <Link href="/" className="font-mono text-sm tracking-tight text-primary hover:text-accent transition-colors">
        {`Christian Putra's portfolio`}
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-mono text-secondary">
        <Link href="/" className="hover:text-primary transition-colors">home</Link>
        <Link href="/projects" className="hover:text-primary transition-colors">projects</Link>
        <Link href="/about" className="hover:text-primary transition-colors">about</Link>
        <Link href="/resume" className="hover:text-primary transition-colors">resume</Link>
      </nav>
    </header>
  );
}