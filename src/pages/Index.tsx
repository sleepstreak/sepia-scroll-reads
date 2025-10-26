import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  return (
    <div className="page-container min-h-screen bg-background">
      {/* Site Header - Three-part layout */}
      <header className="site-header sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="flex items-center justify-between px-8 py-6">
          {/* Left: Site Identity */}
          <div className="flex-1">
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

      {/* Visual Domain - 70vh with grayscale/grain filter */}
      <div className="hero-visual relative h-[70vh] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Visual domain"
          className="w-full h-full object-cover grayscale-heavy"
        />
        
        {/* Biographical Text Block - Bottom-right */}
        <div className="bio-text absolute bottom-8 right-8 w-[20vw] text-right">
          <p className="text-sm font-serif leading-relaxed text-foreground/90">
            A press dedicated to works of austere contemplation and intellectual rigor. 
            Each publication represents a commitment to the examined life, 
            where form and thought converge in deliberate minimalism.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
