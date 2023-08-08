const parentConfig = require('../colby-college-theme/tailwind.config');

const childConfig = {
    content: ['./src/**/*.{twig,vue}', '../colby-college-theme/src/**/*.{twig,vue}'],
    theme: {
        ...parentConfig.theme,
        colors: {
            ...parentConfig.theme.colors,
            lightGray: '#e4e8f0',
            colbyBlue: '#002878',
            linkBlue: '#0039bd',
        },
        fontSize: {
            8: '0.5rem',
            10: '0.625rem',
            12: '0.75rem',
            14: '0.875rem',
            16: '1rem',
            18: '1.125rem',
            20: '1.25rem',
            24: '1.5rem',
            28: '1.75rem',
            30: '1.875rem',
            36: '2.25rem',
            48: '3rem',
            60: '3.75rem',
        },
        screens: {
            ...parentConfig.theme.screens,
            sm: '480px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
    },
    plugins: [...parentConfig.plugins],
};

module.exports = childConfig;
