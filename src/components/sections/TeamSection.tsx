import { team } from '../../data/team';
import Reveal from '../ui/Reveal';

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 60% at 50% 80%, rgba(254,104,20,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <Reveal>
            <div>
              <span className="section-label block mb-3">L'Équipe</span>
              <h2
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                Les experts{' '}
                <span style={{ color: '#FE6814' }}>derrière</span>
                <br />votre succès
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#6B8CAE' }}>
              Une équipe soudée, passionnée par l'innovation numérique à Ouagadougou.
            </p>
          </Reveal>
        </div>

        {/* Team cards — horizontal scroll on mobile, 5-col grid on desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-6 px-6 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-5 md:gap-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
          {team.map((member, i) => (
            <div key={member.id} className="min-w-[72vw] sm:min-w-[50vw] md:min-w-0 snap-center">
              <Reveal delay={i * 0.08} width="100%">
                <div className="group relative overflow-hidden rounded-xl cursor-default">
                  {/* Photo */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />

                    {/* WhatsApp button */}
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      style={{
                        background: '#25D366',
                        color: 'white',
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <WhatsAppIcon />
                    </a>

                    {/* Bottom overlay */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400"
                      style={{
                        background: 'linear-gradient(to top, rgba(10,7,5,0.95) 0%, transparent 100%)',
                      }}
                    >
                      <p
                        className="text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Name */}
                  <div
                    className="py-3 px-1"
                    style={{ borderTop: '1px solid rgba(254,104,20,0.1)' }}
                  >
                    <h3
                      className="font-bold text-sm transition-colors group-hover:text-gold"
                      style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
                    >
                      {member.name}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: '#6B8CAE' }}>
                      {member.role.split('&')[0].trim()}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
