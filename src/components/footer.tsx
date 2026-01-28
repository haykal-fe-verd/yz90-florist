/** biome-ignore-all lint/a11y/useValidAnchor: <idk> */

import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, Music2, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
    APP_ADDRESS,
    APP_DESCRIPTION,
    APP_EMAIL,
    APP_FACEBOOK,
    APP_INSTAGRAM,
    APP_NAME,
    APP_PHONE,
    APP_TIKTOK,
} from "@/lib/constants";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary/50 border-t">
            <div className="container mx-auto py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4">
                            <img src="/logo.webp" alt={APP_NAME} className="h-10 w-10" />
                            {APP_NAME}
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">{APP_DESCRIPTION}</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Menu</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/katalog"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Katalog Produk
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/tentang"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/kontak"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-4">Kontak</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                                <span>{APP_ADDRESS}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4 text-primary shrink-0" />
                                <span>{APP_PHONE}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4 text-primary shrink-0" />
                                <span>{APP_EMAIL}</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 text-primary shrink-0" />
                                <span>Senin - Minggu, 08:00 - 21:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Policies */}
                    <div>
                        <h3 className="font-semibold mb-4">Ikuti Kami</h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href={APP_INSTAGRAM}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a
                                href={APP_FACEBOOK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={APP_TIKTOK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                                aria-label="TikTok">
                                <Music2 className="h-5 w-5" />
                            </a>
                        </div>
                        <h4 className="font-medium text-sm mb-2">Kebijakan</h4>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Syarat & Ketentuan
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Kebijakan Privasi
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Kebijakan Pengembalian
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} {APP_NAME}. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Melayani area Banda Aceh dan Aceh Besar dengan sepenuh hati 💕
                    </p>
                </div>
            </div>
        </footer>
    );
}
