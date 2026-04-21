import { ArrowUp } from 'lucide-react';
import { footerQuickLinks, footerServiceLinks, legalLinks } from '../../data/navigation';
import { contact } from '../../constants/theme';

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#010B1A', borderTop: '1px solid rgba(254,104,20,0.15)' }}
    >
      {/* Gold top strip */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FE6814, transparent)' }}
      />

      {/* Background watermark */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(6rem, 20vw, 16rem)',
          fontWeight: 900,
          color: 'rgba(254,104,20,0.025)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        DigiFlow
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">

          {/* Brand col */}
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-1 items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center p-0.5 ring-1 ring-gold/20">
                <img src="/logo.svg" alt="DigiFlow" className="h-full w-full object-contain" />
              </div>
              <span
                className="font-black text-lg tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif', color: '#F0F4FF' }}
              >
                DigiFlow
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-[220px]" style={{ color: '#6B8CAE' }}>
              Partenaire digital professionnel au Burkina Faso. Nous transformons vos visions en solutions numériques d'excellence.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              {[
                { label: 'WhatsApp', href: 'https://wa.me/22666220025' },
                { label: 'Facebook', href: '#' },
                { label: 'Instagram', href: '#' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    border: '1px solid rgba(254,104,20,0.15)',
                    color: '#6B8CAE',
                    background: 'transparent',
                  }}
                  title={s.label}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.5)';
                    (e.currentTarget as HTMLElement).style.color = '#FE6814';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(254,104,20,0.15)';
                    (e.currentTarget as HTMLElement).style.color = '#6B8CAE';
                  }}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs transition-colors duration-300"
                    style={{ color: '#6B8CAE' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F4FF'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B8CAE'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs transition-colors duration-300"
                    style={{ color: '#6B8CAE' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F4FF'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B8CAE'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs" style={{ color: '#6B8CAE' }}>
              <li>{contact.address.city}, {contact.address.country}</li>
              {contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, '')}`}
                    style={{ color: '#6B8CAE' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FE6814'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B8CAE'; }}
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  style={{ color: '#6B8CAE' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#FE6814'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B8CAE'; }}
                >
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5"
          style={{ borderTop: '1px solid rgba(254,104,20,0.08)' }}
        >
          <p className="text-xs order-2 sm:order-1" style={{ color: '#6B8CAE' }}>
            © {new Date().getFullYear()} DigiFlow. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 order-1 sm:order-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs transition-colors"
                style={{ color: '#6B8CAE' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F0F4FF'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#6B8CAE'; }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Syne, sans-serif', color: '#FE6814' }}
            >
              Haut
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
