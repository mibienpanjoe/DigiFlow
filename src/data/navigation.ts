export interface NavLink {
    label: string;
    href: string;
}

export const mainNavLinks: NavLink[] = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Équipe', href: '#team' },
    { label: 'Contact', href: '#contact' },
];

export const footerQuickLinks: NavLink[] = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'À propos', href: '#about' },
    { label: 'Équipe', href: '#team' },
    { label: 'Contact', href: '#contact' },
];

export const footerServiceLinks: NavLink[] = [
    { label: 'Marketing Digital', href: '#services' },
    { label: 'Création de Contenu', href: '#services' },
    { label: 'Design Graphique', href: '#services' },
    { label: 'Rédaction Pro', href: '#services' },
    { label: 'E-Commerce', href: '#services' },
    { label: 'Développement Web', href: '#services' },
];

export const legalLinks: NavLink[] = [
    { label: 'Mentions légales', href: '#' },
    { label: 'Politique de confidentialité', href: '#' },
];
