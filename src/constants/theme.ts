export const colors = {
  primary: {
    DEFAULT: '#FF6F00',
    hover: '#ff8534',
    light: 'rgba(255, 111, 0, 0.1)',
    medium: 'rgba(255, 111, 0, 0.2)',
    glow: 'rgba(255, 111, 0, 0.5)',
    glowStrong: 'rgba(255, 111, 0, 0.7)',
  },
  navy: {
    900: '#001529',
    700: '#003F6B',
    500: '#64748b',
  },
  orange: {
    300: '#FFC499',
    600: '#FF6F00',
  },
  background: {
    light: '#F8FAFC',
    dark: '#001529',
    card: '#003F6B',
  },
  text: {
    primary: {
      light: '#0F172A',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#475569',
      dark: '#94A3B8',
    },
    muted: '#9E9E9E',
  },
  border: {
    light: 'rgba(255, 255, 255, 0.1)',
    accent: '#FFC499',
    subtle: 'rgba(255, 255, 255, 0.08)',
  },
  gray: {
    100: '#F3F4F6',
    200: '#E2E8F0',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
  },
} as const;

export const typography = {
  fontFamily: {
    display: "'Plus Jakarta Sans', sans-serif",
    body: "'Plus Jakarta Sans', sans-serif",
  },
} as const;

export const spacing = {
  section: {
    x: 'px-4 sm:px-6 lg:px-8',
    y: 'py-16 lg:py-24',
  },
  container: 'max-w-7xl mx-auto',
  containerNarrow: 'max-w-5xl mx-auto',
  containerText: 'max-w-2xl mx-auto',
} as const;

export const animation = {
  transition: {
    fast: 'transition-all duration-200 ease-out',
    default: 'transition-all duration-300 ease-out',
    slow: 'transition-all duration-500 ease-out',
  },
  hover: {
    lift: 'hover:-translate-y-0.5',
    liftMore: 'hover:-translate-y-2',
    scale: 'hover:scale-105',
    scaleSmall: 'hover:scale-102',
  },
} as const;

export const contact = {
  whatsapp: '+226 66220025',
  whatsappLink: 'https://wa.me/22666220025',
  phones: ['+226 74 59 50 61', '+226 74 51 48 82'],
  email: 'contact@digiflow.bf',
  address: {
    city: 'Koudougou/Ouagadougou',
    country: 'Burkina Faso',
  },
} as const;

export const socialLinks = {
  facebook: '#',
  linkedin: '#',
  instagram: '#',
  whatsapp: 'https://wa.me/22666220025',
} as const;
