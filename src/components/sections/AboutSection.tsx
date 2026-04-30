import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Reveal from '../ui/Reveal';

const stats = [
  { value: '10M', suffix: '+', label: 'Réactions & Trafic', sub: 'générées pour nos clients' },
  { value: '99', suffix: '%', label: 'Satisfaction', sub: 'taux de clients satisfaits' },
  { value: '50', suffix: '+', label: 'Projets', sub: 'livrés avec excellence' },
];

const StatNumber = ({ stat, delay }: { stat: (typeof stats)[0]; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <div className="flex items-start gap-0.5">
        <span
          className="text-[clamp(2rem,7vw,6.5rem)] font-black leading-none tracking-tighter"
          style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
        >
          {stat.value}
        </span>
        <span
          className="text-[clamp(0.9rem,3vw,2.5rem)] font-black mt-1 sm:mt-2"
          style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
        >
          {stat.suffix}
        </span>
      </div>
      <div className="mt-1 mb-1 w-8 h-px" style={{ background: 'rgba(254,104,20,0.4)' }} />
      <p className="font-semibold text-cream text-sm uppercase tracking-wider" style={{ fontFamily: 'Syne, sans-serif' }}>
        {stat.label}
      </p>
      <p className="text-muted text-xs mt-0.5">{stat.sub}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 20% 50%, rgba(254,104,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <Reveal className="mb-10 sm:mb-16">
          <span className="section-label">À Propos de Nous</span>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Left: Stats */}
          <div className="grid grid-cols-3 lg:flex lg:flex-col gap-6 lg:gap-10">
            {stats.map((stat, i) => (
              <StatNumber key={stat.label} stat={stat} delay={i * 0.15} />
            ))}
          </div>

          {/* Right: Mission text */}
          <div className="flex flex-col gap-6 lg:gap-8 lg:pt-4">
            <Reveal delay={0.1}>
              <h2
                className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight tracking-tight text-cream"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Une équipe burkinabè qui comprend vos clients mieux que{' '}
                <span style={{ color: '#FE6814' }}>n'importe quelle agence étrangère.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed" style={{ color: '#6B8CAE' }}>
                DigiFlow est une équipe dynamique d'experts engagés à obtenir des résultats
                exceptionnels. Nous accompagnons les entreprises burkinabè dans leur transformation
                digitale avec une approche locale, créative et orientée performance.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base leading-relaxed" style={{ color: '#6B8CAE' }}>
                Notre force : comprendre votre marché, votre culture, vos clients — mieux que
                n'importe quelle agence internationale ne pourrait le faire.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Stratégie', 'Créativité', 'Performance', 'Proximité'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      border: '1px solid rgba(254,104,20,0.2)',
                      color: '#FE6814',
                      background: 'rgba(254,104,20,0.05)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
