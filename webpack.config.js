// written in commonjs (node way) because only
// ran from node (would take a bunch of steps to babel it)

const path = require('path');

module.exports = {
  // always run webpack from the root dir
  context: __dirname,
  entry: './public/javascript/ClientApp.js',
  // shows some source maps for tracking down errors
  // 'source-map' is complete, but much slower to build
  devtool: 'eval',
  output: { // where bundle.js will go
    path: path.join(__dirname, '/public/javascript'),
    filename: 'bundle.js'
  },
  resolve: {
    // first searches for no extension, then js, then json
    // import Blah from './Blah'
    // e.g. blah, then blah.js, then blah.json
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true, // if fail, tell why
    chunks: true
  },
  module: { // all of transforms want webpack to apply
    rules: [ // if passes this rule, apply this transform
      {
        // can exclude things
        // exclude: /node_modules/,
        // but more accurate to include what you really want
        include: path.resolve(__dirname, 'public/javascript'),
        // if it ends in .js
        test: /\.js$/,
        //apply this loader
        loader: 'babel-loader'
      }
    ]
  }
};
