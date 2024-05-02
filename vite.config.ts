import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            components: `${path.resolve(__dirname, "./src/components/")}`,
            public: `${path.resolve(__dirname, "./public/")}`,
            pages: path.resolve(__dirname, "./src/pages"),
            types: `${path.resolve(__dirname, "./src/@types")}`,
        },
    },
});
