export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: "1",
        question: "Berapa lama waktu pengerjaan papan bunga?",
        answer: "Waktu pengerjaan papan bunga kami adalah 3-6 jam tergantung tingkat kesulitan desain. Untuk pemesanan mendadak (express), kami bisa menyelesaikan dalam 2-3 jam dengan tambahan biaya express.",
    },
    {
        id: "2",
        question: "Apakah bisa custom desain dan warna?",
        answer: "Tentu saja! Kami menerima request custom desain, warna, dan ukuran sesuai kebutuhan Anda. Silakan konsultasikan desain yang Anda inginkan melalui WhatsApp, dan tim kami akan memberikan solusi terbaik.",
    },
    {
        id: "3",
        question: "Wilayah mana saja yang dilayani untuk pengiriman?",
        answer: "Kami melayani pengiriman ke seluruh wilayah Banda Aceh dan Aceh Besar. Untuk wilayah luar, silakan hubungi kami untuk informasi lebih lanjut.",
    },
    {
        id: "4",
        question: "Apakah ada garansi untuk papan bunga?",
        answer: "Ya, kami memberikan garansi kepuasan. Jika ada kerusakan saat pengiriman atau ketidaksesuaian dengan pesanan, kami akan menggantinya. Kami juga mengirimkan foto papan bunga sebelum dikirim untuk persetujuan Anda.",
    },
    {
        id: "5",
        question: "Bagaimana cara pembayaran?",
        answer: "Kami menerima pembayaran melalui transfer bank (Bank Aceh dan BSI), e-wallet (GoPay, OVO, DANA), dan juga COD (Cash on Delivery) untuk wilayah tertentu.",
    },
    {
        id: "6",
        question: "Berapa lama ketahanan bunga segar pada papan bunga?",
        answer: "Bunga segar pada papan bunga kami dapat bertahan 3-5 hari dalam kondisi optimal. Untuk ketahanan lebih lama, kami juga menyediakan opsi bunga artificial yang bisa bertahan berbulan-bulan.",
    },
];
