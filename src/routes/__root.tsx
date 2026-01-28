import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { EnvironmentLabel } from "@/components/environment-label";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            {/* Head content for SEO and metadata */}
            <HeadContent />

            {/* render child route components */}
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    <Outlet />
                </main>
                <Footer />
            </div>

            {/* toast */}
            <Toaster position="top-right" expand={true} toastOptions={{}} richColors />

            {/* development */}
            {import.meta.env.MODE === "development" && (
                <>
                    <TailwindIndicator />
                    <EnvironmentLabel />
                    <TanStackDevtools
                        plugins={[
                            formDevtoolsPlugin(),
                            {
                                name: "TanStack Router",
                                render: <TanStackRouterDevtoolsPanel />,
                                defaultOpen: false,
                            },
                        ]}
                    />
                </>
            )}
        </ThemeProvider>
    );
}
