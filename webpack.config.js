const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = (env, { mode }) => {
  const devMode = mode !== 'production';
  const config = {
    mode,
    entry: ['./src/js/main.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: ['>1%', 'last 4 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin('dist'),
      new CopyWebpackPlugin([
        { from: './manifest.json', to: './' },
        { from: './src/icons/', to: './icons/' },
      ]),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html')
      }),
      new WorkboxPlugin.GenerateSW()
    ],
    devServer: {
      historyApiFallback: true,
      compress: true,
      overlay: true,
      open: true,
      host: 'localhost',
      port: 3000,
      contentBase: 'dist',
      openPage: 'index.html',
      proxy: {
        '/api': {
          target: 'ws://localhost:5000',
          ws: true,
          secure: false
        }
      }
    }
  };

  return config;
};
