/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors.js";

function formatCSSVarToRGB(varName) {
    if (!varName.startsWith("--")) {
        throw new Error('Invalid variable name. CSS variables should start with "--".');
    }
    return `rgb(var(${varName}) / <alpha-value>)`;
}

const grayLevels = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

const grayColors = Object.fromEntries(grayLevels.map((shade) => [`${shade}`, formatCSSVarToRGB(`--lg-gray-${shade}`)]));

const primaryShades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950", "DEFAULT"];
const primaryColors = Object.fromEntries(
    primaryShades.map((shade) => [
        `${shade}`,
        formatCSSVarToRGB(shade === "DEFAULT" ? "--lg-primary" : `--lg-primary-${shade}`),
    ]),
);

export default {
    content: {
        relative: true,
        files: [
            "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
            "./layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
            "./components/styles.css",
            "./components/**/*.{astro,html,js,jsx,md,mdx,css}",
        ],
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            screens: {
                "h-sm": { raw: "(max-height: 400px)" },
                "h-md": { raw: "(max-height: 700px)" },
            },
            colors: {
                terminal: primaryColors,
                gray: grayColors,
                page: {
                    background: formatCSSVarToRGB("--lg-page-background"),
                },
                main: {
                    background: formatCSSVarToRGB("--lg-main-background"),
                    border: formatCSSVarToRGB("--lg-main-border"),
                },
                primary: {
                    foreground: formatCSSVarToRGB("--lg-primary-foreground"),
                    border: formatCSSVarToRGB("--lg-primary-border"),
                },
                secondary: {
                    foreground: formatCSSVarToRGB("--lg-secondary-foreground"),
                    background: formatCSSVarToRGB("--lg-secondary-background"),
                    border: formatCSSVarToRGB("--lg-secondary-border"),
                },
                active: {
                    foreground: formatCSSVarToRGB("--lg-active-foreground"),
                    background: formatCSSVarToRGB("--lg-active-background"),
                    border: formatCSSVarToRGB("--lg-active-border"),
                },
                inactive: {
                    foreground: formatCSSVarToRGB("--lg-inactive-foreground"),
                    border: formatCSSVarToRGB("--lg-inactive-border"),
                },
                red: {
                    ...colors.red,
                    foreground: formatCSSVarToRGB("--lg-red-foreground"),
                },
                green: {
                    foreground: formatCSSVarToRGB("--lg-green-foreground"),
                },
                yellow: {
                    ...colors.yellow,
                    foreground: formatCSSVarToRGB("--lg-yellow-foreground"),
                },
                blue: {
                    ...colors.blue,
                    foreground: formatCSSVarToRGB("--lg-blue-foreground"),
                },
                orange: {
                    ...colors.orange,
                    foreground: formatCSSVarToRGB("--lg-orange-foreground"),
                },
                editor: {
                    activeLine: formatCSSVarToRGB("--lg-editor-active-line"),
                    debugLine: formatCSSVarToRGB("--lg-editor-debug-line"),
                    cursor: formatCSSVarToRGB("--lg-editor-cursor"),
                    selectionBackground: formatCSSVarToRGB("--lg-editor-selection-background"),
                    opcode: formatCSSVarToRGB("--lg-editor-opcode"),
                    directive: formatCSSVarToRGB("--lg-editor-directive"),
                    label: formatCSSVarToRGB("--lg-editor-label"),
                    comment: formatCSSVarToRGB("--lg-editor-comment"),
                    register: formatCSSVarToRGB("--lg-editor-register"),
                    number: formatCSSVarToRGB("--lg-editor-number"),
                    string: formatCSSVarToRGB("--lg-editor-string"),
                    operator: formatCSSVarToRGB("--lg-editor-operator"),
                    punctuation: formatCSSVarToRGB("--lg-editor-punctuation"),
                },
            },
        },
    },
    safelist: [
        {
            pattern: /(bg|text|border)-(primary|page)/,
        },
        {
            pattern: /(bg|text|border)-(secondary|page)-.+/,
        },
        {
            pattern: /(bg|text|border)-(editor|page)-.+/,
        },
    ],
    plugins: [require("@tailwindcss/typography")],
};
