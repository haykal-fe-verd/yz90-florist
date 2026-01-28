/** biome-ignore-all lint/suspicious/noArrayIndexKey: <array> */

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { RatingStars } from "@/components/rating-stars";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { type Testimonial, testimonials } from "@/lib/testimonials";
import { getInitials } from "@/lib/utils";

interface TestimonialCarouselProps {
    className?: string;
}

export function TestimonialCarousel({ className = "" }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-full px-4">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg hover:bg-secondary hidden md:flex"
                onClick={goToPrevious}
                aria-label="Previous testimonial">
                <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg hover:bg-secondary hidden md:flex"
                onClick={goToNext}
                aria-label="Next testimonial">
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? "w-6 bg-primary"
                                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <Card className="mx-auto max-w-2xl border-0 bg-secondary/30">
            <CardContent className="p-8">
                <Quote className="mb-4 h-8 w-8 text-primary/30" />
                <p className="mb-6 text-lg leading-relaxed text-foreground">"{testimonial.review}"</p>
                <div className="flex items-center gap-4">
                    <Avatar size="lg">
                        <AvatarImage src={testimonial.avatar ?? undefined} />
                        <AvatarFallback>{getInitials(testimonial.name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                            {testimonial.role} • {testimonial.category}
                        </p>
                    </div>
                    <RatingStars rating={testimonial.rating} showCount={false} size="sm" />
                </div>
            </CardContent>
        </Card>
    );
}
