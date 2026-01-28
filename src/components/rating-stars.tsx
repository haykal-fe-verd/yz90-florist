/** biome-ignore-all lint/suspicious/noArrayIndexKey: <array of index> */

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    rating: number;
    reviewCount?: number;
    showCount?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function RatingStars({ rating, reviewCount, showCount = true, size = "md", className = "" }: Props) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    const sizeClasses = {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5",
    };

    const textSizeClasses = {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
    };

    return (
        <div className={cn("flex items-center gap-1", className)}>
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        className={cn(
                            sizeClasses[size],
                            index < fullStars
                                ? "fill-amber-400 text-amber-400"
                                : index === fullStars && hasHalfStar
                                  ? "fill-amber-400/50 text-amber-400"
                                  : "fill-muted text-muted",
                        )}
                    />
                ))}
            </div>
            <span className={cn("font-medium", textSizeClasses[size])}>{rating.toFixed(1)}</span>
            {showCount && reviewCount !== undefined && (
                <span className={cn("text-muted-foreground", textSizeClasses[size])}>({reviewCount})</span>
            )}
        </div>
    );
}
