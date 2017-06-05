var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
      index: './frontend/js/index.js'
    },
    output: {
        path: __dirname + "/public/",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                  loader: "babel-loader",
                  query: {
                    plugins: ['transform-decorators-legacy' ],
                    presets: ['react', 'es2015', 'stage-0']
                  }
                  }
                ]
            },
            {
              test: /\.css$/,
              loader: 'style-loader!css-loader'
            },
            {
              test: /\.(woff|woff2)$/,
              loader: "url-loader",
              options: {
                prefix: "font/",
                limit: 5000
              }
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader",
              options: {
                limit: 10000,
                mimetype: "application/octet-stream"
              }
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: "file-loader"
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: "url-loader",
              options: {
                limit: 10000,
                mimetype: "image/svg+xml"
              }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './frontend/entry.ejs', inject: false}),
        new HtmlWebpackPlugin({template: './frontend/entry.ejs', inject: false, filename: 'index.html'}),
        new HtmlWebpackPlugin({template: './frontend/entry.ejs', inject: false, filename: 'admin.html'})
    ]
};
