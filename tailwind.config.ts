import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        obsidian: "#0A0A08",
        ivory: "#F5F2EC",
        sand: "#C8B89A",
        rust: "#C4541A",
        slate: "#3D4A5C",
        mist: "#E8E4DC",
        ember: "#E8652A",
      },
      letterSpacing: {
        widest2: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
