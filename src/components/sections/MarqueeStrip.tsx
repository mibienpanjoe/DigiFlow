const items = [
  'Marketing Digital',
  'Développement Web',
  'Design Graphique',
  'Création Contenu',
  'Rédaction Pro',
  'Branding',
  'SEO & SEA',
  'Motion Design',
];

const Diamond = () => (
  <span
    className="inline-block w-1.5 h-1.5 rotate-45 mx-5 shrink-0"
    style={{ background: '#FE6814', opacity: 0.6 }}
  />
);

const MarqueeStrip = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: '1px solid rgba(254,104,20,0.15)',
        borderBottom: '1px solid rgba(254,104,20,0.15)',
        background: '#002248',
      }}
    >
      {/* Edge fade masks */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to right, #002248, transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(to left, #002248, transparent)' }}
      />

      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-sm font-semibold uppercase tracking-widest"
              style={{ fontFamily: 'Syne, sans-serif', color: '#6B8CAE' }}
            >
              {item}
            </span>
            <Diamond />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
