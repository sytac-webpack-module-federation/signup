const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
    },
    devServer: {
        port: 3002,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new ModuleFederationPlugin({
            name: 'signup',
            filename: 'remoteEntry.js',
            exposes: {
                './Signup': './src/Signup.js',
            },
            remotes: {
                uicomponents: "uicomponents@https://sytac-webpack-module-federation.github.io/ui-components/remoteEntry.js",
            },
            shared: {
                react: {singleton: true},
                "react-dom": {singleton: true},
                "react-router-dom": {singleton: true}
            }
        }),
    ],
};