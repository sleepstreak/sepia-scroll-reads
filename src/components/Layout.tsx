import { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  showBackgroundImage?: boolean;
}

export const Layout = ({ children, showBackgroundImage = false }: LayoutProps) => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      {children}
    </div>
  );
};
