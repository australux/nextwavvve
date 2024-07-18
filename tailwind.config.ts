import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                frosted:
                    "linear-gradient(to bottom, rgba(var(--background-frost)), transparent)",
            },
            aspectRatio: {
                custom: "3 / 2",
            },
            colors: {
                card: {
                    base: "rgb(var(--background-base))",
                    secondary: "rgb(var(--background-secondary))",
                    "accent-1": "rgb(var(--accent-primary))",
                    "accent-2": "rgb(var(--accent-secondary))",
                    deco: "rgb(var(--deco-base))",
                    text: "rgb(var(--text-base))",
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};
export default config;
