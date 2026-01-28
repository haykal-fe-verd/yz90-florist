import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string;
}

export function ValuePropCard({ icon: Icon, title, description, className = "" }: Props) {
    return (
        <Card
            className={`group text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-0 bg-secondary/50 ${className}`}>
            <CardContent className="p-6">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
