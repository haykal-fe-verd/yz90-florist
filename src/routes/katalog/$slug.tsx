/** biome-ignore-all lint/suspicious/noArrayIndexKey: <idk> */

import { createFileRoute, Link } from "@tanstack/react-router";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { CalendarIcon, ChevronRight, Truck } from "lucide-react";
import { useState } from "react";
import { PriceTag } from "@/components/price-tag";
import { ProductCard } from "@/components/product-card";
import { RatingStars } from "@/components/rating-stars";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { cities, getCityById } from "@/lib/cities";
import { APP_DESCRIPTION, APP_NAME, DELIVERY_TIMES } from "@/lib/constants";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/katalog/$slug")({
    component: KatalogDetailRoute,
    loader: async ({ params }) => {
        const product = await getProductBySlug(params.slug);
        return { product };
    },
    head: ({ loaderData }) => ({
        meta: [
            {
                title: `${APP_NAME} - ${loaderData?.product?.name || "Produk Tidak Ditemukan"}`,
            },
            {
                name: "description",
                content: loaderData?.product?.description || APP_DESCRIPTION,
            },
            // Open Graph
            { property: "og:title", content: loaderData?.product?.name || APP_NAME },
            { property: "og:description", content: loaderData?.product?.description || APP_DESCRIPTION },
            { property: "og:image", content: loaderData?.product ? loaderData.product.images[0] : "/logo.webp" },
            { property: "og:type", content: "article" },

            // Twitter Card
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: loaderData?.product?.name || APP_NAME },
            { name: "twitter:description", content: loaderData?.product?.description || APP_DESCRIPTION },
            { name: "twitter:image", content: loaderData?.product ? loaderData.product.images[0] : "/logo.webp" },
        ],
        links: [
            {
                rel: "icon",
                href: "/favicon.ico",
            },
        ],
    }),
});

