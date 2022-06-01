const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        app: path.join(__dirname, "demo", "index.tsx"),
    },
    // target: "web",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "demo"),
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        library: "react-timeline-component",
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "demo", "index.html"),
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
    ],
};
