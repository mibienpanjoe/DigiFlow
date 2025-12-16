import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface BaseIconButtonProps {
    icon: ReactNode;
    className?: string;
    variant?: 'default' | 'social';
}

type IconButtonAsButton = BaseIconButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type IconButtonAsLink = BaseIconButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type IconButtonProps = IconButtonAsButton | IconButtonAsLink;

const IconButton = ({
    icon,
    className = '',
    variant = 'default',
    ...props
}: IconButtonProps) => {
    const baseClasses = `
    inline-flex items-center justify-center 
    w-10 h-10 rounded-full 
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:ring-offset-2 focus:ring-offset-[#001529]
  `;

    const variantClasses = {
        default: `
      border border-white text-white 
      hover:bg-white hover:text-[#FF6F00]
    `,
        social: `
      border border-slate-600 text-white 
      hover:bg-[#FF6F00] hover:border-[#FF6F00] hover:text-white 
      hover:-translate-y-1
    `,
    };

    const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

    if ('href' in props && props.href) {
        const { href, ...anchorProps } = props as IconButtonAsLink;
        return (
            <a href={href} className={combinedClasses} {...anchorProps}>
                {icon}
            </a>
        );
    }

    const buttonProps = props as IconButtonAsButton;
    return (
        <button className={combinedClasses} {...buttonProps}>
            {icon}
        </button>
    );
};

export default IconButton;
