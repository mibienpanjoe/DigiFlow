import type { Service } from '../components/cards/ServiceCard';

export const services: Service[] = [
    {
        id: 'marketing',
        title: 'Marketing',
        titleItalic: 'Digital',
        description: "Propulsez votre marque avec des stratégies e-commerce ciblées. Nous transformons vos visiteurs en clients fidèles grâce à des campagnes ROIstes et une présence sociale engageante.",
        features: ['SEO / SEA', 'Gestion des Réseaux Sociaux', 'Email Marketing'],
        icon: 'shopping_bag',
    },
    {
        id: 'web-dev',
        title: 'Développement',
        titleItalic: 'Web',
        description: "Des sites web ultra-rapides, sécurisés et conçus pour la conversion. De la vitrine élégante aux applications web complexes, nous codons votre succès pixel par pixel.",
        features: ['Sites Vitrines & E-commerce', 'Applications Web (React/Vue)', 'Maintenance & Sécurité'],
        icon: 'terminal',
    },
    {
        id: 'design',
        title: 'Design',
        titleItalic: 'Graphique',
        description: "Créez une identité visuelle inoubliable. Nous fusionnons l'art et la stratégie pour concevoir des logos, des chartes graphiques et des supports marketing qui marquent les esprits.",
        features: ['Branding & Logos', 'Supports Imprimés', 'UI/UX Design'],
        icon: 'brush',
    },
    {
        id: 'content',
        title: 'Création',
        titleItalic: 'Contenu',
        description: "Racontez votre histoire à travers des visuels captivants. Production vidéo, photographie professionnelle et motion design pour dynamiser votre communication.",
        features: ['Montage Vidéo', 'Motion Design', 'Photographie Produit'],
        icon: 'videocam',
    },
    {
        id: 'writing',
        title: 'Rédaction',
        titleItalic: 'Pro',
        description: "Les mots justes pour convaincre. Copywriting, storytelling et rédaction web SEO pour donner une voix unique et percutante à votre marque.",
        features: ['Copywriting & Slogans', 'Articles de Blog SEO', 'Newsletters'],
        icon: 'edit_note',
    },
];
