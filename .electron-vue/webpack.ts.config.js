const path = require('path')

/*
 *ts config*/
let tsConfig = {
    devtool: 'inline-source-map',
    entry: path.join(__dirname, '../src/main/VkClient/index.ts'),
    output: {
        path:path.join(__dirname, '../src/main/VkClient/'),
        filename: 'index.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}

module.exports = tsConfig