import { Share2, Code2, Palette, Film, PenLine, Cpu, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import Reveal from '../ui/Reveal';

const iconMap: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Share2,
  Code2,
  Palette,
  Film,
  PenLine,
  Cpu,
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const Icon = iconMap[service.icon] ?? Share2;

  return (
    <Reveal delay={index * 0.08} width="100%" viewMargin="0px">
      <div
        className="group relative flex flex-col h-full p-7 rounded-2xl transition-all duration-400 cursor-default"
        style={{
          background: '#002248',
          border: '1px solid rgba(254,104,20,0.1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.35)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.1)';
          (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        }}
      >
        {/* Top gold accent */}
        <div
          className="absolute top-0 left-6 right-6 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.5), transparent)' }}
        />

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
          style={{ background: 'rgba(254,104,20,0.08)', border: '1px solid rgba(254,104,20,0.15)' }}
        >
          <Icon className="w-5 h-5" style={{ color: '#FE6814' } as React.CSSProperties} />
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3
            className="font-black text-xl leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
          >
            {service.title}{' '}
            <span style={{ color: '#FE6814' }}>{service.subtitle}</span>
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#6B8CAE' }}>
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#6B8CAE' }}>
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'rgba(254,104,20,0.6)' } as React.CSSProperties} />
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href="#contact"
            className="text-xs font-semibold underline underline-offset-4 decoration-[rgba(254,104,20,0.4)] hover:decoration-[#FE6814] transition-all duration-300"
            style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
          >
            En savoir plus
          </a>
        </div>
      </div>
    </Reveal>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(254,104,20,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">Nos Services</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                Nos domaines{' '}
                <span style={{ color: '#FE6814' }}>d'expertise</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#6B8CAE' }}>
              Six expertises complémentaires pour couvrir l'intégralité de votre présence digitale.
            </p>
          </Reveal>
        </div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {services.map((service, i) => (
            <div key={service.id} className="min-w-[78vw] sm:min-w-[52vw] md:min-w-0 snap-center">
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
