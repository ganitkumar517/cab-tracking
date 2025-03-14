/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'bounce-3s': 'bounce 1s infinite 6s',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': { transform: 'translateY(-10%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.2, 0, 0.2, 1)' },
                },
            },
            screens: {
                xs: "350px",
                mxs: "390px"
            },
            fontSize: {
                "xs-regular": ["10px", { lineHeight: "120%", fontWeight: "400" }],
                "xs-bold": ["10px", { lineHeight: "120%", fontWeight: "700" }],
                "sm-regular": ["13px", { lineHeight: "120%", fontWeight: "400" }],
                "sm-bold": ["13px", { lineHeight: "120%", fontWeight: "700" }],
                "base-regular": ["16px", { lineHeight: "120%", fontWeight: "400" }],
                "base-bold": ["16px", { lineHeight: "120%", fontWeight: "700" }],
                "lg-regular": ["20px", { lineHeight: "120%", fontWeight: "400" }],
                "lg-bold": ["20px", { lineHeight: "120%", fontWeight: "700" }],
                "h6-regular": ["25px", { lineHeight: "120%", fontWeight: "400" }],
                "h6-bold": ["25px", { lineHeight: "120%", fontWeight: "700" }],
                "h5-regular": ["31px", { lineHeight: "120%", fontWeight: "400" }],
                "h5-bold": ["31px", { lineHeight: "120%", fontWeight: "700" }],
                "h4-regular": ["39px", { lineHeight: "120%", fontWeight: "400" }],
                "h4-bold": ["39px", { lineHeight: "120%", fontWeight: "700" }],
                "h3-regular": ["49px", { lineHeight: "120%", fontWeight: "400" }],
                "h3-bold": ["49px", { lineHeight: "120%", fontWeight: "700" }],
                "h2-regular": ["61px", { lineHeight: "120%", fontWeight: "400" }],
                "h2-bold": ["61px", { lineHeight: "120%", fontWeight: "700" }],
                "h1-regular": ["76px", { lineHeight: "120%", fontWeight: "400" }],
                "h1-bold": ["76px", { lineHeight: "120%", fontWeight: "700" }],
            },
            fontFamily: {
                sarabun: ["Sarabun", "sans-serif"],
            },
            colors: {
                primary: {
                    50: "#fcedea",
                    75: "#f4b4ab",
                    100: "#ef9488",
                    200: "#e86654",
                    300: "#e34731",
                    400: "#9f3222",
                    500: "#8a2b1e",
                },
                secondary: {
                    50: "#e6e6e6",
                    75: "#969696",
                    100: "#6b6b6b",
                    200: "#2b2b2b",
                    300: "#000000",
                    400: "#000000",
                    500: "#000000",
                },
                success: {
                    50: "#ecfcec",
                    75: "#b1f1b0",
                    100: "#91eb8f",
                    200: "#61e35f",
                    300: "#41dd3e",
                    400: "#2e9b2b",
                    500: "#288726",
                },
                warning: {
                    50: "#fef8e9",
                    75: "#f9e2a6",
                    100: "#f6d682",
                    200: "#f3c44c",
                    300: "#f0b827",
                    400: "#a8811b",
                    500: "#927018",
                },
                danger: {
                    50: "#fee8e8",
                    75: "#fb9f9f",
                    100: "#f97878",
                    200: "#f73e3e",
                    300: "#f51616",
                    400: "#ac0f0f",
                    500: "#950d0d",
                },
                neutrals: {
                    0: "#ffffff",
                    10: "#fafbfb",
                    20: "#f5f6f7",
                    30: "#ebedf0",
                    40: "#dfe2e6",
                    50: "#c2c7d0",
                    60: "#b3b9c4",
                    70: "#a6aebb",
                    80: "#98a1b0",
                    90: "#8993a4",
                    100: "#7a8699",
                    200: "#6b788e",
                    300: "#5d6b82",
                    400: "#505f79",
                    500: "#42526d",
                    600: "#354764",
                    700: "#243757",
                    800: "#15294b",
                    900: "#091e42",
                },
            },
            borderRadius: {
                10: "10px",
            },
            boxShadow: {
                custom: "0px 8px 48px 0px rgba(227, 71, 49, 0.16)",
                current: "0px 8px 15px 0px rgba(227, 71, 49, 0.16)",
                faq: "0px 20px 50px 0px rgba(227, 71, 49, 0.08)",
                large: "0 10px 15px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.3)",
                "desktop-only": "0px 0px 14px 0px #00000021",
            },
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(180deg, rgba(227, 71, 49, 0.05) 0%, rgba(18, 20, 29, 0.05) 100%)",
                "custom-effect": `linear-gradient(90deg, #DA00FF 0%, #4479CE 100%)`,
                "custom-blur":
                    "linear-gradient(0deg, rgba(6, 6, 6, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)",
            },
        },
    },
    plugins: [],
}

