import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [writingsExpanded, setWritingsExpanded] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="py-6 px-6 bg-background border-b border-border">
      <ul className="flex flex-wrap items-center justify-center gap-8">
        <li>
          <Link
            to="/"
            className={cn(
              'text-lg font-serif transition-smooth',
              isActive('/')
                ? 'text-primary font-medium'
                : 'text-foreground hover:text-primary'
            )}
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => setWritingsExpanded(!writingsExpanded)}
            className="flex items-center gap-2 text-lg font-serif text-foreground hover:text-primary transition-smooth"
          >
            <span>Other Writings</span>
            {writingsExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {writingsExpanded && (
            <ul className="absolute top-full left-0 mt-2 bg-card border border-border rounded-sm shadow-lg p-4 space-y-2 animate-fade-in min-w-[200px]">
              <li>
                <Link
                  to="/writing/sample-one"
                  className={cn(
                    'block text-base font-serif transition-smooth',
                    isActive('/writing/sample-one')
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  Sample Writing One
                </Link>
              </li>
              <li>
                <Link
                  to="/writing/sample-two"
                  className={cn(
                    'block text-base font-serif transition-smooth',
                    isActive('/writing/sample-two')
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-primary'
                  )}
                >
                  Sample Writing Two
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};
