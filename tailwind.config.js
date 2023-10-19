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
                'footerMenu':"#0f1123",
                'btnSwiper':"#982530",
                'btnArrowSwiper':"#c6878d",
                'offer':"#2F3D53",
                'linkHover':'#234786',
                'btnSingleHover':'#2a4984',
                'genre':'#232729',
                'singleBody':'#0C1012',
                'itemMenuFooter':'#787878',
                'itemSingle':'#24282A',
                'comment':'#111618'
            },
            fontSize:{
                '1xl':'18px',
                '0xl':'8px'
            },
            spacing: {
                '39rem': '36rem',
            },
            boxShadow: {
                'custom':'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                '3xl': '0 0 1.4rem -0.4rem rgba(0,0,0,.6)',
            },
            lineHeight: {
                '12': '3rem',
            },
            width: {
                '49.5%': '49.5%',
            },
            zIndex: {
                '-1': '-1',
            }
        },
    },
    plugins: [],
}