const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const port = process.env.CLIENT_PORT || 4000;

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port,
    open: true,
  },
});
