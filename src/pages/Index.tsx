import { Layout } from '@/components/Layout';
import literaryBackground from '@/assets/literary-background.jpg';

const Index = () => {
  return (
    <Layout showNavbar>
      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="py-12 px-6 text-center bg-background">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide text-foreground mb-3">
            Writings & Manga
          </h1>
          <p className="text-lg md:text-xl font-serif text-muted-foreground italic">
            A digital reading room
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative sepia-overlay">
          <img
            src={literaryBackground}
            alt="Literary background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
