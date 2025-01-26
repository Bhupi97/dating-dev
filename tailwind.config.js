// tailwind.config.js (ESM syntax)
import daisyui from 'daisyui'; // Import DaisyUI

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust this to match your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use the imported DaisyUI plugin
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'], // DaisyUI themes configuration
  },
};
