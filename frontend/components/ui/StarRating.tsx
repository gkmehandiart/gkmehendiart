'use client';

import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
    rating?: number;
    className?: string;
    ariaLabel?: string;
}

export default function StarRating({ rating = 5, className = 'text-gold text-xs', ariaLabel }: StarRatingProps) {
    return (
        <div
            className={`flex gap-0.5 ${className}`}
            aria-label={ariaLabel || `${rating} out of 5 stars`}
        >
            {Array.from({ length: rating }, (_, i) => (
                <FaStar key={i} />
            ))}
        </div>
    );
}
