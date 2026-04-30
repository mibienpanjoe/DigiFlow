import Reveal from '../ui/Reveal';

const steps = [
  {
    number: '01',
    title: 'Découverte',
    description: 'Nous analysons vos objectifs, votre marché et vos concurrents pour poser des bases solides.',
  },
  {
    number: '02',
    title: 'Stratégie',
    description: 'Nous concevons un plan d\'action personnalisé, aligné sur vos ambitions et votre budget.',
  },
  {
    number: '03',
    title: 'Création',
    description: 'Notre équipe crée, développe et affine jusqu\'à ce que le résultat soit impeccable.',
  },
  {
    number: '04',
    title: 'Livraison',
    description: 'Nous déployons, mesurons les résultats et restons à vos côtés pour la durée.',
  },
];

const ProcessSection = () => {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden" style={{ background: '#002248' }}>
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.5), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">Comment ça marche</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight text-cream"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Notre Processus
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted text-sm max-w-xs leading-relaxed">
              Quatre étapes claires pour transformer votre vision en réalité digitale.
            </p>
          </Reveal>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 items-stretch">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="h-full" width="100%">
              <div
                className="relative p-6 lg:p-8 group transition-all duration-300 flex flex-col w-full"
                style={{
                  border: '1px solid rgba(254,104,20,0.2)',
                  borderRight: i < steps.length - 1 ? 'none' : '1px solid rgba(254,104,20,0.2)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(254,104,20,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.4)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.2)';
                }}
              >
                {/* Orange top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #FE6814, rgba(254,104,20,0.3))',
                    opacity: 0.6,
                  }}
                />

                {/* Number */}
                <div
                  className="text-[3.5rem] font-black leading-none mb-5 select-none"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    WebkitTextStroke: '1.5px rgba(254,104,20,0.5)',
                    color: 'rgba(254,104,20,0.12)',
                  }}
                >
                  {step.number}
                </div>

                <h3
                  className="font-bold text-lg mb-2 transition-colors duration-300"
                  style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#8AABCC' }}>
                  {step.description}
                </p>

                {/* Arrow connector (not on last) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 items-center justify-center rounded-full"
                    style={{
                      color: '#FE6814',
                      background: '#002248',
                      border: '1px solid rgba(254,104,20,0.35)',
                    }}
                  >
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.5), transparent)' }}
      />
    </section>
  );
};

export default ProcessSection;
