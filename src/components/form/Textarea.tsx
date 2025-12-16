import { forwardRef } from 'react';
import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ label, error, className = '', id, ...props }, ref) => {
        const textareaId = id || props.name;

        return (
            <div className="space-y-2">
                {label && (
                    <label
                        htmlFor={textareaId}
                        className="block text-sm font-medium text-slate-300 ml-5"
                    >
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref}
                    id={textareaId}
                    className={`
            block w-full 
            rounded-[2rem] 
            border border-white/10 
            bg-[#001529] 
            px-6 py-4 
            text-white 
            placeholder-slate-500 
            focus:border-[#FF6F00] focus:ring-1 focus:ring-[#FF6F00] 
            focus:outline-none 
            transition-colors duration-200 
            shadow-inner 
            resize-none
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

Textarea.displayName = 'Textarea';

export default Textarea;
