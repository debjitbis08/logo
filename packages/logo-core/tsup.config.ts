import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    outExtension({ format }) {
        return {
            js: `.${format}.js`,
        };
    },
    dts: false,
    target: "es2020",
    loader: {
        ".ohm": "text",
    },
    tsconfig: "./tsconfig.json",
});
