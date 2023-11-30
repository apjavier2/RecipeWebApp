import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{html,tsx,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#573806",
        secondary: "#e8b809",
      },
    },
  },
  plugins: [],
};
export default config;
