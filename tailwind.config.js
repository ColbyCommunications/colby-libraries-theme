const parentConfig = require('../colby-college-theme/tailwind.config');

const childConfig = {
    content: ['./src/**/*.{twig,vue}', '../colby-college-theme/src/**/*.{twig,vue}'],
    theme: {
        ...parentConfig.theme,
        colors: {
            ...parentConfig.theme.colors,
            lightGray: '#e4e8f0',
            colbyBlue: '#002878',
        },
    },
    plugins: [...parentConfig.plugins],
};

module.exports = childConfig;
