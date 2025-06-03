// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
    extend: {
        keyframes: {
            'slide-left': {
                '0%': { transform: 'translateX(100%)' },
                '100%': { transform: 'translateX(-100%)' },
            }
        },
        animation: {
            'slide-left': 'slide-left 10s linear infinite',
        },
    },
};
export const plugins = [];
  