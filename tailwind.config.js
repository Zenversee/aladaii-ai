/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "Noble-Black/300": "#9B9C9E",
                "Stem-Green/500": "#B6F09C",
                "Noble-Black/600": "#1A1D21",
                "Noble-Black/400": "#686B6E",
                "hover-btnBG": "#292C30",
                "input-bg": "#0D0F10",
                "input-border": "#27292A",
            },
        },
        backgroundImage: (theme) => ({
            "signup-banner": "url('/signup/banner.png')",
        }),
    },
    plugins: [],
};
