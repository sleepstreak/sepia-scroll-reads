import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import heroImage from '@/assets/hero-image.jpg';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page-container min-h-screen bg-background">
      {/* Site Header - Three-part layout */}
      <header className="site-header sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Left: Empty */}
          <div className="flex-1"></div>
          
          {/* Center: Site Identity */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-xl font-serif font-light tracking-wider text-foreground">
              TND Press
            </h1>
          </div>
          
          {/* Right: Navigation */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex items-center gap-8 text-sm font-serif">
              <li>
                <Link 
                  to="/works" 
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  Works
                </Link>
              </li>
              <li className="text-muted-foreground">|</li>
              <li>
                <Link 
                  to="/exhibitions" 
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  Exhibitions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hamburger Menu */}
      <div className="flex justify-center py-4">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                to="/link1"
                className="text-lg font-serif text-foreground hover:text-primary transition-smooth"
                onClick={() => setMenuOpen(false)}
              >
                Link 1
              </Link>
              <Link
                to="/link2"
                className="text-lg font-serif text-foreground hover:text-primary transition-smooth"
                onClick={() => setMenuOpen(false)}
              >
                Link 2
              </Link>
              <Link
                to="/link3"
                className="text-lg font-serif text-foreground hover:text-primary transition-smooth"
                onClick={() => setMenuOpen(false)}
              >
                Link 3
              </Link>
              <Link
                to="/link4"
                className="text-lg font-serif text-foreground hover:text-primary transition-smooth"
                onClick={() => setMenuOpen(false)}
              >
                Link 4
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Visual Domain - 70vh with grayscale/grain filter */}
      <div className="hero-visual relative h-[70vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Visual domain"
          className="w-full h-full object-cover grayscale-heavy"
        />
      </div>
    </div>
  );
};

export default Index;
