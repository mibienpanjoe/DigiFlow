export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    subtitle: 'Digital',
    description: 'Propulsez votre marque avec des stratégies ciblées. Nous transformons vos visiteurs en clients fidèles grâce à des campagnes ROIstes.',
    features: ['SEO & SEA', 'Réseaux Sociaux', 'Email Marketing'],
    icon: 'TrendingUp',
  },
  {
    id: 'web',
    title: 'Développement',
    subtitle: 'Web',
    description: 'Des sites ultra-rapides, sécurisés et conçus pour la conversion — de la vitrine élégante aux applications web complexes.',
    features: ['Sites Vitrines & E-commerce', 'Applications React / Vue', 'Maintenance & Sécurité'],
    icon: 'Code2',
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Graphique',
    description: 'Créez une identité visuelle inoubliable. Nous fusionnons l\'art et la stratégie pour des visuels qui marquent les esprits.',
    features: ['Branding & Logos', 'Supports Imprimés', 'UI/UX Design'],
    icon: 'Palette',
  },
  {
    id: 'content',
    title: 'Création de',
    subtitle: 'Contenu',
    description: 'Racontez votre histoire à travers des visuels captivants — production vidéo, photographie professionnelle et motion design.',
    features: ['Montage Vidéo', 'Motion Design', 'Photographie Produit'],
    icon: 'Film',
  },
  {
    id: 'writing',
    title: 'Rédaction',
    subtitle: 'Professionnelle',
    description: 'Les mots justes pour convaincre. Copywriting, storytelling et rédaction web SEO pour une voix unique et percutante.',
    features: ['Copywriting & Slogans', 'Articles Blog SEO', 'Newsletters'],
    icon: 'PenLine',
  },
];
