import { useState } from 'react';
import ServiceCard from '../cards/ServiceCard';
import { services } from '../../data/services';
import Reveal from '../ui/Reveal';

const ServicesSection = () => {
    const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setActiveServiceId(activeServiceId === id ? null : id);
    };

    return (
        <section id="services" className="relative py-12 lg:py-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <Reveal width="100%">
                    <div className="text-center mb-16 flex items-center justify-center gap-4">
                        <span className="text-[#FF6F00] text-xl">❖</span>
                        <h2 className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] text-white">
                            Nos Services
                        </h2>
                        <span className="text-[#FF6F00] text-xl">❖</span>
                    </div>
                </Reveal>

                <div className="flex flex-col border-t border-white/20">
                    {services.map((service, index) => (
                        <Reveal key={service.id} width="100%" delay={index * 0.1} variant="slide-left">
                            <ServiceCard
                                service={service}
                                isActive={activeServiceId === service.id}
                                onToggle={() => handleToggle(service.id)}
                                isAnyActive={activeServiceId !== null}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
