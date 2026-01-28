import { Link } from "@tanstack/react-router";
import { Eye } from "lucide-react";
import { PriceTag } from "@/components/price-tag";
import { RatingStars } from "@/components/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/products";

interface ProductCardProps {
    product: Product;
    className?: string;
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
    return (
        <Link to="/katalog/$slug" params={{ slug: product.slug }} className="block">
            <Card
                className={`group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
                <div className="relative aspect-square overflow-hidden">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isBestSeller && (
                            <Badge className="bg-primary text-primary-foreground">Best Seller</Badge>
                        )}
                        {product.isNew && (
                            <Badge variant="secondary" className="bg-accent text-accent-foreground">
                                Baru
                            </Badge>
                        )}
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Button className="w-full" size="sm" asChild>
                            <span>
                                <Eye className="mr-2 h-4 w-4" />
                                Lihat Detail
                            </span>
                        </Button>
                    </div>
                </div>
                <CardContent className="p-4">
                    <div className="mb-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                            {product.name}
                        </h3>
                    </div>
                    <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="sm" className="mb-3" />
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs text-muted-foreground mb-1">Mulai dari</p>
                            <PriceTag price={product.price} originalPrice={product.originalPrice} size="sm" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
