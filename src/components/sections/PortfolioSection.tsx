import { projects } from '../../data/portfolio';
import Reveal from '../ui/Reveal';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-12 sm:py-20 lg:py-32" style={{ background: '#002248' }}>
      {/* Borders */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.3), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-10 sm:mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">Nos Projets</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                Quelques{' '}
                <span style={{ color: '#FE6814' }}>réalisations</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm max-w-md leading-relaxed" style={{ color: '#6B8CAE' }}>
              Des projets concrets pour des entreprises burkinabè ambitieuses.
            </p>
          </Reveal>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1} width="100%">
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ border: '1px solid rgba(254,104,20,0.1)' }}
              >
                {/* Gradient image */}
                <div
                  className="relative h-56 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom} 0%, ${project.gradientVia} 50%, ${project.gradientTo} 100%)`,
                  }}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg width=\'32\' height=\'32\' viewBox=\'0 0 32 32\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M16 1 L31 16 L16 31 L1 16 Z\' fill=\'none\' stroke=\'rgba(212%2C168%2C83%2C0.3)\' stroke-width=\'0.5\'/%3E%3C/svg%3E")',
                      backgroundSize: '32px 32px',
                    }}
                  />

                  {/* Year badge */}
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid rgba(254,104,20,0.3)',
                      color: '#FE6814',
                    }}
                  >
                    {project.year}
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(254,104,20,0.15)',
                      border: '1px solid rgba(254,104,20,0.25)',
                      color: '#FE6814',
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="p-6"
                  style={{ background: '#002248' }}
                >
                  <h3
                    className="font-bold text-lg mb-2 transition-colors group-hover:text-gold"
                    style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
                  >
                    {project.client}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: '#6B8CAE' }}>
                    {project.description}
                  </p>

                  {/* Result metric */}
                  <div
                    className="flex items-center gap-3 pt-4"
                    style={{ borderTop: '1px solid rgba(254,104,20,0.1)' }}
                  >
                    <span
                      className="font-black text-2xl"
                      style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
                    >
                      {project.result}
                    </span>
                    <span className="text-xs" style={{ color: '#6B8CAE' }}>
                      {project.resultLabel}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.3}>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'Syne, sans-serif',
                border: '1px solid rgba(254,104,20,0.3)',
                color: '#FE6814',
                background: 'rgba(254,104,20,0.05)',
              }}
            >
              Démarrer votre projet
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.3), transparent)' }}
      />
    </section>
  );
};

export default PortfolioSection;
