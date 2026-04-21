export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  whatsapp: string;
}

export const team: TeamMember[] = [
  {
    id: 'marius',
    name: 'Marius',
    role: 'PDG & Expert Marketing Digital',
    image: '/images/Marius_opt.webp',
    whatsapp: 'https://wa.me/22674514882',
  },
  {
    id: 'damiba',
    name: 'Damiba',
    role: 'Expert Infographiste',
    image: '/images/Damiba_opt.webp',
    whatsapp: 'https://wa.me/22651717121',
  },
  {
    id: 'joseph',
    name: 'Joseph',
    role: 'Développeur Web & Monteur Vidéo',
    image: '/images/Joseph_opt.webp',
    whatsapp: 'https://wa.me/22666220025',
  },
  {
    id: 'gloria',
    name: 'Gloria',
    role: 'Communication & Voice-Over',
    image: '/images/Gloria_opt.webp',
    whatsapp: 'https://wa.me/22674595061',
  },
  {
    id: 'achille',
    name: 'Achille',
    role: 'Rédacteur & Chef de Projet',
    image: '/images/Achille_opt.webp',
    whatsapp: 'https://wa.me/22656361920',
  },
];
