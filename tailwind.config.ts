import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        body: "hsl(var(--body))",
        logo: "hsl(var(--yle-logo))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          5: "hsl(var(--gray-5))",
          10: "hsl(var(--gray-10))",
          20: "hsl(var(--gray-20))",
          30: "hsl(var(--gray-30))",
          40: "hsl(var(--gray-40))",
          50: "hsl(var(--gray-50))",
          60: "hsl(var(--gray-60))",
          70: "hsl(var(--gray-70))",
          80: "hsl(var(--gray-80))",
          90: "hsl(var(--gray-90))",
          95: "hsl(var(--gray-95))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
          9: "hsl(var(--black-9))",
          15: "hsl(var(--black-15))",
          41: "hsl(var(--black-41))",
          70: "hsl(var(--black-70))",
        },
        white: {
          DEFAULT: "hsl(var(--white))",
          17: "hsl(var(--white-17))",
          21: "hsl(var(--white-21))",
          71: "hsl(var(--white-71))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          dark: "hsl(var(--live-red))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          dark: "hsl(var(--green-bright))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "4px", // calc(var(--radius) - 4px)
        xs: "2px",
      },
      size: {},
      boxShadow: {
        toolbar: "0 0 7px 0 hsl(var(--black-15)) ",
      },
      flex: {
        "auto-no-shrink": "1 0 auto",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
