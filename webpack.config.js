const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const gitRevision = require('git-revision');
const packages = require('./package.json');
const glob = require('glob');

const BUILD = process.env.BABEL_ENV = process.env.NODE_ENV;

const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist'),
};

const common = {
    output: {
        path: PATHS.dist,
    },
    resolve: {
        extensions: ['.jsx', '.js', ".scss"],
        modules: [PATHS.app, "node_modules"]
    },
    module: {
    rules: [
        {
            test: /\.jsx?$/,
            use: ['babel-loader'],
            include: PATHS.app
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: ['file-loader?name=img/[hash].[ext]', 'img-loader?-minimize']
        },

        {
            test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
            use: 'file-loader',
        }
    ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: 'app/index.html',
            inject: 'body'
        })
    ]
};

const different = function(build) {
    switch(build) {
        case "development":
            return {
                entry: ["whatwg-fetch", PATHS.app],
                output: {
                    publicPath: '/',
                    filename: 'bundle.js'
                },
                devServer: {
                    historyApiFallback: true,
                    hot: true,
                    inline: true,
                    stats: 'errors-only',
                    host: process.env.HOST,
                    port: process.env.PORT
                },
                module: {
                    rules: [
                        {
                            test: /\.scss$/,
                            use: [
                                {loader: "style-loader"},
                                {loader: "css-loader"},
                                 {loader: "postcss-loader"},
                                 {loader: "sass-loader", options: {
                                     includePaths: [PATHS.app, "node_modules"]
                                 }}
                            ],
                        },
                    ]
                },
                plugins: [
                    new webpack.HotModuleReplacementPlugin()
                ]
            };
        case "production":
            return {
                entry: {
                    app: ["whatwg-fetch",PATHS.app],
                    vendor: Object.keys(packages.dependencies)
                },
                output: {
                    publicPath: './',
                    filename: 'js/[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                },
                module: {
                    rules: [
                        {
                            test: /\.scss$/,
                            use: ExtractTextPlugin.extract({
                                fallback: "style-loader",
                                use: [
                                    {loader: "css-loader"},
                                     {loader: "postcss-loader"},
                                     {loader: "sass-loader", options: {
                                         includePaths: [PATHS.app]
                                     }}
                                ],
                            })
                        },
                    ]
                },
                plugins: [
                    new webpack.DefinePlugin({
                        "process.env": {
                            VERSION: JSON.stringify(gitRevision("short")),
                            NODE_ENV: JSON.stringify("production"),
                        }
                    }),
                    new ExtractTextPlugin("css/[name].[chunkhash].css"),
                    new webpack.optimize.CommonsChunkPlugin({
                        names: ['vendor', 'manifest']
                    }),
                    new webpack.optimize.UglifyJsPlugin({
                        compress: {warnings: false}
                    })
                ]
            };
        default:
            return {};
        }
}(BUILD);

module.exports = merge(common, different);
