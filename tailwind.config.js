/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: ['index.html'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat'],
            },
            colors: {
                primary: '#A9A9A9',
                stat: '#E5E5E5',
                secondary: '#BDBDBD',
                footer: '#B9BDCF',
            },
            gridTemplateColumns: {
                gallery: 'repeat(3, auto)',
            },
            gridTemplateRows: {
                gallery: 'repeat(3, auto)',
            },
        },
    },
    plugins: [],
};
