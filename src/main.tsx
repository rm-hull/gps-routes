import "./index.css";
import { createRoot } from "react-dom/client";

import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Backdrop } from "@/components/Backdrop.tsx";
import { Provider } from "@/components/ui/provider";

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
