const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, './dist'),
        // publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "vue-style-loader"},
                    { loader: "css-loader"},
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    { loader: "vue-style-loader"},
                    { loader: "css-loader"},
                    { loader: "sass-loader"}
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // css自动添加前缀，单独抽取css到独立文件
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebPackPlugin({
            title: 'production',
            template: './index.html',
        }),
        new CleanWebpackPlugin()
    ],
    stats: {},
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue$': 'vue/dist/vue.esm.js',
        },
        extensions: ['.json', '.vue', '.ts', '.js'], // 默认解析扩展文件
    },
    devServer: {
        historyApiFallback: true,
        inline: true,
        publicPath: '/',
        stats: 'errors-only', //  'none' | 'errors-only' | 'minimal' | 'normal' | 'verbose'
        compress: true, // gzip 压缩
        contentBase: './dist',
        host: '0.0.0.0',
        progress: true,
        useLocalIp: true,
        port: 8080,
        hot: true,
        proxy: {},
    }
}