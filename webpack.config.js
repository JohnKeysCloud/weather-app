const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  console.log(`Mode: ${isProduction === true ? 'Production' : 'Development'}`);

  return {
    mode: isProduction ? 'production' : 'development',
    entry: {
      index: './src/js/app.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      clean: true, // removes files that aren't in use
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(s[ac]ss)$/i,
              use: [
                // 'style loader' Creates 'style' nodes from JS strings and injects them into DOM
                // MiniCssExtractPlugin.loader Extracts CSS into separate files and
                // creates a CSS file per JS file which contains CSS
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
              ],
              // executes from bottom to top
            },
            {
              test: /\.css$/i,
              use: [
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
              ],
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Cyclone Studios',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
        hash: false, // add hash to the file so filename is different on every build
        minify: {
          collapseWhitespace: isProduction ? true : false,
          removeComments: isProduction ? true : false,
        },
        template: './src/index.ejs',
        favicon: './src/assets/images/cyclone-favicon.gif',
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css',
      }),
    ],
    devServer: {
      static: path.join(__dirname, 'src'), // static files
      port: 3000,
      open: true, // open browser on server start
    },
    devtool: 'inline-source-map',
  };
};
