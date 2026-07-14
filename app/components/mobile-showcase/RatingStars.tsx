import { StarIcon } from "./icons";
import { shop } from "./theme";

interface RatingStarsProps {
  rating: number;
  reviewCount: number;
}

export default function RatingStars({ rating, reviewCount }: RatingStarsProps) {
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-1.5 mt-1.5">
      <div className={`flex gap-0.5 ${shop.accent}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="w-3 h-3">
            <StarIcon filled={i < filled} />
          </span>
        ))}
      </div>
      <span className={`${shop.muted} text-[10px]`}>
        {rating} ({reviewCount})
      </span>
    </div>
  );
}
