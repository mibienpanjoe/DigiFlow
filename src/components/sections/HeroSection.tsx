import { motion, type Variants } from 'motion/react';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-start overflow-hidden pattern-diamonds"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(254,104,20,0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] opacity-30"
        style={{
          background:
            'radial-gradient(circle at 80% 20%, rgba(254,104,20,0.12) 0%, transparent 60%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] opacity-20"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(254,104,20,0.1) 0%, transparent 60%)',
        }}
      />

      {/* Floating diamond decorations */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[8%] w-3 h-3 rotate-45"
        style={{ background: 'rgba(254,104,20,0.4)' }}
      />
      <motion.div
        animate={{ y: [8, -12, 8], rotate: [45, 60, 45] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/3 left-[6%] w-2 h-2 rotate-45"
        style={{ background: 'rgba(254,104,20,0.5)' }}
      />
      <motion.div
        animate={{ y: [-5, 10, -5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-[12%] w-4 h-4 rotate-45"
        style={{ border: '1px solid rgba(254,104,20,0.3)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col"
        >
          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05] font-black tracking-tighter"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span
              className="block"
              style={{
                color: '#FE6814',
                textShadow: '0 0 80px rgba(254,104,20,0.4)',
              }}
            >
              L'agence digitale
            </span>
            <span className="block" style={{ color: '#F0F4FF' }}>qui fait vendre vos produits et services.</span>
          </motion.h1>

          {/* Subline + CTAs row */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16"
          >
            <p className="max-w-sm text-base leading-relaxed" style={{ color: '#6B8CAE' }}>
              Nous aidons les entreprises burkinabè à attirer plus de clients en ligne — avec des sites qui convertissent, des pages qui engagent et des visuels qui marquent.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/22666220025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: '#FE6814',
                  color: '#ffffff',
                }}
              >
                <WhatsAppIcon />
                Obtenir un devis gratuit
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  color: '#F0F4FF',
                  border: '1px solid rgba(254,104,20,0.25)',
                  background: 'transparent',
                }}
              >
                Nos services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Bottom stat strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 sm:mt-16 pt-6 sm:pt-8 grid grid-cols-3 gap-4"
            style={{ borderTop: '1px solid rgba(254,104,20,0.1)' }}
          >
            {[
              { value: '10M+', label: 'Vues & Interactions', sub: 'générées pour nos clients' },
              { value: '99%', label: 'Clients Satisfaits', sub: 'sur 50+ projets livrés' },
              { value: '50+', label: 'Projets Réalisés', sub: 'sites, apps, campagnes' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span
                  className="font-black text-xl sm:text-2xl"
                  style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
                >
                  {s.value}
                </span>
                <span className="text-xs sm:text-sm leading-tight font-semibold" style={{ color: '#F0F4FF' }}>
                  {s.label}
                </span>
                <span className="text-xs leading-tight" style={{ color: '#6B8CAE' }}>
                  {s.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
