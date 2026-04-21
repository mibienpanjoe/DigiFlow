export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Issouf Traoré',
    role: 'PDG',
    company: 'BF Commerce Group',
    quote: 'DigiFlow a transformé notre présence digitale en quelques semaines. Les résultats ont dépassé toutes nos attentes. Une équipe locale qui comprend vraiment nos besoins.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: '2',
    name: 'Aïssata Kaboré',
    role: 'Directrice Marketing',
    company: 'Savane Mode',
    quote: 'Notre identité visuelle a été complètement repensée. Les visuels créés pour nos réseaux sociaux génèrent un engagement exceptionnel. Je recommande vivement.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: '3',
    name: 'Samuel Ouédraogo',
    role: 'Fondateur',
    company: 'Tech Afrique Hub',
    quote: 'De la conception au déploiement, DigiFlow a été un partenaire exceptionnel. Notre application tourne parfaitement et l\'expérience utilisateur est remarquable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
  },
  {
    id: '4',
    name: 'Mariam Diallo',
    role: 'Gérante',
    company: 'Hôtel Laïco Ouaga 2000',
    quote: 'Le contenu vidéo produit pour notre hôtel est d\'une qualité internationale. DigiFlow a su capturer l\'âme de notre établissement avec une créativité remarquable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face',
  },
];
