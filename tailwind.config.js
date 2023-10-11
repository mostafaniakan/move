/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./assets/**/*.{html,js}",
        '*.{html,js}'
    ],
    theme: {
        extend: {
            colors:{
                'btn':"#F3353E",
                'main':"#000F26",
                'btnSwiper':"#982530",
                'btnArrowSwiper':"#c6878d",
                'offer':"#2F3D53"
            },
            fontSize:{
                '1xl':'18px',
                '0xl':'8px'
            },

        },
    },
    plugins: [],
}