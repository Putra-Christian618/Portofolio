'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'projects', path: '/projects' },
    { name: 'about', path: '/about' },
    { name: 'resume', path: '/resume' },
  ];

  return (
    <header className="flex items-center justify-between py-6 border-b border-border/40 mb-8 md:mb-12">
      <Link 
        href="/" 
        className="font-mono text-sm tracking-tight text-primary hover:text-accent transition-colors py-2"
        aria-label="Home"
      >
        c.p
      </Link>
      
      <nav className="flex items-center space-x-4 md:space-x-6 text-sm font-mono">
        <Link 
          href="/" 
          className={`hidden sm:inline-block py-2 transition-colors ${pathname === '/' ? 'text-accent' : 'text-secondary hover:text-primary'}`}
          aria-current={pathname === '/' ? 'page' : undefined}
        >
          home
        </Link>
        
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link 
              key={item.path}
              href={item.path} 
              className={`py-2 transition-colors ${isActive ? 'text-accent' : 'text-secondary hover:text-primary'}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}