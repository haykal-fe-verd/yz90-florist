/** biome-ignore-all lint/suspicious/noArrayIndexKey: <idk> */

import { createFileRoute, stripSearchParams } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-adapter";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { categories } from "@/lib/categories";
import { cities } from "@/lib/cities";
import { APP_DESCRIPTION, APP_NAME, ITEMS_PER_PAGE, SIZES, SORT_OPTIONS } from "@/lib/constants";
import { products } from "@/lib/products";
import { type KatalogSearchParams, katalogSearchParamsSchema } from "@/schemas/katalog-schema";

const defaultValues: Partial<KatalogSearchParams> = {
    categories: [],
    minPrice: 0,
    maxPrice: 500000,
    sizes: [],
    city: "",
    sortBy: "terlaris",
    searchQuery: "",
    page: 1,
};

export const Route = createFileRoute("/katalog/")({
    component: KatalogRoute,
    validateSearch: zodValidator(katalogSearchParamsSchema),
    search: {
        middlewares: [stripSearchParams(defaultValues)],
    },
    head: () => ({
        meta: [
            {
                title: `${APP_NAME} - Katalog Produk`,
            },
            {
                name: "description",
                content: APP_DESCRIPTION,
            },
            // Open Graph
            { property: "og:title", content: APP_NAME },
            { property: "og:description", content: APP_DESCRIPTION },
            { property: "og:image", content: "/logo.webp" },
            { property: "og:type", content: "article" },

            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: APP_NAME },
            { name: "twitter:description", content: APP_DESCRIPTION },
            { name: "twitter:image", content: "/logo.webp" },
        ],
        links: [
            {
                rel: "icon",
                href: "/favicon.ico",
            },
        ],
    }),
});

