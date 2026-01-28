import { createRouter } from "@tanstack/react-router";
import { ErrorHandler } from "@/components/error/error-handler";
import { NotFound } from "@/components/error/not-found";
import { PageLoader } from "@/components/error/page-loader";
import { routeTree } from "@/routeTree.gen";

const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFound,
    defaultPendingComponent: PageLoader,
    defaultErrorComponent: ErrorHandler,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

export { router };
