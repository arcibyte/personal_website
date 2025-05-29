/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "oklch(14.7% 0.004 49.25)",
        primary: "oklch(86.9% 0.005 56.366)",
        foreground: "oklch(86.9% 0.005 56.366)",
        accent: "oklch(87.9% 0.169 91.605)",
        muted: "oklch(21.6% 0.006 56.043)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
