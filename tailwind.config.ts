import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "rgb(var(--primary-bg)/<alpha-value>)",
        "primary-text": "rgb(var(--primary-text)/<alpha-value>)",
        "secondary-bg": "rgb(var(--secondary-bg)/<alpha-value>)",
        "secondary-text": "rgb(var(--secondary-text)/<alpha-value>)",
      }
    },
  },
  plugins: [],
};
export default config;
