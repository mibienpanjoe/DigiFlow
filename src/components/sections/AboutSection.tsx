import { BadgeCheck, ArrowUpRight } from 'lucide-react';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import CountUp from '../ui/CountUp';

const stats = [
    { value: 10, suffix: 'M+', label: 'Réactions & Trafic' },
    { value: 99, suffix: '%', label: 'Satisfaction Clients' },
    { value: 325, suffix: '+', label: 'Projets Réalisés' },
];

const AboutSection = () => {
    return (
        <section id="about" className="relative py-12 lg:py-20 overflow-hidden">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FF6F00]/10 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-14 max-w-[1080px] mx-auto">
                    <Reveal>
                        <div className="flex justify-center">
                            <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-white/10 bg-black/30 backdrop-blur-md px-5 shadow-lg">
                                <BadgeCheck className="w-[18px] h-[18px] text-[#FF6F00]" />
                                <p className="text-white/90 text-sm font-medium leading-normal tracking-wide">À Propos de Nous</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="flex flex-col gap-6 text-center max-w-[900px]">
                            <h2 className="text-white tracking-tight text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2]">
                                Bâtie sur la créativité et l'excellence,{' '}
                                <span className="text-[#FF6F00] text-glow">DigiFlow</span>{' '}
                                est une équipe dynamique d'experts engagés à obtenir des résultats exceptionnels pour la transformation digitale au Burkina Faso...
                            </h2>
                        </div>
                    </Reveal>

                    <div className="w-full py-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
                            {stats.map((stat, index) => (
                                <Reveal key={stat.label} delay={0.3 + (index * 0.1)} variant="zoom-in" width="100%">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="text-5xl md:text-6xl font-bold text-[#FF6F00] text-glow font-display">
                                            <CountUp to={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <div className="w-12 h-1 bg-[#FF6F00]/30 rounded-full" />
                                        <p className="text-lg text-slate-300 font-medium tracking-wide uppercase">{stat.label}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <Reveal delay={0.6}>
                        <div className="flex justify-center pt-2">
                            <Button
                                href="#contact"
                                variant="primary"
                                size="lg"
                                icon={<ArrowUpRight className="w-5 h-5" />}
                                className="group relative overflow-hidden"
                            >
                                <span>Prendre Rendez-vous</span>
                                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full skew-x-12" />
                            </Button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
