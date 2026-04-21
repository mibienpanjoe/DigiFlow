import { X } from 'lucide-react';
import { motion } from 'motion/react';
import { mainNavLinks, legalLinks } from '../../data/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 320 }}
        className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-xs z-[70] flex flex-col"
        style={{ background: '#0D0A08', borderLeft: '1px solid rgba(254,104,20,0.15)' }}
      >
        {/* Gold top accent */}
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #FE6814, transparent)' }} />

        <div className="flex flex-col h-full p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-sm text-muted uppercase tracking-widest" style={{ fontFamily: 'Syne, sans-serif' }}>
              Navigation
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-muted hover:text-cream border border-transparent hover:border-gold/30 rounded-full transition-all"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 flex-grow">
            {mainNavLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.07, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-3xl font-bold text-cream/80 hover:text-gold transition-colors py-2 tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Bottom */}
          <div className="mt-auto space-y-6">
            <a
              href="#contact"
              onClick={onClose}
              className="flex items-center justify-center w-full py-3 bg-gold text-background font-bold rounded-full text-sm transition-all hover:bg-cream"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Démarrer un projet
            </a>
            <div className="flex flex-wrap gap-3">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted hover:text-cream transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default MobileMenu;
