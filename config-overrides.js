const { override, addLessLoader } = require('customize-cra');

const config = {
  webpack: override(addLessLoader({
    lessOptions: {
      javascriptEnabled: true
    }
  }))
};

module.exports = config;
