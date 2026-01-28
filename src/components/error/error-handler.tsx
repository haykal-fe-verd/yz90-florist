import { Link } from "@tanstack/react-router";
import { AlertTriangleIcon, ArrowLeftIcon, HomeIcon, RefreshCwIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { APP_EMAIL } from "@/lib/constants";

interface ErrorHandlerProps {
    error: Error;
}

export function ErrorHandler({ error }: ErrorHandlerProps) {
    // states
    const isDev = import.meta.env.MODE === "development";

    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Card className="w-full max-w-2xl border-destructive/50 shadow-2xl">
                <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="rounded-full bg-destructive/10 p-3">
                            <AlertTriangleIcon className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight">Something Went Wrong</h2>
                            <p className="text-sm text-muted-foreground">We encountered an unexpected error</p>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    {/* User-friendly message */}
                    <Alert variant="destructive">
                        <AlertTriangleIcon />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            {isDev
                                ? error.message
                                : "An unexpected error occurred. Please try again or contact support if the problem persists."}
                        </AlertDescription>
                    </Alert>

                    {/* Stack trace in development */}
                    {isDev && error.stack && (
                        <div className="space-y-2">
                            <p className="text-sm font-medium text-muted-foreground">Stack Trace (Development Only):</p>
                            <pre className="max-h-64 overflow-auto rounded-lg bg-muted p-4 text-xs">
                                <code>{error.stack}</code>
                            </pre>
                        </div>
                    )}

                    {/* Additional help text */}
                    <div className="rounded-lg bg-muted/50 p-4">
                        <h3 className="mb-2 font-semibold">What you can do:</h3>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Try refreshing the page</li>
                            <li>• Go back and try again</li>
                            <li>• Return to the homepage</li>
                            <li>
                                • If the problem persists,{" "}
                                <a
                                    href={`mailto:${APP_EMAIL}`}
                                    className="font-medium text-primary underline-offset-4 hover:underline">
                                    contact support
                                </a>
                            </li>
                        </ul>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" onClick={handleRetry} variant="default" className="flex-1">
                        <RefreshCwIcon />
                        Try Again
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1" asChild>
                        <Link to=".">
                            <ArrowLeftIcon />
                            Go Back
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1" asChild>
                        <Link to="/">
                            <HomeIcon />
                            Home
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
