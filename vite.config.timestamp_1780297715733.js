// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
var config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tailwindcss(),
    tanstackStart({
      router: {
        entry: "router.tsx"
      }
    }),
    viteReact()
  ]
});
var vite_config_default = config;
export {
  vite_config_default as default
};
