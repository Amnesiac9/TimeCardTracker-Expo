/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {},
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'gray': {
                100: '#f7f7f7',
                200: '#e5e5e5',
                300: '#d4d4d4',
                400: '#a3a3a3',
                500: '#737373',
                600: '#525252',
                700: '#404040',
                800: '#262626',
                900: '#171717',
            },
        },
    },
    plugins: [],
};
