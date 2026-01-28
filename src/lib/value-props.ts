import { Camera, type LucideIcon, Palette, Sparkles, Truck } from "lucide-react";

export interface ValueProp {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const valueProps = [
    {
        icon: Truck,
        title: "Pengiriman Cepat",
        description: "Pengiriman express 2-4 jam untuk area Banda Aceh & Aceh Besar",
    },
    {
        icon: Palette,
        title: "Desain Eksklusif",
        description: "Desain unik dan elegan oleh florist berpengalaman",
    },
    {
        icon: Sparkles,
        title: "Bisa Custom",
        description: "Request desain, warna, dan ukuran sesuai keinginan",
    },
    {
        icon: Camera,
        title: "Foto Sebelum Kirim",
        description: "Kami kirim foto untuk persetujuan sebelum dikirim",
    },
];
