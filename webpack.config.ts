/*tslint:disable:object-literal-sort-keys*/

import * as CopyPlugin from 'copy-webpack-plugin'
import * as path from 'path'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  mode: 'development',

  entry: './src/index.ts',

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  output: {
    filename: 'index.js',
    library: ['live-order-board'],
    libraryTarget: 'umd',
    path: `${__dirname}/lib`
  },

  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/
      }
    ]
  },

  plugins: [
    new CopyPlugin([
      { from: './src/_typings/index.d.ts' }
    ])
  ]
}

export default config
