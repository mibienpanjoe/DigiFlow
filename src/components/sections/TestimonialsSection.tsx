import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import Reveal from '../ui/Reveal';

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal width="100%">
                    <div className="text-center mb-16 space-y-4">
                        <h3 className="text-[#FF6F00] font-bold tracking-widest uppercase text-xs sm:text-sm">
                            Témoignages
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Ce que disent nos clients.
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Les retours de nos clients reflètent notre engagement envers l'excellence numérique et l'innovation technologique à Ouagadougou.
                        </p>
                    </div>
                </Reveal>

                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className="min-w-[90vw] md:min-w-0 snap-center">
                            <Reveal delay={index * 0.1} variant="fade-up" width="100%">
                                <TestimonialCard testimonial={testimonial} />
                            </Reveal>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
