import { Award, Building2, Flower2, Gift, Heart, type LucideIcon } from "lucide-react";

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon: LucideIcon;
    image: string;
    productCount: number;
}

export const categories: Category[] = [
    {
        id: "1",
        name: "Wedding",
        slug: "wedding",
        description: "Papan bunga untuk momen pernikahan yang spesial",
        icon: Heart,
        image: "https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=400&h=300&fit=crop",
        productCount: 5,
    },
    {
        id: "2",
        name: "Grand Opening",
        slug: "grand-opening",
        description: "Papan bunga untuk pembukaan usaha baru",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop",
        productCount: 4,
    },
    {
        id: "3",
        name: "Duka Cita",
        slug: "duka-cita",
        description: "Papan bunga untuk penghormatan terakhir",
        icon: Flower2,
        image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop",
        productCount: 4,
    },
    {
        id: "4",
        name: "Ucapan Selamat",
        slug: "ucapan-selamat",
        description: "Papan bunga untuk berbagai ucapan selamat",
        icon: Award,
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop",
        productCount: 4,
    },
    {
        id: "5",
        name: "Akrilik",
        slug: "akrilik",
        description: "Papan bunga dengan bahan akrilik modern",
        icon: Gift,
        image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop",
        productCount: 4,
    },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
    return categories.find((c) => c.slug === slug);
};
