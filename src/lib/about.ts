import { Camera, type LucideIcon, Palette, ThumbsUp, Truck } from "lucide-react";

export interface Strength {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const strengths: Strength[] = [
    {
        icon: Palette,
        title: "Desain Eksklusif",
        description: "Setiap papan bunga dirancang dengan sentuhan artistik oleh florist berpengalaman.",
    },
    {
        icon: Truck,
        title: "Pengiriman Tepat Waktu",
        description: "Komitmen kami untuk mengantarkan pesanan tepat pada waktunya.",
    },
    {
        icon: Camera,
        title: "Foto Sebelum Kirim",
        description: "Kami selalu mengirimkan foto hasil untuk persetujuan Anda sebelum pengiriman.",
    },
    {
        icon: ThumbsUp,
        title: "Garansi Kepuasan",
        description: "Jaminan penggantian jika hasil tidak sesuai dengan pesanan.",
    },
];

export interface Process {
    step: number;
    title: string;
    description: string;
}

export const processes: Process[] = [
    {
        step: 1,
        title: "Konsultasi",
        description: "Diskusikan kebutuhan dan preferensi desain melalui WhatsApp.",
    },
    {
        step: 2,
        title: "Pemilihan Desain",
        description: "Pilih dari katalog kami atau request desain custom sesuai keinginan.",
    },
    {
        step: 3,
        title: "Konfirmasi & Pembayaran",
        description: "Konfirmasi detail pesanan dan lakukan pembayaran.",
    },
    {
        step: 4,
        title: "Pengerjaan",
        description: "Tim florist kami mulai mengerjakan papan bunga Anda.",
    },
    {
        step: 5,
        title: "Quality Check",
        description: "Foto hasil dikirim untuk persetujuan sebelum pengiriman.",
    },
    {
        step: 6,
        title: "Pengiriman",
        description: "Papan bunga diantar tepat waktu ke lokasi tujuan.",
    },
];
