const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),  // Para crypto
    buffer: require.resolve("buffer/"),            // Para buffer
    stream: require.resolve("stream-browserify"),  // Para stream
    vm: require.resolve("vm-browserify"),          // Para vm
  };

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],  // Proveer Buffer globalmente
    }),
  ];

  return config;
};
