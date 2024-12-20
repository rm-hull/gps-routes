import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { Backdrop } from "./Backdrop.tsx";
// import { Provider } from "@/components/ui/provider";

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch";

const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_API_KEY
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Backdrop>
        <InstantSearch searchClient={searchClient} indexName="routes_index">
          <App />
        </InstantSearch>
      </Backdrop>
    </Provider>
  </StrictMode>
);
