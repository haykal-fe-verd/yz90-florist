import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export function PageLoader() {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 95) return prev;
                return prev + 5;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-background via-background to-muted/20">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
                <div className="flex flex-col items-center space-y-6">
                    <div className="relative">
                        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-2xl shadow-primary/50 animate-in fade-in zoom-in duration-500">
                            <Zap className="h-12 w-12 text-primary-foreground" />
                        </div>

                        <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-xl animate-pulse" />
                    </div>

                    <div className="space-y-2 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                        <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            {APP_NAME}
                        </h1>
                        <p className="text-sm text-muted-foreground font-medium max-w-sm">{APP_DESCRIPTION}</p>
                    </div>
                </div>

                <div className="w-full max-w-xs space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    <div className="flex items-center justify-center space-x-3">
                        <Spinner className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Loading...</span>
                    </div>

                    <Progress value={progress} className="h-1.5" />
                </div>

                <p className="text-xs text-muted-foreground/60 animate-in fade-in duration-1000 delay-700">
                    Preparing your experience
                </p>
            </div>
        </div>
    );
}
