/// <reference types="vitest" />
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { execSync } from "child_process";
import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(() => {
  process.env.VITE_GIT_COMMIT_DATE = execSync("git log -1 --format=%cI")
    .toString()
    .trimEnd();
  process.env.VITE_GIT_COMMIT_HASH = execSync("git describe --always --dirty")
    .toString()
    .trimEnd();

  return {
    plugins: [
      viteReact({ babel: { plugins: ["babel-plugin-react-compiler"] } }),
      tsconfigPaths(),
      TanStackRouterVite(),
      svgr(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    base: "/gps-routes",
    build: {
      sourcemap: true,
    },
  };
});