function KatalogRoute() {
    // hooks
    const searchParams = Route.useSearch();
    const navigate = Route.useNavigate();

    // states (only for UI controls)
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    // Destructure search params with defaults
    const {
        categories: selectedCategories = [],
        minPrice = 0,
        maxPrice = 500000,
        sizes: selectedSizes = [],
        city: selectedCity = "",
        sortBy = "terlaris",
        searchQuery = "",
        page: currentPage = 1,
    } = searchParams;

    const priceRange: [number, number] = [minPrice, maxPrice];

    // Helper function to update search params
    const updateSearchParams = (updates: Partial<KatalogSearchParams>) => {
        navigate({
            search: (prev) => ({
                ...prev,
                ...updates,
            }),
        });
    };

    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Search filter
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query),
            );
        }

        // Category filter
        if (selectedCategories.length > 0) {
            result = result.filter((p) => selectedCategories.includes(p.category));
        }

        // Price filter
        result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Size filter (simulated - all products have all sizes)
        // In real app, this would filter based on available sizes

        // Sort
        switch (sortBy) {
            case "terlaris":
                result.sort((a, b) => b.reviewCount - a.reviewCount);
                break;
            case "termurah":
                result.sort((a, b) => a.price - b.price);
                break;
            case "termahal":
                result.sort((a, b) => b.price - a.price);
                break;
            case "terbaru":
                result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
        }

        return result;
    }, [searchQuery, selectedCategories, sortBy, priceRange[0], priceRange[1]]);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

    const handleCategoryToggle = (categorySlug: string) => {
        const newCategories = selectedCategories.includes(categorySlug)
            ? selectedCategories.filter((c) => c !== categorySlug)
            : [...selectedCategories, categorySlug];
        updateSearchParams({ categories: newCategories, page: 1 });
    };

    const handleSizeToggle = (size: string) => {
        const newSizes = selectedSizes.includes(size)
            ? selectedSizes.filter((s) => s !== size)
            : [...selectedSizes, size];
        updateSearchParams({ sizes: newSizes, page: 1 });
    };

    const clearFilters = () => {
        updateSearchParams({
            searchQuery: "",
            categories: [],
            minPrice: 0,
            maxPrice: 500000,
            sizes: [],
            city: "",
            sortBy: "terlaris",
            page: 1,
        });
    };

    const hasActiveFilters =
        searchQuery ||
        selectedCategories.length > 0 ||
        minPrice > 0 ||
        maxPrice < 3000000 ||
        selectedSizes.length > 0 ||
        selectedCity;

    const FilterContent = () => (
        <div className="space-y-6 px-2 md:px-0">
            {/* Categories */}
            <div>
                <Label className="text-base font-semibold">Kategori</Label>
                <div className="mt-3 space-y-2">
                    {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={`cat-${category.slug}`}
                                checked={selectedCategories.includes(category.slug)}
                                onCheckedChange={() => handleCategoryToggle(category.slug)}
                            />
                            <label htmlFor={`cat-${category.slug}`} className="text-sm cursor-pointer">
                                {category.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
                <Label className="text-base font-semibold">Rentang Harga</Label>
                <div className="mt-4 px-2">
                    <Slider
                        value={priceRange}
                        onValueChange={(value) => {
                            updateSearchParams({
                                minPrice: value[0],
                                maxPrice: value[1],
                                page: 1,
                            });
                        }}
                        min={0}
                        max={500000}
                        step={100000}
                        className="w-full"
                    />
                    <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                        <span>Rp {priceRange[0].toLocaleString("id-ID")}</span>
                        <span>Rp {priceRange[1].toLocaleString("id-ID")}</span>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Sizes */}
            <div>
                <Label className="text-base font-semibold">Ukuran</Label>
                <div className="mt-3 flex flex-wrap gap-2">
                    {SIZES.map((size) => (
                        <Button
                            key={size}
                            variant={selectedSizes.includes(size) ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleSizeToggle(size)}>
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

            <Separator />

            {/* City */}
            <div>
                <Label className="text-base font-semibold">Kota Pengiriman</Label>
                <Select value={selectedCity} onValueChange={(value) => updateSearchParams({ city: value, page: 1 })}>
                    <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Pilih kota" />
                    </SelectTrigger>
                    <SelectContent>
                        {cities.map((city) => (
                            <SelectItem key={city.id} value={city.id}>
                                {city.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {hasActiveFilters && (
                <>
                    <Separator />
                    <Button variant="outline" className="w-full" onClick={clearFilters}>
                        <X className="mr-2 h-4 w-4" />
                        Reset Filter
                    </Button>
                </>
            )}
        </div>
    );

    return (
        <div className="container mx-auto py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Katalog Produk</h1>
                <p className="mt-2 text-muted-foreground">Temukan papan bunga yang sempurna untuk momen spesial Anda</p>
            </div>

            {/* Search and Sort Bar */}
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Cari papan bunga..."
                        value={searchQuery}
                        onChange={(e) => {
                            updateSearchParams({ searchQuery: e.target.value, page: 1 });
                        }}
                        className="pl-10"
                    />
                </div>
                <div className="flex items-center gap-4">
                    {/* Mobile Filter Button */}
                    <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="lg:hidden">
                                <SlidersHorizontal className="mr-2 h-4 w-4" />
                                Filter
                                {hasActiveFilters && (
                                    <span className="ml-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                                        !
                                    </span>
                                )}
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-75 overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle>Filter Produk</SheetTitle>
                            </SheetHeader>
                            <div className="mt-6">
                                <FilterContent />
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Sort */}
                    <Select
                        value={sortBy}
                        onValueChange={(value) =>
                            updateSearchParams({ sortBy: value as KatalogSearchParams["sortBy"], page: 1 })
                        }>
                        <SelectTrigger className="w-40">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {SORT_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex gap-8">
                {/* Desktop Sidebar Filter */}
                <aside className="hidden w-64 shrink-0 lg:block">
                    <div className="sticky top-24 rounded-lg border bg-card p-6">
                        <h2 className="mb-4 text-lg font-semibold">Filter</h2>
                        <FilterContent />
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    {paginatedProducts.length > 0 ? (
                        <>
                            <p className="mb-4 text-sm text-muted-foreground">
                                Menampilkan {paginatedProducts.length} dari {filteredProducts.length} produk
                            </p>
                            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                {paginatedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-8 flex items-center justify-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => updateSearchParams({ page: Math.max(1, currentPage - 1) })}
                                        disabled={currentPage === 1}>
                                        Sebelumnya
                                    </Button>
                                    <div className="flex items-center gap-1">
                                        {[...Array(totalPages)].map((_, i) => (
                                            <Button
                                                key={i}
                                                variant={currentPage === i + 1 ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => updateSearchParams({ page: i + 1 })}
                                                className="w-10">
                                                {i + 1}
                                            </Button>
                                        ))}
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                            updateSearchParams({ page: Math.min(totalPages, currentPage + 1) })
                                        }
                                        disabled={currentPage === totalPages}>
                                        Selanjutnya
                                    </Button>
                                </div>
                            )}
                        </>
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <div className="mb-4 rounded-full bg-muted p-6">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold">Tidak ada produk ditemukan</h3>
                            <p className="mb-4 text-muted-foreground">
                                Coba ubah filter atau kata kunci pencarian Anda
                            </p>
                            <Button onClick={clearFilters}>Reset Filter</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
