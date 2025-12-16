import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'gradient' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    className?: string;
    children: ReactNode;
}

type ButtonAsButton = BaseButtonProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: never;
    };

type ButtonAsLink = BaseButtonProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
    primary: `
    bg-[#FF6F00] hover:bg-[#ff8534] text-white 
    shadow-lg shadow-[#FF6F00]/20 hover:shadow-[#FF6F00]/40 
    transform hover:-translate-y-0.5
  `,
    secondary: `
    bg-[#001529]/80 backdrop-blur-md border border-white/10 text-white 
    shadow-[0_0_15px_rgba(255,255,255,0.05)] 
    hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] 
    hover:bg-[#001529]/95
  `,
    gradient: `
    bg-gradient-to-r from-[#FF6F00] to-[#FF8C33] text-white 
    shadow-[0_0_20px_rgba(255,111,0,0.5)] 
    hover:shadow-[0_0_30px_rgba(255,111,0,0.7)] 
    transform hover:-translate-y-0.5
  `,
    ghost: `
    bg-transparent text-white hover:text-[#FF6F00] 
    border border-white/10 hover:border-[#FF6F00]/50
  `,
};

const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
};

const Button = ({
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    isLoading = false,
    className = '',
    children,
    ...props
}: ButtonProps) => {
    const baseClasses = `
    inline-flex items-center justify-center gap-2 
    rounded-full font-bold 
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:ring-offset-2 focus:ring-offset-[#001529]
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

    const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

    const content = (
        <>
            {isLoading && (
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            )}
            {icon && iconPosition === 'left' && !isLoading && icon}
            <span>{children}</span>
            {icon && iconPosition === 'right' && !isLoading && icon}
        </>
    );

    if ('href' in props && props.href) {
        const { href, ...anchorProps } = props as ButtonAsLink;
        return (
            <a href={href} className={combinedClasses} {...anchorProps}>
                {content}
            </a>
        );
    }

    const buttonProps = props as ButtonAsButton;
    return (
        <button className={combinedClasses} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
            {content}
        </button>
    );
};

export default Button;
