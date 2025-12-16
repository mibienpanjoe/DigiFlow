import type { ReactNode } from 'react';
import BackgroundEffects from './BackgroundEffects';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="relative min-h-screen bg-[#001529] text-white overflow-x-hidden">
            <BackgroundEffects />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default Layout;
