import { Navbar } from '@/components/Navbar';
import literaryBackground from '@/assets/literary-background.jpg';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header Section */}
      <div className="py-12 px-6 text-center bg-background">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide text-foreground mb-3">
          TND Press
        </h1>
      </div>

      {/* Navbar Section */}
      <Navbar />

      {/* Image Section */}
      <div className="flex-1 relative sepia-overlay">
        <img
          src={literaryBackground}
          alt="Literary background"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Index;
