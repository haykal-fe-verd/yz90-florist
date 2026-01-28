export interface City {
    id: string;
    name: string;
    deliveryFee: number;
    estimatedTime: string;
}

export const cities: City[] = [
    {
        id: "banda-aceh",
        name: "Banda Aceh",
        deliveryFee: 0,
        estimatedTime: "1-2 jam",
    },
    {
        id: "aceh-besar",
        name: "Aceh Besar",
        deliveryFee: 0,
        estimatedTime: "1-2 jam",
    },
];

export const getCityById = (id: string): City | undefined => {
    return cities.find((c) => c.id === id);
};
