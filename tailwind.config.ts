import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;