import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, className = '', id, ...props }, ref) => {
        const inputId = id || props.name;

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-slate-300 ml-5"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`
            block w-full 
            rounded-full 
            border border-white/10 
            bg-[#001529] 
            px-6 py-4 
            text-white 
            placeholder-slate-500 
            focus:border-[#FF6F00] focus:ring-1 focus:ring-[#FF6F00] 
            focus:outline-none 
            transition-colors duration-200 
            shadow-inner
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            ${className}
          `.replace(/\s+/g, ' ').trim()}
                    {...props}
                />
                {error && (
                    <p className="text-sm text-red-500 ml-5">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
