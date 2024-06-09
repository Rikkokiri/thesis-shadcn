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
    fontSize: {
      // font-size, line-height
      xs: ["0.75rem", "1rem"] /* 12px */,
      sm: ["0.875rem", "1.5"] /* 14px */,
      base: ["1rem", "1.5"] /* 16px */,
      lg: [
        "1.125rem" /* 18px */,
        {
          lineHeight: "1.5",
          fontWeight: 600,
        },
      ],
      xl: ["1.25rem", "1.5"] /* 20px */,
      "2xl": ["1.5rem", "1.5"] /* 24px */,
      "3xl": [
        "1.75rem" /* 28px */,
        {
          lineHeight: "1.3",
          fontWeight: 900,
        },
      ],
      "4xl": [
        "2rem" /* 32px */,
        {
          lineHeight: "1.2",
          fontWeight: 700,
        },
      ],
    },
    borderRadius: {
      none: "0",
      sm: "2px",
      DEFAULT: "4px",
      md: "6px",
      lg: "8px",
      full: "9999px",
      50: "50%",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        modal: "hsl(var(--modal))",
        backdrop: "hsl(var(--backdrop))",
        radio: "hsl(var(--radio))",
        ring: "hsl(var(--ring))",
        body: "hsl(var(--body))",
        logo: "hsl(var(--yle-logo))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        heading: "hsl(var(--heading))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        /* TODO: Delete */
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        disagree: "hsl(var(--disagree))",
        agree: "hsl(var(--agree))",
      },
      lineHeight: {
        "140": "1.4",
      },
      spacing: {
        "4.5": "1.125rem",
        "arrow-sm": "10px",
      },
      size: {
        "arrow-sm": "10px",
      },
      height: {
        toolbar: "72px",
        main: "calc(100vh - 72px)",
      },
      boxShadow: {
        toolbar: "0 0 7px 0 hsl(var(--black-15))",
        matchbar: "0 2px 4px 0 hsl(var(--black-19))",
        modal: "rgba(0, 0, 0, 16%) 0 3px 6px 0, rgba(0, 0, 0, 23%) 0 3px 6px 0",
      },
      flex: {
        "auto-no-shrink": "1 0 auto",
      },
      keyframes: {
        "scale-option": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        "scale-option": "scale-option 0.3s ease 0s 1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
