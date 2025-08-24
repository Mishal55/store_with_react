import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  reviewCount: number;
  animated?: boolean;
  showReviewCount?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ReviewStars: React.FC<ReviewStarsProps> = ({
  rating,
  reviewCount,
  animated = false,
  showReviewCount = true,
  size = 'md',
}) => {
  const [animatedRating, setAnimatedRating] = useState(0);

  useEffect(() => {
    if (animated) {
      const step = rating / 10;
      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= rating) {
          setAnimatedRating(rating);
          clearInterval(interval);
        } else {
          setAnimatedRating(current);
        }
      }, 30);
      return () => clearInterval(interval);
    } else {
      setAnimatedRating(rating);
    }
  }, [rating, animated]);

  const sizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Rated ${rating.toFixed(1)} out of 5 stars`}
      role="img"
    >
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          const isFilled = i < Math.floor(animatedRating);
          const isPartial =
            i === Math.floor(animatedRating) && animatedRating % 1 !== 0;

          return (
            <div key={i} className="relative">
              <Star
                className={`${sizeClasses[size]} text-muted-foreground transition-transform duration-300 ${
                  animated ? 'hover:scale-110' : ''
                }`}
              />
              {(isFilled || isPartial) && (
                <Star
                  className={`${sizeClasses[size]} absolute top-0 left-0 fill-golden text-golden transition-opacity duration-500`}
                  style={{
                    clipPath: isPartial
                      ? `inset(0 ${100 - (animatedRating % 1) * 100}% 0 0)`
                      : 'none',
                    opacity: isFilled ? 1 : 0.8,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {showReviewCount && (
        <span
          className={`${textSizeClasses[size]} text-muted-foreground hover:text-foreground transition-colors`}
        >
          {rating.toFixed(1)} <span className="text-xs">({reviewCount.toLocaleString()} reviews)</span>
        </span>
      )}
    </div>
  );
};

export default ReviewStars;
