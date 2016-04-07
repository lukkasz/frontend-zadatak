var path = require('path');

module.exports = {
    entry: {
        homepage: './src/js/bundles/homepage.js'
    },
    output: {
        path: 'public/js/bundles',
        filename: '[name].js',
        publicPath: "js/bundles/"
    },
    resolve: {
        root: [
            path.resolve('./src')
        ]
    }
};