function KatalogDetailRoute() {
    const { slug } = Route.useParams();

    const product = getProductBySlug(slug);

    // states
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [greetingText, setGreetingText] = useState<string>("");
    const [senderName, setSenderName] = useState<string>("");
    const [deliveryDate, setDeliveryDate] = useState<Date>();
    const [deliveryTime, setDeliveryTime] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("");

    if (!product) {
        return (
            <div className="container mx-auto py-16 text-center">
                <h1 className="text-2xl font-bold">Produk tidak ditemukan</h1>
                <p className="mt-2 text-muted-foreground">Produk yang Anda cari tidak tersedia</p>
                <Button asChild className="mt-4">
                    <Link to="/katalog">Kembali ke Katalog</Link>
                </Button>
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product.id, product.category);
    const selectedSizeData = product.sizes.find((s) => s.name === selectedSize);
    const currentPrice = selectedSizeData?.price || product.price;
    const cityData = getCityById(selectedCity);
    const deliveryFee = cityData?.deliveryFee || 0;
    const totalPrice = currentPrice + deliveryFee;

    const formattedDeliveryDate = deliveryDate ? format(deliveryDate, "dd MMMM yyyy", { locale: id }) : "";

    return (
        <div>
            <div className="container mx-auto py-8">
                {/* Breadcrumb */}
                <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                    <Link to="/" className="hover:text-primary">
                        Beranda
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link to="/katalog" className="hover:text-primary">
                        Katalog
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-foreground">{product.name}</span>
                </nav>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                            <img
                                src={product.images[selectedImage]}
                                alt={product.name}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                            {product.images.map((image, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={cn(
                                        "aspect-square h-20 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                                        selectedImage === index
                                            ? "border-primary"
                                            : "border-transparent opacity-60 hover:opacity-100",
                                    )}>
                                    <img
                                        src={image}
                                        alt={`${product.name} ${index + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="mb-2 flex items-center gap-2">
                                {product.isBestSeller && <Badge className="bg-primary">Best Seller</Badge>}
                                {product.isNew && <Badge variant="secondary">Baru</Badge>}
                            </div>
                            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{product.name}</h1>
                            <RatingStars rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />
                        </div>

                        <PriceTag price={currentPrice} originalPrice={product.originalPrice} size="lg" />

                        <p className="text-muted-foreground">{product.description}</p>

                        <Separator />

                        {/* Order Options */}
                        <div className="space-y-4">
                            {/* Size Selection */}
                            <div>
                                <Label className="text-base font-semibold">Pilih Ukuran</Label>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <Button
                                            key={size.name}
                                            variant={selectedSize === size.name ? "default" : "outline"}
                                            onClick={() => setSelectedSize(size.name)}
                                            className="flex-col h-auto py-2">
                                            <span className="font-semibold">{size.name}</span>
                                            <span className="text-xs">Rp {size.price.toLocaleString("id-ID")}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Greeting Text */}
                            <div>
                                <Label htmlFor="greeting" className="text-base font-semibold">
                                    Teks Ucapan
                                </Label>
                                <Textarea
                                    id="greeting"
                                    placeholder="Contoh: Selamat & Sukses atas Grand Opening..."
                                    value={greetingText}
                                    onChange={(e) => setGreetingText(e.target.value)}
                                    className="mt-2"
                                    rows={3}
                                />
                            </div>

                            {/* Sender Name */}
                            <div>
                                <Label htmlFor="sender" className="text-base font-semibold">
                                    Nama Pengirim
                                </Label>
                                <Input
                                    id="sender"
                                    placeholder="Nama yang akan ditampilkan"
                                    value={senderName}
                                    onChange={(e) => setSenderName(e.target.value)}
                                    className="mt-2"
                                />
                            </div>

                            {/* Delivery Date & Time */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label className="text-base font-semibold">Tanggal Kirim</Label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className={cn(
                                                    "mt-2 w-full justify-start text-left font-normal",
                                                    !deliveryDate && "text-muted-foreground",
                                                )}>
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {deliveryDate ? (
                                                    format(deliveryDate, "dd MMMM yyyy", { locale: id })
                                                ) : (
                                                    <span>Pilih tanggal</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={deliveryDate}
                                                onSelect={setDeliveryDate}
                                                disabled={(date) => date < new Date()}
                                                initialFocus
                                                className="pointer-events-auto"
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div>
                                    <Label className="text-base font-semibold">Jam Pengiriman</Label>
                                    <Select value={deliveryTime} onValueChange={setDeliveryTime}>
                                        <SelectTrigger className="mt-2">
                                            <SelectValue placeholder="Pilih jam" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {DELIVERY_TIMES.map((time) => (
                                                <SelectItem key={time} value={time}>
                                                    {time}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            {/* City Selection */}
                            <div>
                                <Label className="text-base font-semibold">Kota Pengiriman</Label>
                                <Select value={selectedCity} onValueChange={setSelectedCity}>
                                    <SelectTrigger className="mt-2">
                                        <SelectValue placeholder="Pilih kota tujuan" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {cities.map((city) => (
                                            <SelectItem key={city.id} value={city.id}>
                                                {city.name} - Rp {city.deliveryFee.toLocaleString("id-ID")}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Delivery Info */}
                            {cityData && (
                                <Card className="bg-secondary/50 border-0">
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-4">
                                            <Truck className="h-5 w-5 text-primary" />
                                            <div>
                                                <p className="font-medium">Estimasi Pengiriman</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {cityData.estimatedTime} setelah selesai pengerjaan
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Price Summary */}
                            <Card className="border-primary">
                                <CardContent className="p-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Harga Produk</span>
                                        <span>Rp {currentPrice.toLocaleString("id-ID")}</span>
                                    </div>
                                    {cityData && (
                                        <div className="flex justify-between text-sm">
                                            <span>Ongkos Kirim ({cityData.name})</span>
                                            <span>Rp {deliveryFee.toLocaleString("id-ID")}</span>
                                        </div>
                                    )}
                                    <Separator />
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total</span>
                                        <span className="text-primary">Rp {totalPrice.toLocaleString("id-ID")}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* WhatsApp CTA */}
                            <WhatsAppCTA
                                productName={product.name}
                                selectedSize={selectedSize}
                                greetingText={greetingText}
                                senderName={senderName}
                                deliveryDate={formattedDeliveryDate}
                                deliveryTime={deliveryTime}
                                city={cityData?.name}
                                className="w-full h-12 text-base">
                                Pesan via WhatsApp
                            </WhatsAppCTA>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mt-12">
                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="w-full max-w-md">
                            <TabsTrigger value="description" className="flex-1">
                                Deskripsi
                            </TabsTrigger>
                            <TabsTrigger value="details" className="flex-1">
                                Detail
                            </TabsTrigger>
                            <TabsTrigger value="howto" className="flex-1">
                                Cara Pesan
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <p className="leading-relaxed text-muted-foreground">{product.description}</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="details" className="mt-6">
                            <Card>
                                <CardContent className="p-6">
                                    <p className="leading-relaxed text-muted-foreground">{product.details}</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="howto" className="mt-6">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Pilih Produk & Ukuran</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Pilih papan bunga dan ukuran sesuai kebutuhan Anda
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Isi Detail Pesanan</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Lengkapi teks ucapan, nama pengirim, dan jadwal pengiriman
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Pesan via WhatsApp</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Klik tombol WhatsApp dan konfirmasi pesanan Anda
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                            4
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Terima Foto & Konfirmasi</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Kami kirim foto hasil sebelum pengiriman untuk persetujuan Anda
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <section className="mt-16">
                        <h2 className="mb-6 text-2xl font-bold">Produk Terkait</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {relatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
