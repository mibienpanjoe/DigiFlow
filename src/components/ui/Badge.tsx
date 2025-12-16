import { ReactNode } from 'react';

interface BadgeProps {
    icon?: ReactNode;
    children: ReactNode;
    showPing?: boolean;
    className?: string;
}

const Badge = ({ icon, children, showPing = false, className = '' }: BadgeProps) => {
    return (
        <div
            className={`
        inline-flex items-center gap-2 
        px-4 py-1.5 
        rounded-full 
        border border-[#FF6F00]/20 
        bg-[#FF6F00]/10 
        backdrop-blur-md
        ${className}
      `.replace(/\s+/g, ' ').trim()}
        >
            {icon && (
                <span className="text-[#FF6F00]">
                    {icon}
                </span>
            )}
            <span className="text-sm font-medium text-[#FF6F00] tracking-wide uppercase">
                {children}
            </span>
            {showPing && (
                <span className="flex h-2 w-2 relative ml-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6F00] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6F00]" />
                </span>
            )}
        </div>
    );
};

export default Badge;
