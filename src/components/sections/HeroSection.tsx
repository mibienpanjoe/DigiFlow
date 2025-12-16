import { ArrowUpRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import { contact } from '../../constants/theme';
import { Star } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const HeroSection = () => {
    return (
        <section id="home" className="relative z-10 pt-24 pb-12 lg:pt-28 lg:pb-20 flex flex-col justify-center min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Reveal width="100%">
                    <div className="flex justify-center">
                        <Badge icon={<Star className="w-3 h-3 sm:w-4 sm:h-4" />} showPing className="mb-6 sm:mb-8 animate-fade-in-up text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-1.5 whitespace-nowrap">
                            Expertise Digitale au Burkina Faso
                        </Badge>
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                        <span className="block text-white drop-shadow-sm">Agence</span>
                        <span className="block text-[#FF6F00] text-glow relative z-10">Digitale</span>
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.4}>
                    <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300/80 leading-relaxed font-light">
                        Boostez votre visibilité grâce à notre expertise. Nous créons des expériences web innovantes et sur-mesure pour propulser votre entreprise à Ouagadougou et au-delà.
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.6}>
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href={contact.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                            size="lg"
                            icon={<WhatsAppIcon />}
                            iconPosition="left"
                            className="w-full sm:w-auto hover:!bg-[#25D366] hover:!border-[#25D366] group"
                        >
                            Discutez
                        </Button>

                        <Button
                            href="#services"
                            variant="gradient"
                            size="lg"
                            icon={
                                <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                                </div>
                            }
                            className="w-full sm:w-auto group pr-3 pl-6"
                        >
                            Nos services
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default HeroSection;
