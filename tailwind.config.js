const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-1)",
          100: "var(--primary-2)",
          200: "var(--primary-3)",
          300: "var(--primary-4)",
          400: "var(--primary-5)",
          500: "var(--primary-6)",
          600: "var(--primary-7)",
          700: "var(--primary-color-active)",
          800: "var(--primary-color-hover)",
          900: "var(--primary-color)",
          950: "#44d62c",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#040404",
        },
      },
    },
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
  corePlugins: {
    preflight: false, // Esto evita conflictos con los estilos base de Ant Design
  },
};