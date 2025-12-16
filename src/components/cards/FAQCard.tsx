import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQ {
    id: string;
    question: string;
    answer?: string;
}

interface FAQCardProps {
    faq: FAQ;
    isFullWidth?: boolean;
    isActive: boolean;
    onToggle: () => void;
}

const FAQCard = ({ faq, isFullWidth = false, isActive, onToggle }: FAQCardProps) => {
    return (
        <div
            className={`
        group relative squircle bg-white shadow-sm 
        transition-all duration-300 cursor-pointer overflow-hidden 
        border-b-4 border-transparent hover:border-[#FF6F00]
        ${isFullWidth ? 'md:col-span-2' : ''}
        ${isActive ? 'shadow-[0_0_30px_rgba(255,111,0,0.15)] border-[#FF6F00]' : 'hover:shadow-[0_0_20px_rgba(255,111,0,0.1)]'}
      `.replace(/\s+/g, ' ').trim()}
            onClick={onToggle}
        >
            <div className={`p-5 md:p-8 flex items-center justify-between ${isActive ? 'pb-3 md:pb-4' : 'h-full'}`}>
                <h3 className={`text-lg md:text-xl font-semibold transition-colors pr-4 flex-1 ${isActive ? 'text-[#FF6F00]' : 'text-[#001529] group-hover:text-[#FF6F00]'}`}>
                    {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-2">
                    <span className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#FF6F00] transition-colors duration-300 ${isActive ? 'bg-[#FF6F00] text-white' : 'text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white'}`}>
                        {isActive ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                    </span>
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-6 md:px-8 md:pb-8 pt-1 md:pt-2">
                            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom active line indicator */}
            <div className={`absolute right-0 top-0 bottom-0 w-1 bg-[#FF6F00] transform transition-transform duration-300 origin-bottom ${isActive ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'}`} />
        </div>
    );
};

export default FAQCard;
