const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : {
        bundle: './src/index.js'
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".scss", ".sass"]
    },
    output : {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {
                use : 'babel-loader',
                test : /\.(js|jsx)$/,
                exclude: '/node_modules/'
            },
            {
                use : ['style-loader', 'css-loader', 'sass-loader'],
                test : /\.(s[ac]ss|css)$/,
            },
            {
                use : 'file-loader',
                test : /\.(png|svg|jpg|gif)$/
            }
        ]
    },
    devServer : {
        contentBase: "public",
        open: true,
        inline: true,
        hot: true,
        compress: true,
        port: 3002,
        watchContentBase: true,
        historyApiFallback: true
    },
    plugins : [
        new HtmlWebpackPlugin({ template: './public/index.html',title: 'Start Webpack'})
    ]
}
