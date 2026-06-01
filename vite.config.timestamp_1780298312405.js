// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/start-vite-plugin";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
var vite_config_default = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tailwindcss(),
    tanstackStart()
  ]
});
export {
  vite_config_default as default
};
