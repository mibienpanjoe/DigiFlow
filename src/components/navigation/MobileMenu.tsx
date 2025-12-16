import { X, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { mainNavLinks, legalLinks } from '../../data/navigation';
import { socialLinks } from '../../constants/theme';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const handleLinkClick = () => {
        onClose();
    };

    const socialIcons = [
        { Icon: Facebook, href: socialLinks.facebook, label: 'Facebook' },
        { Icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
        { Icon: Instagram, href: socialLinks.instagram, label: 'Instagram' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
                        className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-[#001529] z-50 lg:hidden flex flex-col shadow-2xl border-l border-white/5"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6F00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="relative flex flex-col h-full p-8 z-10">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-12">
                                <span className="font-sans font-bold text-2xl text-white tracking-tight">
                                    Navigation
                                </span>
                                <button
                                    onClick={onClose}
                                    className="p-2 -mr-2 text-white/70 hover:text-[#FF6F00] transition-colors rounded-full hover:bg-white/5"
                                    aria-label="Close menu"
                                >
                                    <X className="w-8 h-8" strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Main Navigation */}
                            <nav className="flex flex-col gap-6 flex-grow">
                                {mainNavLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                                        className="font-sans font-bold text-4xl sm:text-5xl text-white hover:text-[#FF6F00] transition-colors tracking-tight"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Footer Section */}
                            <div className="mt-auto space-y-8">
                                {/* Legal Links */}
                                <div className="space-y-3">
                                    <h4 className="text-white/40 text-sm font-medium uppercase tracking-widest mb-4">Légal</h4>
                                    {legalLinks.map((link) => (
                                        <a key={link.label} href={link.href} className="block text-white/60 hover:text-white transition-colors text-sm">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>

                                {/* Social Icons Row (Simple Icons as requested) */}
                                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                    <span className="text-white/40 text-sm font-medium">Suivez-nous</span>
                                    <div className="flex gap-4">
                                        {socialIcons.map(({ Icon, href, label }) => (
                                            <a
                                                key={label}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-white hover:text-[#FF6F00] bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300"
                                                aria-label={label}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
