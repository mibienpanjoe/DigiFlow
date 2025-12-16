import { Star } from 'lucide-react';

interface StarRatingProps {
    rating: number;
    maxRating?: number;
    className?: string;
}

const StarRating = ({ rating, maxRating = 5, className = '' }: StarRatingProps) => {
    return (
        <div className={`flex text-[#FF6F00] ${className}`}>
            {Array.from({ length: maxRating }, (_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= Math.floor(rating);
                const isHalf = !isFilled && starValue === Math.ceil(rating) && rating % 1 !== 0;

                return (
                    <span key={index} className="relative">
                        {isFilled ? (
                            <Star className="w-5 h-5 fill-current" />
                        ) : isHalf ? (
                            <div className="relative">
                                <Star className="w-5 h-5 text-[#FF6F00]/30" />
                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                    <Star className="w-5 h-5 fill-current text-[#FF6F00]" />
                                </div>
                            </div>
                        ) : (
                            <Star className="w-5 h-5 text-[#FF6F00]/30" />
                        )}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
