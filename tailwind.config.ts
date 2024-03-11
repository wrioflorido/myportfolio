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
      },
      backgroundColor: {
        'primary': '#3490dc', // Example primary color
        'secondary': '#ffed4a', // Example secondary color
        // Add more custom colors as needed
        'forestgreen':'#228B22',
        'cranberry': '#561B1F',
        'golden':'#BEB078',
        'winterpine':'#C1CFCC',
        'jollyblue':'#193B53'

      },
      color:{
        'winterpine':'#C1CFCC'

      }
    },
  },
  plugins: [],
};
export default config;