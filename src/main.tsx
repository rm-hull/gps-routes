import { createRouter, RouterProvider } from "@tanstack/react-router";
import { createRoot } from "react-dom/client";
import { Backdrop } from "@/components/Backdrop.tsx";
import { Provider } from "@/components/ui/provider";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <>
    <Provider>
      <Backdrop>
        <RouterProvider router={router} />
      </Backdrop>
    </Provider>
  </>
);
