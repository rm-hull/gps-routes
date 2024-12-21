import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { Backdrop } from "./Backdrop.tsx";

import { InstantSearch } from "react-instantsearch";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { indexName, searchClient } from "./services/algolia.ts";

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Backdrop>
        <InstantSearch
          searchClient={searchClient}
          indexName={indexName}
          future={{
            preserveSharedStateOnUnmount: true,
          }}
        >
          <RouterProvider router={router} />
        </InstantSearch>
      </Backdrop>
    </Provider>
  </StrictMode>
);
