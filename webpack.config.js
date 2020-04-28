const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = () => {

    return {
        entry: './src/index.js',
        // watch: true,
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        plugins: [new MiniCssExtractPlugin({filename: 'styles.css'})],
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }]
        },


        devtool: 'source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
        }
    }
}