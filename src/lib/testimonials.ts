export interface Testimonial {
    id: string;
    name: string;
    avatar: string | null;
    role: string;
    rating: number;
    review: string;
    category: string;
    date: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Maulana Akhbar",
        avatar: null,
        role: "Anggota DPRK Aceh Besar Fraksi PAN",
        rating: 5,
        review: "Papan bunga wedding-nya cantik banget! Semua tamu pasti terpesona. Pengiriman tepat waktu dan pelayanan sangat ramah. Terima kasih sudah membuat hari spesial kami semakin sempurna!",
        category: "Wedding",
        date: "2024-03-15",
    },
    {
        id: "2",
        name: "Mehran Gara R",
        avatar: null,
        role: "Wakil Ketua BKD DPRK Banda Aceh",
        rating: 5,
        review: "Selamat & Sukses untuk Guru Besar Fakultas Teknik USK! Papan bunga-nya luar biasa, desainnya modern dan sesuai. Pelayanan cepat dan profesional.",
        category: "Ucapan Selamat",
        date: "2024-03-10",
    },
    {
        id: "3",
        name: "Hamba Allah",
        avatar: null,
        role: "Pruna Praja Aceh",
        rating: 5,
        review: "Happy Wedding untuk sahabatku! Papan bunga-nya indah dan sesuai dengan tema pernikahan. Kualitas bunga segar dan tahan lama. Sangat direkomendasikan untuk acara spesial!",
        category: "Wedding",
        date: "2024-03-05",
    },
    {
        id: "4",
        name: "Mukhlis",
        avatar: null,
        role: "Kabid Penyuluhan dan Pengembangan SDM Pertanian Distanbun Aceh",
        rating: 5,
        review: "Conratulations atas gelarnya! Papan bunga-nya elegan dan mewah, sangat cocok untuk acara resmi. Pelayanan ramah dan pengiriman tepat waktu.",
        category: "Akrilik",
        date: "2024-02-28",
    },
    {
        id: "5",
        name: "Maya Putri",
        avatar: null,
        role: "Customer",
        rating: 5,
        review: "Anniversary pertama saya, suami surprise dengan papan bunga dari sini. Romantis banget! Bunga-bunganya segar dan wangi. Pasti akan order lagi!",
        category: "Akrilik",
        date: "2024-02-20",
    },
    {
        id: "6",
        name: "Dewi Anggraini",
        avatar: null,
        role: "Wedding Organizer",
        rating: 5,
        review: "Sebagai WO, saya sudah bekerja sama dengan banyak vendor bunga. Ini salah satu yang terbaik! Kualitas konsisten, harga bersaing, dan tim profesional.",
        category: "Wedding",
        date: "2024-02-15",
    },
];
