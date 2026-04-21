export interface Project {
  id: number;
  client: string;
  category: string;
  description: string;
  result: string;
  resultLabel: string;
  year: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    client: 'Brasserie du Faso',
    category: 'E-commerce & Marketing Digital',
    description: 'Refonte complète de la présence en ligne avec une stratégie digitale intégrée et campagnes de conversion ciblées.',
    result: '+340%',
    resultLabel: 'de ventes en ligne',
    year: '2024',
    gradientFrom: '#3D1200',
    gradientVia: '#8B3200',
    gradientTo: '#1A0800',
  },
  {
    id: 2,
    client: 'Tech Afrique Hub',
    category: 'Identité Visuelle & Application Web',
    description: 'Création d\'une identité de marque forte et développement d\'une plateforme communautaire innovante pour l\'écosystème tech.',
    result: '5 000+',
    resultLabel: 'utilisateurs au lancement',
    year: '2024',
    gradientFrom: '#0A2550',
    gradientVia: '#1A4280',
    gradientTo: '#051830',
  },
  {
    id: 3,
    client: 'Radio Savane FM',
    category: 'Motion Design & Réseaux Sociaux',
    description: 'Production de contenus animés et gestion de communauté multi-plateforme pour la radio la plus écoutée du Burkina.',
    result: '1,2M',
    resultLabel: 'réactions en 3 mois',
    year: '2023',
    gradientFrom: '#2E0A0A',
    gradientVia: '#4A1515',
    gradientTo: '#1A0505',
  },
];
