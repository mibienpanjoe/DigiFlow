import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { mainNavLinks } from '../../data/navigation';
import { AnimatePresence, motion } from 'motion/react';
import MobileMenu from './MobileMenu';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-6xl flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 ${
            scrolled
              ? 'bg-[#010B1A]/90 backdrop-blur-xl border border-[rgba(254,104,20,0.15)] shadow-2xl shadow-black/50'
              : 'bg-[#010B1A]/60 backdrop-blur-lg border border-[rgba(254,104,20,0.08)]'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center p-0.5 ring-1 ring-gold/30 transition-all group-hover:ring-gold/60">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo-128.png" alt="DigiFlow" className="h-full w-full object-contain" width="128" height="128" />
              </picture>
            </div>
            <span
              className="font-display font-bold text-base tracking-tight text-cream"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              DigiFlow
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {mainNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-cream transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/22666220025"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gold hover:text-cream px-3 py-1.5 rounded-full border border-gold/20 hover:border-gold/50 transition-all duration-300 text-sm"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-1.5 font-semibold text-sm px-4 py-1.5 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: '#FE6814', color: '#ffffff', fontFamily: 'Syne, sans-serif' }}
            >
              Démarrer
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-1.5 text-muted hover:text-cream transition-colors"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
