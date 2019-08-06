var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'end', 'script.js'),
    output: {
        path: path.resolve(__dirname, 'end', 'build'),
        filename: 'output.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}