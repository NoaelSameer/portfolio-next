/** @type {import('tailwindcss').Config} */
<<<<<<< Updated upstream
<<<<<<< Updated upstream
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Covers files in src/ (e.g., components, pages)
    "./app/**/*.{js,jsx,ts,tsx}", // Covers files in app/ (for App Router)
    "./pages/**/*.{js,jsx,ts,tsx}", // Covers files in pages/ (for Pages Router)
    "./components/**/*.{js,jsx,ts,tsx}", // Covers components if not in src/
  ],
  theme: {
    extend: {
      // Map custom CSS variables to Tailwind utilities
      borderColor: {
        border: "var(--border)", // Enables `border-border` utility
      },
      colors: {
        background: "var(--card)", // Enables `bg-background` utility
        foreground: "var(--card-foreground)", // Enables `text-foreground` utility
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        input: "var(--input)",
        ring: "var(--ring)",
        // Chart colors
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        // Sidebar colors
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      // Add custom font family
      fontFamily: {
        cartoony: ['"Shadows Into Light"', "cursive"], // Properly formatted font stack
      },
    },
  },
  plugins: [],
};
=======
=======
>>>>>>> Stashed changes

export default{
    fontFamily:{
        cartoony: ["Shadows Into Light", cursive]
    }
}

//   font-family: "Shadows Into Light", cursive;
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
