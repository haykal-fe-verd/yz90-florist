import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import type { Category } from "@/lib/categories";

interface CategoryCardProps {
    category: Category;
    className?: string;
}

export function CategoryCard({ category, className = "" }: CategoryCardProps) {
    const Icon = category.icon;

    return (
        <Link to="/katalog" search={{ categories: [category.slug] }}>
            <Card
                className={`group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
                <div className="relative aspect-4/3 overflow-hidden">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                                <Icon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">{category.name}</h3>
                                <p className="text-xs text-muted-foreground">{category.productCount} Produk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
