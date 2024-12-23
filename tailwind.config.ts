import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      surface: "var(--color-surface)",
      "panel-solid": "var(--color-panel-solid)",
      "panel-translucent": "var(--color-panel-translucent)",

      gray: generateScale("gray", 12),
      mauve: generateScale("mauve", 12),
      slate: generateScale("slate", 12),
      sage: generateScale("sage", 12),
      olive: generateScale("olive", 12),
      sand: generateScale("sand", 12),
      tomato: generateScale("tomato", 12),
      red: generateScale("red", 12),
      ruby: generateScale("ruby", 12),
      crimson: generateScale("crimson", 12),
      pink: generateScale("pink", 12),
      plum: generateScale("plum", 12),
      purple: generateScale("purple", 12),
      violet: generateScale("violet", 12),
      iris: generateScale("iris", 12),
      indigo: generateScale("indigo", 12),
      blue: generateScale("blue", 12),
      cyan: generateScale("cyan", 12),
      teal: generateScale("teal", 12),
      jade: generateScale("jade", 12),
      green: generateScale("green", 12),
      grass: generateScale("grass", 12),
      bronze: generateScale("bronze", 12),
      gold: generateScale("gold", 12),
      brown: generateScale("brown", 12),
      orange: generateScale("orange", 12),
      amber: generateScale("amber", 12),
      yellow: generateScale("yellow", 12),
      lime: generateScale("lime", 12),
      mint: generateScale("mint", 12),
      sky: generateScale("sky", 12),
      black: generateScale("black", 12),
      white: generateScale("white", 12),

      focus: generateScale("focus", 12),
      accent: generateScale("accent", 12),
    },

    borderRadius: {
      DEFAULT: '0.25rem',
      ...generateScale('radius', 6)
    },

    boxShadow: generateScale('shadow', 6)
  },
  plugins: [],
} satisfies Config;

function generateScale(name: string, length: number) {
  const scale = Array.from({ length }, (_, i) => {
    const id = i + 1;
    return [
      [id, `var(--${name}-${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
