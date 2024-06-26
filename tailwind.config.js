import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                default: "1440px",
            },
            colors: {
                "light-green": "#c1dcdc",
                "button-green": "#85b791b3",
                "light-black": "#1a1a1a",
                "icon-light": "#000",
                "icon-dark": "#fff",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
