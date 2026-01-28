export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    price: number;
    originalPrice?: number;
    images: string[];
    rating: number;
    reviewCount: number;
    description: string;
    details: string;
    sizes: { name: string; price: number }[];
    isBestSeller?: boolean;
    isNew?: boolean;
    createdAt: string;
}

const PRINTING_SIZES = [
    { name: "Single 270×170", price: 250000 },
    { name: "Double 540×170", price: 450000 },
];

const BALDU_SIZES = [
    { name: "Single 270×170", price: 170000 },
    { name: "Double 540×170", price: 300000 },
];

const ACRYLIC_SIZES = [
    { name: "Uk 60×80", price: 200000 },
    { name: "Uk 60×80 (Bulat & Kubah)", price: 200000 },
];

export const products: Product[] = [
    // WEDDING (Baldu)
    {
        id: "1",
        name: "Papan Bunga Baldu Single 270×170",
        slug: "papan-bunga-baldu-single-270x170",
        category: "wedding",
        price: 170000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-single.webp", "/products/papan-baldu-single.webp"],
        rating: 4.9,
        reviewCount: 124,
        description:
            "Papan bunga finishing baldu ukuran Single 270×170. Tampilan rapi dan elegan untuk berbagai acara.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        isBestSeller: true,
        createdAt: "2024-01-15",
    },

    // GRAND OPENING (Printing)
    {
        id: "2",
        name: "Papan Printing Single 270×170",
        slug: "papan-printing-single-270x170",
        category: "grand-opening",
        price: 250000,
        originalPrice: 450000,
        images: ["/products/papan-printing-single.webp", "/products/papan-printing-single.webp"],
        rating: 4.8,
        reviewCount: 89,
        description: "Papan printing ukuran Single 270×170 dengan hasil cetak jelas dan warna standout.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        isBestSeller: true,
        createdAt: "2024-01-20",
    },

    // DUKA CITA (Baldu)
    {
        id: "3",
        name: "Papan Bunga Baldu Double 540×170",
        slug: "papan-bunga-baldu-double-540x170",
        category: "duka-cita",
        price: 300000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-double.webp", "/products/papan-baldu-double.webp"],
        rating: 4.9,
        reviewCount: 156,
        description:
            "Papan bunga finishing baldu ukuran Double 540×170. Cocok untuk ucapan yang lebih besar dan terlihat.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        isBestSeller: true,
        createdAt: "2024-02-01",
    },

    // UCAPAN SELAMAT (Printing)
    {
        id: "4",
        name: "Papan Printing Double 540×170",
        slug: "papan-printing-double-540x170",
        category: "ucapan-selamat",
        price: 450000,
        originalPrice: 450000,
        images: ["/products/papan-printing-double.webp", "/products/papan-printing-double.webp"],
        rating: 4.7,
        reviewCount: 67,
        description:
            "Papan printing ukuran Double 540×170 dengan layout jelas, cocok untuk ucapan selamat & sukses yang menonjol.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        createdAt: "2024-02-10",
    },

    // AKRILIK
    {
        id: "5",
        name: "Papan Acrylic 60×80",
        slug: "papan-acrylic-60x80",
        category: "akrilik",
        price: 200000,
        images: ["/products/papan-acrylic-60x80.webp", "/products/papan-acrylic-60x80.webp"],
        rating: 4.9,
        reviewCount: 45,
        description: "Papan acrylic ukuran 60×80 dengan tampilan modern dan clean. Tersedia opsi model Bulat & Kubah.",
        details: "Papan Acrylic: Uk 60×80 (Rp. 200.000) / Uk 60×80 model Bulat & Kubah (Rp. 200.000).",
        sizes: ACRYLIC_SIZES,
        isBestSeller: true,
        createdAt: "2024-02-15",
    },

    // WEDDING (Baldu)
    {
        id: "6",
        name: "Papan Bunga Baldu Single 270×170",
        slug: "papan-bunga-baldu-single-270x170-2",
        category: "wedding",
        price: 170000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-single.webp", "/products/papan-baldu-single.webp"],
        rating: 4.8,
        reviewCount: 78,
        description: "Papan bunga finishing baldu ukuran Single 270×170. Elegan dan rapi untuk berbagai kebutuhan.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        isNew: true,
        createdAt: "2024-03-01",
    },

    // GRAND OPENING (Printing)
    {
        id: "7",
        name: "Papan Printing Double 540×170",
        slug: "papan-printing-double-540x170-2",
        category: "grand-opening",
        price: 450000,
        originalPrice: 450000,
        images: ["/products/papan-printing-double.webp", "/products/papan-printing-double.webp"],
        rating: 4.7,
        reviewCount: 52,
        description: "Papan printing ukuran Double 540×170. Hasil cetak tegas dan mudah dibaca dari jarak jauh.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        isNew: true,
        createdAt: "2024-03-05",
    },

    // DUKA CITA (Baldu)
    {
        id: "8",
        name: "Papan Bunga Baldu Double 540×170",
        slug: "papan-bunga-baldu-double-540x170-2",
        category: "duka-cita",
        price: 300000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-double.webp", "/products/papan-baldu-double.webp"],
        rating: 4.9,
        reviewCount: 98,
        description: "Papan bunga baldu ukuran Double 540×170 untuk ucapan duka/empati yang lebih besar dan berkesan.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        isBestSeller: true,
        createdAt: "2024-03-10",
    },

    // UCAPAN SELAMAT (Printing)
    {
        id: "9",
        name: "Papan Printing Single 270×170",
        slug: "papan-printing-single-270x170-2",
        category: "ucapan-selamat",
        price: 250000,
        originalPrice: 450000,
        images: ["/products/papan-printing-single.webp", "/products/papan-printing-single.webp"],
        rating: 4.6,
        reviewCount: 34,
        description: "Papan printing ukuran Single 270×170. Desain jelas, cocok untuk ucapan selamat yang praktis.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        isNew: true,
        createdAt: "2024-03-15",
    },

    // AKRILIK
    {
        id: "10",
        name: "Papan Acrylic 60×80 (Bulat & Kubah)",
        slug: "papan-acrylic-60x80-bulat-kubah",
        category: "akrilik",
        price: 200000,
        images: ["/products/papan-acrylic-bulat-kubah.webp", "/products/papan-acrylic-bulat-kubah.webp"],
        rating: 5.0,
        reviewCount: 28,
        isBestSeller: true,
        description: "Papan acrylic ukuran 60×80 dengan opsi model Bulat & Kubah. Tampilan modern, premium, dan clean.",
        details: "Papan Acrylic: Uk 60×80 (Rp. 200.000) / Uk 60×80 model Bulat & Kubah (Rp. 200.000).",
        sizes: ACRYLIC_SIZES,
        createdAt: "2024-03-20",
    },

    // WEDDING (Baldu)
    {
        id: "11",
        name: "Papan Bunga Baldu Single 270×170",
        slug: "papan-bunga-baldu-single-270x170-3",
        category: "wedding",
        price: 170000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-single.webp", "/products/papan-baldu-single.webp"],
        rating: 4.7,
        reviewCount: 65,
        description: "Papan bunga baldu ukuran Single 270×170. Kesan elegan dan rapi untuk momen spesial.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        createdAt: "2024-03-25",
    },

    // GRAND OPENING (Printing)
    {
        id: "12",
        name: "Papan Printing Single 270×170",
        slug: "papan-printing-single-270x170-3",
        category: "grand-opening",
        price: 250000,
        originalPrice: 450000,
        images: ["/products/papan-printing-single.webp", "/products/papan-printing-single.webp"],
        rating: 4.5,
        reviewCount: 42,
        description: "Papan printing ukuran Single 270×170 dengan tampilan minimalis dan mudah dibaca.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        createdAt: "2024-04-01",
    },

    // DUKA CITA (Baldu)
    {
        id: "13",
        name: "Papan Bunga Baldu Single 270×170",
        slug: "papan-bunga-baldu-single-270x170-4",
        category: "duka-cita",
        price: 170000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-single.webp", "/products/papan-baldu-single.webp"],
        rating: 4.8,
        reviewCount: 112,
        description: "Papan bunga baldu ukuran Single 270×170. Rapi, sopan, dan cocok untuk ucapan duka cita.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        createdAt: "2024-04-05",
    },

    // UCAPAN SELAMAT (Printing)
    {
        id: "14",
        name: "Papan Printing Double 540×170",
        slug: "papan-printing-double-540x170-3",
        category: "ucapan-selamat",
        price: 450000,
        originalPrice: 450000,
        images: ["/products/papan-printing-double.webp", "/products/papan-printing-double.webp"],
        rating: 4.6,
        reviewCount: 38,
        description: "Papan printing ukuran Double 540×170 untuk ucapan congratulations dengan teks besar dan jelas.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        createdAt: "2024-04-10",
    },

    // AKRILIK
    {
        id: "15",
        name: "Papan Acrylic 60×80",
        slug: "papan-acrylic-60x80-2",
        category: "akrilik",
        price: 200000,
        images: ["/products/papan-acrylic-60x80.webp", "/products/papan-acrylic-60x80.webp"],
        rating: 4.8,
        reviewCount: 56,
        description: "Papan acrylic ukuran 60×80. Tampilan clean dan modern, tersedia opsi model Bulat & Kubah.",
        details: "Papan Acrylic: Uk 60×80 (Rp. 200.000) / Uk 60×80 model Bulat & Kubah (Rp. 200.000).",
        sizes: ACRYLIC_SIZES,
        createdAt: "2024-04-15",
    },

    // WEDDING (Baldu)
    {
        id: "16",
        name: "Papan Bunga Baldu Double 540×170",
        slug: "papan-bunga-baldu-double-540x170-3",
        category: "wedding",
        price: 300000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-double.webp", "/products/papan-baldu-double.webp"],
        rating: 5.0,
        reviewCount: 32,
        description: "Papan bunga baldu ukuran Double 540×170. Ukuran besar untuk tampilan lebih menonjol dan rapi.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        isNew: true,
        createdAt: "2024-04-20",
    },

    // GRAND OPENING (Printing)
    {
        id: "17",
        name: "Papan Printing Double 540×170",
        slug: "papan-printing-double-540x170-4",
        category: "grand-opening",
        price: 450000,
        originalPrice: 450000,
        images: ["/products/papan-printing-double.webp", "/products/papan-printing-double.webp"],
        rating: 4.7,
        reviewCount: 48,
        description:
            "Papan printing ukuran Double 540×170 untuk kebutuhan corporate/opening. Teks jelas dan profesional.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        createdAt: "2024-04-25",
    },

    // DUKA CITA (Baldu)
    {
        id: "18",
        name: "Papan Bunga Baldu Double 540×170",
        slug: "papan-bunga-baldu-double-540x170-4",
        category: "duka-cita",
        price: 300000,
        originalPrice: 300000,
        images: ["/products/papan-baldu-double.webp", "/products/papan-baldu-double.webp"],
        rating: 4.9,
        reviewCount: 76,
        description: "Papan bunga baldu ukuran Double 540×170 untuk ucapan duka cita yang lebih terlihat dan berkelas.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 170.000) & Double 540×170 (Rp. 300.000).",
        sizes: BALDU_SIZES,
        createdAt: "2024-05-01",
    },

    // UCAPAN SELAMAT (Printing)
    {
        id: "19",
        name: "Papan Printing Single 270×170",
        slug: "papan-printing-single-270x170-4",
        category: "ucapan-selamat",
        price: 250000,
        originalPrice: 450000,
        images: ["/products/papan-printing-single.webp", "/products/papan-printing-single.webp"],
        rating: 4.6,
        reviewCount: 29,
        description: "Papan printing ukuran Single 270×170 untuk ucapan promosi/sukses. Ringkas, jelas, dan rapi.",
        details: "Tersedia ukuran: Single 270×170 (Rp. 250.000) & Double 540×170 (Rp. 450.000).",
        sizes: PRINTING_SIZES,
        createdAt: "2024-05-05",
    },

    // AKRILIK
    {
        id: "20",
        name: "Papan Acrylic 60×80 (Bulat & Kubah)",
        slug: "papan-acrylic-60x80-bulat-kubah-2",
        category: "akrilik",
        price: 200000,
        images: ["/products/papan-acrylic-bulat-kubah.webp", "/products/papan-acrylic-bulat-kubah.webp"],
        rating: 4.9,
        reviewCount: 41,
        description: "Papan acrylic 60×80 model Bulat & Kubah. Desain modern, clean, dan cocok untuk berbagai ucapan.",
        details: "Papan Acrylic: Uk 60×80 (Rp. 200.000) / Uk 60×80 model Bulat & Kubah (Rp. 200.000).",
        sizes: ACRYLIC_SIZES,
        createdAt: "2024-05-10",
    },
];

export const getProductBySlug = (slug: string): Product | undefined => {
    return products.find((p) => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
    return products.filter((p) => p.category === category);
};

export const getBestSellers = (): Product[] => {
    return products.filter((p) => p.isBestSeller).slice(0, 6);
};

export const getNewProducts = (): Product[] => {
    return products.filter((p) => p.isNew);
};

export const getRelatedProducts = (currentId: string, category: string): Product[] => {
    return products.filter((p) => p.id !== currentId && p.category === category).slice(0, 4);
};
