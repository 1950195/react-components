module.exports = function override(config) {
    config.module.rules.push({
        test: '/\.scss$/',
        use: ['sass-extract-loader'],
    });

    return config;
};
