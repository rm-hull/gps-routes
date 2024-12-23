import { ErrorFallback } from "../components/ErrorFallback";
import { Navbar } from "../components/Navbar";
import { createRootRoute, Outlet, CatchBoundary } from "@tanstack/react-router";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <CatchBoundary getResetKey={() => "reset"} errorComponent={ErrorFallback}>
        <Navbar />
        <Outlet />
      </CatchBoundary>
      <Suspense>
        <TanStackRouterDevtools initialIsOpen={false} />
      </Suspense>
    </>
  ),
});
