import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [writingsExpanded, setWritingsExpanded] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setWritingsExpanded(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 p-2 rounded-sm hover:bg-primary/10 transition-smooth"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-foreground" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-smooth"
          onClick={closeMenu}
        />
      )}

      {/* Menu */}
      <nav
        className={cn(
          'fixed top-0 right-0 w-80 h-full bg-card shadow-2xl z-40 transform transition-smooth',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="pt-24 px-8">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={cn(
                  'block text-xl font-serif transition-smooth',
                  isActive('/')
                    ? 'text-primary font-medium'
                    : 'text-foreground hover:text-primary'
                )}
              >
                Home
              </Link>
            </li>

            <li>
              <button
                onClick={() => setWritingsExpanded(!writingsExpanded)}
                className="flex items-center justify-between w-full text-xl font-serif text-foreground hover:text-primary transition-smooth"
              >
                <span>Other Writings</span>
                {writingsExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {writingsExpanded && (
                <ul className="mt-4 ml-6 space-y-3 animate-fade-in">
                  <li>
                    <Link
                      to="/writing/sample-one"
                      onClick={closeMenu}
                      className={cn(
                        'block text-lg font-serif transition-smooth',
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
                      onClick={closeMenu}
                      className={cn(
                        'block text-lg font-serif transition-smooth',
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
        </div>
      </nav>
    </>
  );
};
