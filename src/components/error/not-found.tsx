import { Link } from "@tanstack/react-router";
import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_EMAIL } from "@/lib/constants";

export function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center to-muted/20 p-4">
            <Card className="w-full max-w-2xl border-none shadow-2xl">
                <CardContent className="flex flex-col items-center space-y-8 p-8 text-center md:p-12">
                    {/* Error Code */}
                    <h1 className="text-9xl font-black text-primary/10 md:text-[12rem]">404</h1>

                    {/* Error Message */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Page Not Found</h2>
                        <p className="mx-auto max-w-md text-muted-foreground">
                            The page you're looking for doesn't exist or has been moved. Please check the URL or
                            navigate back to a safe place.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button size="lg" variant="outline" asChild>
                            <Link to=".">
                                <ArrowLeftIcon className="h-4 w-4" />
                                Go Back
                            </Link>
                        </Button>
                        <Button size="lg" asChild>
                            <Link to="/">
                                <HomeIcon className="h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>

                    {/* Additional Help */}
                    <div className="border-t pt-6 text-sm text-muted-foreground hover:text-primary">
                        <p>
                            Need help?{" "}
                            <a
                                href={`mailto:${APP_EMAIL}`}
                                className="font-medium text-primary underline-offset-4 hover:underline">
                                Contact Support
                            </a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
