import { linkOptions } from "@tanstack/react-router";
import { Home, Info, LayoutGrid, type LucideIcon, Mail } from "lucide-react";

export interface NavItem {
    title: string;
    to: string;
    icon: LucideIcon;
    activeOptions: { exact: boolean };
}

export const navigations: NavItem[] = linkOptions([
    {
        title: "Beranda",
        icon: Home,
        to: "/",
        activeOptions: { exact: false },
    },
    {
        title: "Katalog",
        icon: LayoutGrid,
        to: "/katalog",
        activeOptions: { exact: false },
    },
    {
        title: "Tentang",
        icon: Info,
        to: "/tentang",
        activeOptions: { exact: false },
    },
    {
        title: "Kontak",
        icon: Mail,
        to: "/kontak",
        activeOptions: { exact: false },
    },
]);
