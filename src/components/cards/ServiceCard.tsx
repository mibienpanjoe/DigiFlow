import { Plus, Minus, ShoppingBag, Terminal, Brush, Video, FileEdit } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface Service {
    id: string;
    title: string;
    titleItalic: string;
    description: string;
    features: string[];
    icon: string;
}

interface ServiceCardProps {
    service: Service;
    isActive: boolean;
    onToggle: () => void;
    isAnyActive: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
    shopping_bag: <ShoppingBag className="w-20 h-20" />,
    terminal: <Terminal className="w-20 h-20" />,
    brush: <Brush className="w-20 h-20" />,
    videocam: <Video className="w-20 h-20" />,
    edit_note: <FileEdit className="w-20 h-20" />,
};

const ServiceCard = ({ service, isActive, onToggle, isAnyActive }: ServiceCardProps) => {
    const opacity = isAnyActive && !isActive ? 'opacity-50' : 'opacity-100';

    return (
        <div
            className={`
        group border-b border-white/20 
        transition-all duration-500 
        cursor-pointer overflow-hidden
        ${isActive ? 'bg-white' : ''}
        ${opacity}
      `.replace(/\s+/g, ' ').trim()}
            onClick={onToggle}
        >
            <div className="flex justify-between items-center py-8 px-6 md:px-10 transition-all duration-300">
                <h3 className={`
          font-serif text-2xl md:text-4xl lg:text-5xl font-light 
          transition-colors duration-300
          ${isActive ? 'text-[#001529]' : 'text-white'}
        `.replace(/\s+/g, ' ').trim()}>
                    {service.title} <span className="italic">{service.titleItalic}</span>
                </h3>
                <div className="text-[#FF6F00] transition-transform duration-300">
                    {isActive ? (
                        <Minus className="w-10 h-10" />
                    ) : (
                        <Plus className="w-10 h-10" />
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <div className="p-8 md:p-12 pt-0 grid md:grid-cols-2 gap-8 items-end">
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl leading-relaxed font-normal text-[#001529]/90">
                                    {service.description}
                                </p>
                                <ul className="text-sm font-medium space-y-3 text-[#001529]/80">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <span className="w-1.5 h-1.5 bg-[#FF6F00] rounded-full" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="hidden md:flex justify-end items-end">
                                <span className="text-[#FF6F00]/20">
                                    {iconMap[service.icon]}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ServiceCard;
