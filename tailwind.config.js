/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,vue}',
        './components/**/*.{js,ts,jsx,tsx,vue}',
        './app.vue',
        './layouts/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        extend: {
            colors: {
                'Blue': '#1476DF',
                'White': '#D9D9D9',
                'Black': '#1E1E1E',
                'Brown': '#866850'
            }
        },
    },
    plugins: [],
}

