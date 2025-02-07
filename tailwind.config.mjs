/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dark : {
          ...require("daisyui/src/theming/themes")["dark"],
          "--primary": "#09BC8A",
          "--secondary": "#004346",
          ".menu li > *:not(ul):not(.menu-title):not(details)": {
            "margin-bottom": "12px;",
            "height": "40px;",
          },
          ".menu li > *:not(ul):not(.menu-title):not(details).active": {
            "background-color": "var(--primary);",
            "color": "#000000",
            "font-weight": "600",
          },
        },
      },  
    ],
  },
};
