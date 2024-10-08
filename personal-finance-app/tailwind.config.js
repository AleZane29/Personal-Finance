/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#a991f7",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //     "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
      //     "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
      //     "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
      //     "--animation-btn": "0.25s", // duration of animation when you click on button
      //     "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
      //     "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
      //     "--border-btn": "1px", // border width of buttons
      //     "--tab-border": "1px", // border width of tabs
      //     "--tab-radius": "0.5rem", // border radius of tabs
      //   },
      // },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#3B81A9",
          secondary: "#89C7EC",
          ".table-zebra": {
            "background-color": "#191E24",
            tbody: {
              "tr:nth-child(odd)": {
                "background-color": "#1D232A",
              },
              "tr:nth-child(even)": {
                "background-color": "#191E24",
              },
            },
          },
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          secondary: "#3B81A9",
          ".table-zebra": {
            "background-color": "#f2f2f2",
            tbody: {
              "tr:nth-child(even)": {
                "background-color": "#f2f2f2",
              },
              "tr:nth-child(odd)": {
                "background-color": "white",
              },
            },
          },
        },
      },
      "dark",
      "light",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
