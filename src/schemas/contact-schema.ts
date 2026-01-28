import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, { message: "Nama minimal 2 karakter" })
        .max(100, { message: "Nama maksimal 100 karakter" }),
    email: z
        .string()
        .trim()
        .email({ message: "Email tidak valid" })
        .max(255, { message: "Email maksimal 255 karakter" }),
    phone: z
        .string()
        .trim()
        .min(10, { message: "Nomor telepon minimal 10 digit" })
        .max(15, { message: "Nomor telepon maksimal 15 digit" })
        .regex(/^[0-9+\-\s]+$/, { message: "Format nomor telepon tidak valid" }),
    message: z
        .string()
        .trim()
        .min(10, { message: "Pesan minimal 10 karakter" })
        .max(1000, { message: "Pesan maksimal 1000 karakter" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
