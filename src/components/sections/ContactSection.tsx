import { type FormEvent, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contact } from '../../constants/theme';
import Reveal from '../ui/Reveal';

const inputBase: React.CSSProperties = {
  background: 'rgba(254,104,20,0.03)',
  border: '1px solid rgba(254,104,20,0.15)',
  borderRadius: '10px',
  color: '#F0F4FF',
  outline: 'none',
  width: '100%',
  fontSize: '0.875rem',
  padding: '12px 14px',
  transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Syne, sans-serif',
  fontSize: '0.6875rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#6B8CAE',
  display: 'block',
  marginBottom: '6px',
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const mailto = `mailto:${contact.email}?subject=Nouveau projet de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
    setSubmitting(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const infoItems = [
    {
      icon: MapPin,
      label: 'Notre Adresse',
      content: `${contact.address.city}, ${contact.address.country}`,
      href: undefined,
    },
    {
      icon: Phone,
      label: 'Hotline',
      content: contact.phones.join(' · '),
      href: `tel:${contact.phones[0].replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      content: contact.email,
      href: `mailto:${contact.email}`,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-20 lg:py-32 overflow-hidden"
      style={{ background: '#002248' }}
    >
      <div
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(254,104,20,0.12) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(254,104,20,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          {/* Left: Info */}
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <span className="section-label block mb-3">Contact</span>
                <h2
                  className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-tight leading-tight"
                  style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
                >
                  Prêt à démarrer{' '}
                  <span style={{ color: '#FE6814' }}>votre projet ?</span>
                </h2>
                <p className="text-sm leading-relaxed mt-4 max-w-xs" style={{ color: '#6B8CAE' }}>
                  Dites-nous votre projet. Nous vous répondons dans les 24h avec une proposition gratuite et sans engagement.
                </p>
              </div>
            </Reveal>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {infoItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={0.1 + i * 0.1}>
                    <div
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                      style={{
                        background: '#010B1A',
                        border: '1px solid rgba(254,104,20,0.1)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.3)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.1)';
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(254,104,20,0.08)', border: '1px solid rgba(254,104,20,0.15)' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: '#FE6814' } as React.CSSProperties} />
                      </div>
                      <div>
                        <p style={labelStyle}>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium transition-colors"
                            style={{ color: '#F0F4FF' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FE6814'; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F4FF'; }}
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-sm font-medium" style={{ color: '#F0F4FF' }}>{item.content}</p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <Reveal delay={0.4}>
              <a
                href="https://wa.me/22666220025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  background: 'rgba(37,211,102,0.1)',
                  border: '1px solid rgba(37,211,102,0.3)',
                  color: '#25D366',
                }}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Écrire sur WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Right: Form */}
          <Reveal delay={0.2} direction="right" width="100%">
            <div
              className="rounded-2xl p-7 md:p-9"
              style={{
                background: '#010B1A',
                border: '1px solid rgba(254,104,20,0.15)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(254,104,20,0.1)', border: '1px solid rgba(254,104,20,0.3)' }}
                  >
                    <Mail className="w-6 h-6" style={{ color: '#FE6814' } as React.CSSProperties} />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
                  >
                    Message envoyé !
                  </h3>
                  <p className="text-sm mb-6" style={{ color: '#6B8CAE' }}>
                    Votre client email devrait s'ouvrir. Sinon, écrivez-nous directement à{' '}
                    <a href={`mailto:${contact.email}`} style={{ color: '#FE6814' }}>
                      {contact.email}
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold transition-colors"
                    style={{ color: 'rgba(254,104,20,0.7)', fontFamily: 'Syne, sans-serif' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FE6814'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(254,104,20,0.7)'; }}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label style={labelStyle}>Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom complet"
                      required
                      style={inputBase}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.5)'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.15)'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nom@entreprise.com"
                      required
                      style={inputBase}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.5)'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.15)'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+226 XX XX XX XX"
                      style={inputBase}
                      onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.5)'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'rgba(254,104,20,0.15)'; }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet..."
                      required
                      rows={4}
                      style={{ ...inputBase, resize: 'vertical', minHeight: '110px' }}
                      onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(254,104,20,0.5)'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'rgba(254,104,20,0.15)'; }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      background: '#FE6814',
                      color: '#ffffff',
                    }}
                  >
                    {submitting ? 'Envoi...' : 'Envoyer mon projet →'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
