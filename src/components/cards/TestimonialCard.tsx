import { Quote } from 'lucide-react';
import StarRating from '../ui/StarRating';

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    rating: number;
    quote: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <div className="h-full bg-[#001a33] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-[#FF6F00]/30 transition-colors duration-300">
            {/* Quote Icon Background */}
            <Quote className="absolute -right-4 -top-4 w-24 h-24 text-white/5 rotate-12 group-hover:text-[#FF6F00]/10 transition-colors duration-300" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-6">
                    <img
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#001a33] ring-2 ring-[#FF6F00]/20 group-hover:ring-[#FF6F00] transition-all duration-300"
                        src={testimonial.avatar}
                    />
                    <div>
                        <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-slate-400 text-sm">{testimonial.role}</p>
                        <div className="mt-1">
                            <StarRating rating={testimonial.rating} />
                        </div>
                    </div>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed flex-grow font-light">
                    "{testimonial.quote}"
                </p>

                {/* Decoration */}
                <div className="w-12 h-1 bg-[#FF6F00] rounded-full mt-6 opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
    );
};

export default TestimonialCard;
