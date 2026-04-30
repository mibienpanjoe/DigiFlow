export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Pourquoi choisir DigiFlow plutôt qu\'une agence internationale ?',
    answer: 'Parce que nous connaissons vos clients mieux que quiconque. Expertise locale, compréhension du marché burkinabè, prix compétitifs et réactivité en temps réel en français. Une agence internationale ne comprendra jamais votre contexte comme nous le faisons.',
  },
  {
    id: '2',
    question: 'Comment démarrer un projet avec DigiFlow ?',
    answer: 'Simple : contactez-nous via WhatsApp ou notre formulaire. Nous vous répondons dans les 24h et organisons un appel découverte gratuit pour comprendre vos besoins, puis vous soumettons une proposition sur mesure.',
  },
  {
    id: '3',
    question: 'Quel est le coût d\'un site web professionnel ?',
    answer: 'Le coût dépend de la complexité du projet. Nous proposons des solutions adaptées à tous les budgets, des sites vitrines aux applications web complexes. Contactez-nous pour un devis gratuit sans engagement.',
  },
  {
    id: '4',
    question: 'Quel est le délai de livraison moyen ?',
    answer: 'Un site vitrine est livré en 2 à 4 semaines. Les projets plus complexes prennent 6 à 12 semaines selon les spécifications. Nous respectons toujours les délais convenus.',
  },
  {
    id: '5',
    question: 'Où est basée l\'agence DigiFlow ?',
    answer: 'DigiFlow est basée à Koudougou et Ouagadougou, au Burkina Faso. Nous servons des clients locaux et internationaux avec la même exigence et réactivité.',
  },
  {
    id: '6',
    question: 'Proposez-vous des services de maintenance ?',
    answer: 'Oui, nous proposons des contrats de maintenance couvrant mises à jour, sécurité, sauvegardes et support technique. Votre site reste toujours performant.',
  },
];
