import { testimonials } from '../../data/testimonials';
import Reveal from '../ui/Reveal';

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((n) => (
      <svg
        key={n}
        className="w-3.5 h-3.5"
        fill={n <= Math.floor(rating) ? '#FE6814' : 'none'}
        stroke="#FE6814"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ t, index }: { t: typeof testimonials[0]; index: number }) => (
  <Reveal delay={index * 0.1} width="100%">
    <div
      className="group relative p-6 rounded-2xl h-full flex flex-col transition-all duration-300"
      style={{
        background: '#002248',
        border: '1px solid rgba(254,104,20,0.1)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.25)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.1)';
      }}
    >
      {/* Gold quote mark */}
      <div
        className="text-5xl font-black leading-none mb-4 select-none"
        style={{ fontFamily: 'Syne, sans-serif', color: 'rgba(254,104,20,0.2)' }}
      >
        "
      </div>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-grow mb-6" style={{ color: '#6B8CAE' }}>
        {t.quote}
      </p>

      {/* Stars */}
      <Stars rating={t.rating} />

      {/* Author */}
      <div
        className="flex items-center gap-3 mt-4 pt-4"
        style={{ borderTop: '1px solid rgba(254,104,20,0.08)' }}
      >
        <img
          src={t.avatar}
          alt={t.name}
          className="w-9 h-9 rounded-full object-cover"
          style={{ border: '1px solid rgba(254,104,20,0.2)' }}
        />
        <div>
          <p
            className="text-sm font-bold leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
          >
            {t.name}
          </p>
          <p className="text-xs" style={{ color: '#6B8CAE' }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  </Reveal>
);

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-20 lg:py-32 overflow-hidden"
      style={{ background: '#002248' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(254,104,20,0.04) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">Témoignages</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                Ce que disent{' '}
                <span style={{ color: '#FE6814' }}>nos clients</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#6B8CAE' }}>
              La confiance de nos clients est notre plus belle récompense.
            </p>
          </Reveal>
        </div>

        {/* Cards — 2-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.3), transparent)' }}
      />
    </section>
  );
};

export default TestimonialsSection;
