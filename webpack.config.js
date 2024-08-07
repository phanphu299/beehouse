const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');

const tsFilesDir = './src/src-custom/ts';
const outputDir = './dist';
const htmlFilesDir = './src';

module.exports = (env, argv) => {
  const mode = argv.mode || 'development';
  const isProduction = mode === 'production' ? true : false;

  console.info(`isProduction is: ${isProduction}`);

  const _generateHtmlPlugins = (templateDir) => {
    const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
    return templateFiles.filter(item => item.endsWith('.html')).map(item => {
      const [name] = item.split('.');
      return new HtmlWebpackPlugin({
        template: path.resolve(__dirname, `${templateDir}/${item}`),
        filename: `${name}.html`,
        chunks: ['index'],
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
        } : false,
      });
    });
  };

  const _htmlPlugins = _generateHtmlPlugins(htmlFilesDir);

  return {
    entry: {
      index: `${tsFilesDir}/index.ts`,
      mainCustom: `${tsFilesDir}/mainCustom.ts`,
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
      ]
    },
    plugins: [
      ..._htmlPlugins,
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets',
            to: 'assets',
            globOptions: {
              ignore: ['**/scss/**']
            }
          },
          { from: 'src/src-custom/content', to: 'src-custom/content' },
        ]
      })
    ],
    optimization: isProduction ? {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })],
    } : {},
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, outputDir),
      clean: true,
    },
    mode: 'development',
    devServer: {
      compress: true,
      port: 9000,
      hot: true,
      open: false,
    },
    devtool: 'source-map',
  };
};