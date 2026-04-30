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
    title: 'Plus de clients',
    subtitle: 'via Facebook',
    description: 'Nous gérons votre page Facebook pour transformer vos abonnés en clients payants — publications, publicités ciblées et croissance d\'audience pilotées par les résultats.',
    features: ['Publication & Planification', 'Croissance d\'audience', 'Conversion & Ventes'],
    icon: 'Share2',
  },
  {
    id: 'web',
    title: 'Sites web',
    subtitle: 'qui convertissent',
    description: 'Des sites ultra-rapides, sécurisés et conçus pour vendre — de la vitrine élégante aux applications e-commerce complexes, chaque page est optimisée pour transformer vos visiteurs en clients.',
    features: ['Sites Vitrines & E-commerce', 'Applications React / Vue', 'Maintenance & Sécurité'],
    icon: 'Code2',
  },
  {
    id: 'design',
    title: 'Une identité visuelle',
    subtitle: 'qui marque',
    description: 'Votre marque mérite d\'être mémorisée du premier coup. Nous créons des identités visuelles qui inspirent confiance, attirent l\'œil et font vendre — logos, chartes graphiques et visuels réseaux.',
    features: ['Branding & Logos', 'Supports Imprimés', 'UI/UX Design'],
    icon: 'Palette',
  },
  {
    id: 'content',
    title: 'Vidéos publicitaires',
    subtitle: 'qui vendent',
    description: 'Des vidéos percutantes qui mettent vos produits sous leur meilleur jour — spots promotionnels, contenu UGC généré par IA et motion design pour maximiser votre portée et déclencher l\'achat.',
    features: ['Spots Publicitaires', 'UGC Vidéo par IA', 'Montage & Motion Design'],
    icon: 'Film',
  },
  {
    id: 'apps',
    title: 'Applications métier',
    subtitle: 'sur mesure',
    description: 'Nous concevons des logiciels adaptés aux besoins réels de votre entreprise — système de gestion scolaire, tableau de bord métier ou plateforme web personnalisée pour gagner du temps et piloter votre activité.',
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
