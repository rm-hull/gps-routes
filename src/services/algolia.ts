import { algoliasearch } from "algoliasearch";

export const indexName = "routes_index";

export const searchClient = algoliasearch(
  import.meta.env.VITE_ALGOLIA_APP_ID,
  import.meta.env.VITE_ALGOLIA_API_KEY
);
