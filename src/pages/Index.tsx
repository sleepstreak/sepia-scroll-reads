import { Layout } from '@/components/Layout';
import literaryBackground from '@/assets/literary-background.jpg';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image with sepia overlay */}
        <div className="absolute inset-0 sepia-overlay">
          <img
            src={literaryBackground}
            alt="Literary background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide text-foreground mb-4">
              Writings & Manga
            </h1>
            <p className="text-xl md:text-2xl font-serif text-muted-foreground italic">
              A digital reading room
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
