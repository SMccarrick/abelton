module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    theme: {
        colors: {
            yellow: "#fbffa7",
            red: "#ff764d",
            purple: "#d5b3ff",
            green: "#b6ffc0",
            lightBlue: "#b1c5ff",
            darkBlue: "#0000ff",
        },
    },
};
