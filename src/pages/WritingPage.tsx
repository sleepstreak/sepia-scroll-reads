import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowLeft } from 'lucide-react';

const writings = {
  'sample-one': {
    title: 'Sample Writing One',
    pdfUrl: '/placeholder.pdf', // Replace with actual PDF URLs
  },
  'sample-two': {
    title: 'Sample Writing Two',
    pdfUrl: '/placeholder.pdf', // Replace with actual PDF URLs
  },
};

const WritingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = slug ? writings[slug as keyof typeof writings] : null;

  if (!writing) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-4xl font-serif mb-4">Writing Not Found</h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-serif"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
            {writing.title}
          </h1>

          {/* PDF Viewer */}
          <div className="bg-card rounded-sm shadow-lg border border-border overflow-hidden mb-12">
            <div className="aspect-[8.5/11] w-full">
              <iframe
                src={writing.pdfUrl}
                className="w-full h-full"
                title={writing.title}
              />
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-serif text-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WritingPage;
