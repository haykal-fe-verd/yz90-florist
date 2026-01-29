/** biome-ignore-all lint/suspicious/noArrayIndexKey: <array> */

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { TestimonialCarousel } from "@/components/testimonial-caraousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ValuePropCard } from "@/components/value-prop-card";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { categories } from "@/lib/categories";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { faqs } from "@/lib/faqs";
import { getBestSellers } from "@/lib/products";
import { valueProps } from "@/lib/value-props";

export const Route = createFileRoute("/")({
    component: HomeRoute,
    head: () => ({
        meta: [
            {
                title: `${APP_NAME} - Papan Bunga Berkualitas untuk Setiap Momen`,
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

function HomeRoute() {
    const bestSellers = getBestSellers();

    return (
        <div className="px-2 md:px-0">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-linear-to-br from-rose-soft via-background to-background py-20 lg:py-32">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522057384400-681b421cfebc?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
                <div className="container relative mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in">
                            Papan Bunga Elegan untuk <span className="text-primary">Setiap Momen</span>
                        </h1>
                        <p className="mb-8 text-lg text-muted-foreground md:text-xl animate-slide-up">
                            Ungkapkan perasaan Anda dengan papan bunga berkualitas premium. Desain eksklusif, bunga
                            segar, pengiriman tepat waktu.
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-slide-up">
                            <Button asChild size="lg" className="gap-2">
                                <Link to="/katalog">
                                    Lihat Katalog
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <WhatsAppCTA
                                message="Halo, saya ingin konsultasi tentang papan bunga."
                                variant="outline"
                                className="gap-2">
                                Konsultasi WhatsApp
                            </WhatsAppCTA>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Kategori Produk
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Pilih kategori sesuai dengan momen spesial Anda
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {categories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="bg-secondary/30 py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
                        <div>
                            <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                                Produk Terlaris
                            </h2>
                            <p className="text-muted-foreground">Papan bunga favorit pelanggan kami</p>
                        </div>
                        <Button asChild variant="outline" className="gap-2">
                            <Link to="/katalog">
                                Lihat Semua
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {bestSellers.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Mengapa Memilih Kami?
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Kami berkomitmen memberikan pelayanan terbaik untuk Anda
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {valueProps.map((prop, index) => (
                            <ValuePropCard
                                key={index}
                                icon={prop.icon}
                                title={prop.title}
                                description={prop.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-secondary/30 py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Apa Kata Mereka?
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Testimoni dari pelanggan yang puas dengan layanan kami
                        </p>
                    </div>
                    <TestimonialCarousel />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Pertanyaan Umum
                        </h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Temukan jawaban untuk pertanyaan yang sering diajukan
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 lg:py-20">
                <div className="container mx-auto text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                        Siap Memesan Papan Bunga?
                    </h2>
                    <p className="mb-8 text-lg text-primary-foreground/80">
                        Hubungi kami sekarang dan dapatkan penawaran terbaik
                    </p>
                    <WhatsAppCTA
                        message="Halo, saya ingin memesan papan bunga."
                        variant="secondary"
                        className="text-lg px-8 py-6 h-auto">
                        Pesan Sekarang
                    </WhatsAppCTA>
                </div>
            </section>
        </div>
    );
}
