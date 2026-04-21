import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background text-cream overflow-x-hidden">
      {children}
    </div>
  );
};

export default Layout;
