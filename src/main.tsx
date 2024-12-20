import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Backdrop } from "./Backdrop.tsx";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_API_KEY
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Backdrop>
      <Provider>
        <InstantSearch searchClient={searchClient} indexName="routes_index">
          <RouterProvider router={router} />
        </InstantSearch>
      </Provider>
    </Backdrop>
  </StrictMode>
);
