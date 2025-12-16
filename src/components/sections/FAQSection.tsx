import FAQCard from '../cards/FAQCard';
import { faqs } from '../../data/faqs';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

import { useState } from 'react';

const FAQSection = () => {
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };
    return (
        <section id="faq" className="relative w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#FF6F00] rounded-full mix-blend-multiply filter blur-[100px] opacity-10" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10" />

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                <Reveal width="100%">
                    <div className="text-center mb-16 space-y-4">
                        <span className="inline-block py-1 px-3 rounded-full bg-[#FF6F00]/10 text-[#FF6F00] text-sm font-semibold tracking-wide uppercase">
                            (FAQ)
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            Vos Questions, <span className="text-[#FF6F00]">Nos Réponses.</span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
                            Découvrez comment DigiFlow transforme votre vision numérique en réalité à travers nos questions les plus fréquentes.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {faqs.map((faq, index) => (
                        <Reveal key={faq.id} delay={index * 0.1} variant="slide-left" width="100%">
                            <FAQCard
                                faq={faq}
                                isFullWidth={index === faqs.length - 1 && faqs.length % 2 !== 0}
                                isActive={activeId === faq.id}
                                onToggle={() => handleToggle(faq.id)}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.4} width="100%">
                    <div className="mt-16 text-center">
                        <p className="text-slate-400 mb-6">Vous avez d'autres questions ?</p>
                        <Button href="#contact" variant="primary" size="lg">
                            Contactez-nous
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FAQSection;
