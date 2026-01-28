import { z } from "zod";

export const katalogSearchParamsSchema = z.object({
    categories: z.array(z.string()).optional().default([]),
    minPrice: z.number().min(0).optional().default(0),
    maxPrice: z.number().min(0).optional().default(500000),
    sizes: z.array(z.string()).optional().default([]),
    city: z.string().optional().default(""),
    sortBy: z.enum(["terlaris", "termurah", "termahal", "terbaru"]).optional().default("terlaris"),
    searchQuery: z.string().max(100).optional().default(""),
    page: z.number().min(1).optional().default(1),
});

export type KatalogSearchParams = z.infer<typeof katalogSearchParamsSchema>;
