const postcss = require('rollup-plugin-postcss');
const images = require('@rollup/plugin-image');
module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({
        inject: true,
        extract: !!options.writeMeta,
        modules: true, // Use css modules
        // namedExport: true, // Class name export
        camelCase: true, // Support humps
        sass: true, // Whether to use sass
        // autoModules:true,
        // namedExports(name) {
        // // Maybe you simply want to convert dash to underscore
        // return name.replace(/-/g, '_')
        // }
        }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
