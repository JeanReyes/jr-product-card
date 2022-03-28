const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({
        inject: true,
        }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
