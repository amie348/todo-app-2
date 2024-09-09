const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utility': path.resolve(__dirname, 'src/utility'),
      '@common': path.resolve(__dirname, 'src/components/common'),
      '@src': path.resolve(__dirname, 'src'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
};
