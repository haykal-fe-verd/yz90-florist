interface Props {
    price: number;
    originalPrice?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}

export function PriceTag({ price, originalPrice, size = "md", className = "" }: Props) {
    const formatPrice = (value: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(value);
    };

    const sizeClasses = {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-2xl",
    };

    return (
        <div className={`flex items-baseline gap-2 ${className}`}>
            <span className={`font-bold text-primary ${sizeClasses[size]}`}>{formatPrice(price)}</span>
            {originalPrice && originalPrice > price && (
                <span className="text-sm text-muted-foreground line-through">{formatPrice(originalPrice)}</span>
            )}
        </div>
    );
}
