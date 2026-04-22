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
    id: 'facebook',
    title: 'Gestion de page',
    subtitle: 'Facebook',
    description: 'Nous gérons la page Facebook de votre entreprise ou boutique pour attirer plus de visiteurs, engager votre communauté et transformer les abonnés en clients.',
    features: ['Publication & Planification', 'Croissance d\'audience', 'Conversion & Ventes'],
    icon: 'Share2',
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
    title: 'Création de Vidéo',
    subtitle: 'Publicitaire',
    description: 'Nous créons des vidéos publicitaires percutantes pour mettre en valeur vos produits ou services — du spot promotionnel au contenu UGC généré par IA pour maximiser votre portée.',
    features: ['Spots Publicitaires', 'UGC Vidéo par IA', 'Montage & Motion Design'],
    icon: 'Film',
  },
  {
    id: 'apps',
    title: 'Applications',
    subtitle: 'Sur Mesure',
    description: 'Nous concevons des logiciels et applications adaptés aux besoins internes de votre entreprise — système de gestion scolaire, tableau de bord métier ou plateforme web personnalisée.',
    features: ['Systèmes de Gestion', 'Applications Web Métier', 'Tableaux de Bord & Reporting'],
    icon: 'Cpu',
  },
  {
    id: 'writing',
    title: 'Rédaction de',
    subtitle: 'Mémoire',
    description: 'Nous accompagnons les étudiants dans la rédaction de leur mémoire de fin d\'études — structure, argumentation et mise en forme pour un travail qui convaincra le jury.',
    features: ['Rédaction & Structure', 'Recherche Documentaire', 'Correction & Mise en Forme'],
    icon: 'PenLine',
  },
];
