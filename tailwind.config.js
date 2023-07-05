const parentConfig = require('../colby-college-theme/tailwind.config');

const childConfig = {
    content: ['./src/**/*.{twig,vue}', '../colby-college-theme/src/**/*.{twig,vue}'],
    theme: {
        ...parentConfig.theme,
    },
    plugins: [...parentConfig.plugins],
};

module.exports = childConfig;
