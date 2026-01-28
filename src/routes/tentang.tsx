/** biome-ignore-all lint/suspicious/noArrayIndexKey: <array> */

import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { processes, strengths } from "@/lib/about";
import { APP_NAME } from "@/lib/constants";

export const Route = createFileRoute("/tentang")({
    component: TentangRoute,
});

function TentangRoute() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-linear-to-br from-rose-soft via-background to-background py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            Tentang <span className="text-primary">{APP_NAME}</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">Menyampaikan perasaan melalui keindahan bunga.</p>
                    </div>
                </div>
            </section>

            {/* Brand Story */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h2 className="mb-6 text-3xl font-bold tracking-tight">Cerita Kami</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    {APP_NAME} memiliki misi sederhana: membantu setiap orang menyampaikan perasaan
                                    mereka melalui keindahan rangkaian bunga. Bermula dari sebuah toko kecil di Jakarta
                                    Selatan, kami terus berkembang menjadi penyedia papan bunga terpercaya di wilayah
                                    Banda Aceh dan Aceh Besar.
                                </p>
                                <p>
                                    Dengan tim florist profesional yang berpengalaman, kami berkomitmen untuk
                                    menghadirkan karya seni bunga yang tidak hanya indah, tetapi juga bermakna. Setiap
                                    papan bunga yang kami ciptakan adalah hasil dari dedikasi, kreativitas, dan
                                    perhatian terhadap detail.
                                </p>
                                <p>
                                    Kami percaya bahwa bunga memiliki kekuatan untuk menyampaikan emosi yang terkadang
                                    sulit diungkapkan dengan kata-kata. Baik itu kebahagiaan pernikahan, kesuksesan
                                    bisnis, atau penghormatan terakhir, kami hadir untuk membantu Anda menyampaikan
                                    pesan yang tulus.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="aspect-4/5 overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=500&fit=crop"
                                    alt="Tim Papan Bunga"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="aspect-4/5 overflow-hidden rounded-lg mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop"
                                    alt="Workshop Papan Bunga"
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-primary py-16">
                <div className="container mx-auto">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
                        <div>
                            <p className="text-4xl font-bold text-primary-foreground">2+</p>
                            <p className="mt-2 text-primary-foreground/80">Tahun Pengalaman</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-foreground">15,000+</p>
                            <p className="mt-2 text-primary-foreground/80">Pesanan Terselesaikan</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-foreground">98%</p>
                            <p className="mt-2 text-primary-foreground/80">Tingkat Kepuasan</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-foreground">2</p>
                            <p className="mt-2 text-primary-foreground/80">Kota Layanan</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strengths */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Keunggulan Kami</h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Mengapa ribuan pelanggan mempercayakan momen spesial mereka kepada kami
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {strengths.map((strength, index) => {
                            const Icon = strength.icon;
                            return (
                                <Card key={index} className="text-center border-0 bg-secondary/50">
                                    <CardContent className="p-6">
                                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-2 font-semibold">{strength.title}</h3>
                                        <p className="text-sm text-muted-foreground">{strength.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-secondary/30 py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Proses Kerja Kami</h2>
                        <p className="mx-auto max-w-2xl text-muted-foreground">
                            Langkah-langkah sederhana untuk mendapatkan papan bunga impian Anda
                        </p>
                    </div>
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {processes.map((process) => (
                                <Card key={process.step} className="relative overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="absolute -top-4 -right-4 text-8xl font-bold text-primary/5">
                                            {process.step}
                                        </div>
                                        <div className="relative">
                                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                                                {process.step}
                                            </div>
                                            <h3 className="mb-2 font-semibold">{process.title}</h3>
                                            <p className="text-sm text-muted-foreground">{process.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
