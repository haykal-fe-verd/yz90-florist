import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { APP_NAME } from "@/lib/constants";
import { navigations } from "@/lib/navigations";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 px-2 md:px-0 ${
                isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b" : "bg-background"
            }`}>
            <div className="container mx-auto">
                <nav className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl font-bold text-foreground transition-colors hover:text-primary"
                        aria-label={`${APP_NAME} - Home`}>
                        <img src="/logo.webp" alt={APP_NAME} className="h-10 w-10" />
                        <span className="hidden sm:inline">{APP_NAME}</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navigations.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                activeOptions={link.activeOptions}
                                activeProps={{
                                    className: "text-primary bg-primary/10",
                                }}
                                inactiveProps={{
                                    className: "text-muted-foreground hover:text-foreground hover:bg-secondary",
                                }}
                                className="px-4 py-2 text-sm font-medium transition-colors rounded-md">
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-2 md:flex">
                        <ThemeToggle />
                        <WhatsAppCTA
                            message="Halo, saya ingin bertanya tentang papan bunga."
                            variant="default"
                            className="text-sm">
                            WhatsApp
                        </WhatsAppCTA>
                    </div>

                    {/* Mobile Menu */}
                    <div className="flex items-center gap-2 md:hidden">
                        <ThemeToggle />
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Open menu">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-70 p-0">
                                <div className="flex h-full flex-col">
                                    {/* Mobile Header */}
                                    <div className="flex items-center justify-between border-b p-4">
                                        <Link
                                            to="/"
                                            className="flex items-center gap-2 text-lg font-bold"
                                            onClick={() => setIsOpen(false)}>
                                            <img src="/logo.webp" alt={APP_NAME} className="h-10 w-10" />
                                            {APP_NAME}
                                        </Link>
                                    </div>

                                    {/* Mobile Links */}
                                    <div className="flex-1 overflow-auto p-4">
                                        <div className="flex flex-col gap-1">
                                            {navigations.map((link) => (
                                                <Link
                                                    key={link.to}
                                                    to={link.to}
                                                    onClick={() => setIsOpen(false)}
                                                    activeOptions={link.activeOptions}
                                                    activeProps={{
                                                        className: "bg-primary/10 text-primary",
                                                    }}
                                                    inactiveProps={{
                                                        className: "text-foreground hover:bg-secondary",
                                                    }}
                                                    className="rounded-lg px-4 py-3 text-base font-medium transition-colors">
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Mobile Footer */}
                                    <div className="border-t p-4">
                                        <WhatsAppCTA
                                            message="Halo, saya ingin bertanya tentang papan bunga."
                                            variant="default"
                                            className="w-full">
                                            Hubungi via WhatsApp
                                        </WhatsAppCTA>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
}
