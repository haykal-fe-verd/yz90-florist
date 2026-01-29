/** biome-ignore-all lint/correctness/noChildrenProp: <tanstack form> */

import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { APP_ADDRESS, APP_DESCRIPTION, APP_EMAIL, APP_NAME, APP_PHONE } from "@/lib/constants";
import { contactSchema } from "@/schemas/contact-schema";

export const Route = createFileRoute("/kontak")({
    component: KontakRoute,
    head: () => ({
        meta: [
            {
                title: `${APP_NAME} - Kontak Kami`,
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

function KontakRoute() {
    // states
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
        validators: {
            onSubmit: contactSchema,
        },
        onSubmit: async () => {
            setIsSubmitted(true);
            toast("Pesan terkirim!", {
                description: "Terima kasih, kami akan segera menghubungi Anda.",
            });

            setTimeout(() => {
                form.reset();
                setIsSubmitted(false);
            }, 3000);
        },
    });

    return (
        <div className="px-2 md:px-0">
            {/* Hero Section */}
            <section className="bg-linear-to-br from-rose-soft via-background to-background py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
                            Hubungi <span className="text-primary">Kami</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Kami siap membantu Anda. Silakan hubungi kami melalui form atau WhatsApp.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24">
                <div className="container mx-auto">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Kirim Pesan</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                                            <Check className="h-8 w-8" />
                                        </div>
                                        <h3 className="mb-2 text-lg font-semibold">Pesan Terkirim!</h3>
                                        <p className="text-muted-foreground">
                                            Terima kasih telah menghubungi kami. Tim kami akan segera merespons.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        id="kontak-form"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            form.handleSubmit();
                                        }}>
                                        <FieldGroup>
                                            <form.Field
                                                name="name"
                                                children={(field) => {
                                                    const isInvalid =
                                                        field.state.meta.isTouched && !field.state.meta.isValid;
                                                    return (
                                                        <Field data-invalid={isInvalid}>
                                                            <FieldLabel htmlFor={field.name}>Nama Lengkap</FieldLabel>
                                                            <Input
                                                                id={field.name}
                                                                name={field.name}
                                                                value={field.state.value}
                                                                onBlur={field.handleBlur}
                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                aria-invalid={isInvalid}
                                                                placeholder="Masukkan nama anda"
                                                            />
                                                            {isInvalid && (
                                                                <FieldError errors={field.state.meta.errors} />
                                                            )}
                                                        </Field>
                                                    );
                                                }}
                                            />

                                            <form.Field
                                                name="email"
                                                children={(field) => {
                                                    const isInvalid =
                                                        field.state.meta.isTouched && !field.state.meta.isValid;
                                                    return (
                                                        <Field data-invalid={isInvalid}>
                                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                                            <Input
                                                                id={field.name}
                                                                name={field.name}
                                                                value={field.state.value}
                                                                onBlur={field.handleBlur}
                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                aria-invalid={isInvalid}
                                                                placeholder="nama@email.com"
                                                            />
                                                            {isInvalid && (
                                                                <FieldError errors={field.state.meta.errors} />
                                                            )}
                                                        </Field>
                                                    );
                                                }}
                                            />

                                            <form.Field
                                                name="phone"
                                                children={(field) => {
                                                    const isInvalid =
                                                        field.state.meta.isTouched && !field.state.meta.isValid;
                                                    return (
                                                        <Field data-invalid={isInvalid}>
                                                            <FieldLabel htmlFor={field.name}>No Telepon</FieldLabel>
                                                            <Input
                                                                id={field.name}
                                                                name={field.name}
                                                                value={field.state.value}
                                                                onBlur={field.handleBlur}
                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                aria-invalid={isInvalid}
                                                                placeholder="08xx-xxxx-xxxx"
                                                            />
                                                            {isInvalid && (
                                                                <FieldError errors={field.state.meta.errors} />
                                                            )}
                                                        </Field>
                                                    );
                                                }}
                                            />

                                            <form.Field
                                                name="message"
                                                children={(field) => {
                                                    const isInvalid =
                                                        field.state.meta.isTouched && !field.state.meta.isValid;
                                                    return (
                                                        <Field data-invalid={isInvalid}>
                                                            <FieldLabel htmlFor={field.name}>Pesan</FieldLabel>
                                                            <Textarea
                                                                id={field.name}
                                                                name={field.name}
                                                                value={field.state.value}
                                                                onBlur={field.handleBlur}
                                                                onChange={(e) => field.handleChange(e.target.value)}
                                                                aria-invalid={isInvalid}
                                                                placeholder="Tulis pesan Anda di sini..."
                                                                rows={5}
                                                            />
                                                            {isInvalid && (
                                                                <FieldError errors={field.state.meta.errors} />
                                                            )}
                                                        </Field>
                                                    );
                                                }}
                                            />

                                            <Button type="submit" className="w-full gap-2">
                                                <Send className="h-4 w-4" />
                                                Kirim Pesan
                                            </Button>
                                        </FieldGroup>
                                    </form>
                                )}
                            </CardContent>
                        </Card>

                        {/* Contact Info & Map */}
                        <div className="space-y-6">
                            {/* Contact Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi Kontak</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Alamat</h4>
                                            <p className="text-sm text-muted-foreground">{APP_ADDRESS}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Telepon</h4>
                                            <p className="text-sm text-muted-foreground">{APP_PHONE}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Email</h4>
                                            <p className="text-sm text-muted-foreground">{APP_EMAIL}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Clock className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium">Jam Operasional</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Senin - Minggu: 08:00 - 21:00
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* WhatsApp CTA */}
                            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <h3 className="mb-2 text-lg font-semibold">Respon Lebih Cepat?</h3>
                                        <p className="mb-4 text-sm text-muted-foreground">
                                            Hubungi kami langsung via WhatsApp untuk respon instan
                                        </p>
                                        <WhatsAppCTA
                                            message="Halo, saya ingin bertanya tentang papan bunga."
                                            className="w-full">
                                            Chat via WhatsApp
                                        </WhatsAppCTA>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
