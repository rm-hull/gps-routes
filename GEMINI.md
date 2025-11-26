# gps-routes

## Project Overview
`gps-routes` is a React-based web application designed for searching, viewing, and exploring GPS routes (likely hiking, cycling, or driving tracks). It leverages modern frontend technologies to provide an interactive map experience, parsing GPX and KML files to display route geometries.

**Core Tech Stack:**
- **Framework:** React 19 (powered by Vite 7)
- **Language:** TypeScript
- **Routing:** TanStack Router (File-based routing)
- **UI/Styling:** Chakra UI v3, Emotion
- **Maps:** Leaflet (via `react-leaflet`), `@tmcw/togeojson` for data parsing
- **State Management:** Jotai
- **Testing:** Vitest

## Getting Started

### Prerequisites
- Node.js (Version compatible with Vite/React 19)
- Yarn (Project uses Yarn 4.12.0, as specified in `package.json`)

### Installation
```bash
yarn install
```

### Environment Configuration
The application relies on environment variables for API connectivity. Create a `.env` file (refer to `.env.example` if available) with:
- `VITE_GPS_ROUTES_API_URL`: Base URL for the backend API.
- `VITE_GPS_ROUTES_API_KEY`: API Key for authentication.

### Development Scripts
- **Start Dev Server:**
  ```bash
  yarn dev
  ```
- **Build for Production:**
  ```bash
  yarn build
  ```
  *Note: This runs `tsc` for type checking before building with Vite.*
- **Lint Code:**
  ```bash
  yarn lint
  ```
- **Run Tests:**
  ```bash
  yarn test
  ```
- **Preview Production Build:**
  ```bash
  yarn preview
  ```

## Architecture & Codebase Structure

### Directory Structure
- **`src/routes`**: Application pages/screens. Uses TanStack Router's file-based routing conventions (e.g., `__root.tsx`, `index.tsx`).
- **`src/components`**: Reusable UI components.
    - **`map/`**: Components specific to map interactions (MapView, Route rendering, POIs).
    - **`search/`**: Components for search functionality (Facets, Results, Pagination).
    - **`ui/`**: Generic UI atoms (likely Chakra wrappers).
- **`src/services`**: Backend and data processing logic.
    - `api-backend.ts`: interacting with the custom search/route API.
    - `geojson.ts`: Parsing GPX/KML data into GeoJSON for Leaflet.
- **`src/hooks`**: Custom React hooks (e.g., `useGeneralSettings`, `useSearch`).
- **`src/types.ts`**: Core TypeScript definitions for domain objects (`Result`, `Summary`, `SearchRequest`).

### Key Features
- **Routing**: configured in `vite.config.ts` with `TanStackRouterVite` plugin. Routes are defined by the file structure in `src/routes`.
- **Map Integration**: Uses `Leaflet` for rendering maps. Custom logic in `src/services/geojson.ts` converts GPX/KML XML data into GeoJSON format usable by Leaflet.
- **API Communication**:
    - `src/services/api-backend.ts` handles Fetch requests to the backend.
    - Expects specific response structures defined in `src/types.ts`.
- **Build Configuration**: `vite.config.ts` handles build plugins (React, SVGR, TSConfig Paths) and injects Git commit info (`VITE_GIT_COMMIT_DATE`, `VITE_GIT_COMMIT_HASH`) into the build.

## Development Conventions

- **Path Aliases**: The project uses the `@/` alias to point to the `src/` directory (configured via `vite-tsconfig-paths`).
- **Styling**: Uses Chakra UI components.
- **Type Safety**: Strict TypeScript usage. Core models should be defined in `src/types.ts`.
- **Linting**: ESLint configuration present (`eslint.config.js`), focusing on React and TypeScript best practices.
