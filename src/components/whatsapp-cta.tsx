import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { APP_WHATSAPP } from "@/lib/constants";

interface Props {
    phoneNumber?: string;
    message?: string;
    productName?: string;
    size?: "sm" | "md" | "lg";
    selectedSize?: string;
    greetingText?: string;
    senderName?: string;
    deliveryDate?: string;
    deliveryTime?: string;
    city?: string;
    variant?: "default" | "outline" | "secondary";
    className?: string;
    children?: React.ReactNode;
}

export function WhatsAppCTA({
    phoneNumber = APP_WHATSAPP,
    message,
    productName,
    selectedSize,
    greetingText,
    senderName,
    deliveryDate,
    deliveryTime,
    city,
    variant = "default",
    className = "",
    children,
}: Props) {
    const generateMessage = () => {
        if (message) return message;

        let text = "Halo, saya ingin memesan papan bunga.\n\n";

        if (productName) {
            text += `*Produk:* ${productName}\n`;
        }
        if (selectedSize) {
            text += `*Ukuran:* ${selectedSize}\n`;
        }
        if (greetingText) {
            text += `*Teks Ucapan:* ${greetingText}\n`;
        }
        if (senderName) {
            text += `*Nama Pengirim:* ${senderName}\n`;
        }
        if (deliveryDate) {
            text += `*Tanggal Kirim:* ${deliveryDate}\n`;
        }
        if (deliveryTime) {
            text += `*Jam Pengiriman:* ${deliveryTime}\n`;
        }
        if (city) {
            text += `*Kota Pengiriman:* ${city}\n`;
        }

        text += "\nMohon informasi lebih lanjut. Terima kasih!";

        return text;
    };

    const handleClick = () => {
        const whatsappMessage = encodeURIComponent(generateMessage());
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
        window.open(whatsappUrl, "_blank");

        toast("Membuka WhatsApp", {
            description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan pesanan.",
        });
    };

    return (
        <Button
            onClick={handleClick}
            variant={variant}
            className={`gap-2 ${variant === "default" ? "bg-green-600 hover:bg-green-700 text-white" : ""} ${className}`}
            aria-label="Pesan via WhatsApp">
            <MessageCircle className="h-4 w-4" />
            {children || "Pesan via WhatsApp"}
        </Button>
    );
}
