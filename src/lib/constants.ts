export const APP_NAME: string = import.meta.env.VITE_APP_NAME;

export const APP_EMAIL: string = import.meta.env.VITE_APP_EMAIL;

export const APP_DESCRIPTION: string = import.meta.env.VITE_APP_DESCRIPTION;

export const APP_WHATSAPP: string = import.meta.env.VITE_APP_WHATSAPP;

export const APP_PHONE: string = import.meta.env.VITE_APP_PHONE;

export const APP_ADDRESS: string = import.meta.env.VITE_APP_ADDRESS;

export const APP_INSTAGRAM: string = import.meta.env.VITE_APP_INSTAGRAM;

export const APP_FACEBOOK: string = import.meta.env.VITE_APP_FACEBOOK;

export const APP_TIKTOK: string = import.meta.env.VITE_APP_TIKTOK;

export const ITEMS_PER_PAGE: number = 9;

export const SIZES: string[] = ["Single", "Double"];

export const SORT_OPTIONS: { value: string; label: string }[] = [
    { value: "terlaris", label: "Terlaris" },
    { value: "termurah", label: "Termurah" },
    { value: "termahal", label: "Termahal" },
    { value: "terbaru", label: "Terbaru" },
];

export const DELIVERY_TIMES: string[] = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
    "20:00 - 22:00",
    "22:00 - 24:00",
];
