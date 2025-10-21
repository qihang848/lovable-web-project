/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb",
        card: "#ffffff",
        border: "#e5e7eb",
        primary: "#2563eb",
        "primary/80": "#3b82f6cc",
        "muted-foreground": "#6b7280",
      },
    },
  },
  plugins: [],
};
