// === IMPORT LOADERS ===
//
// 1. MadeByWild Next Defaults
const withTM = require("next-transpile-modules");
const styledJsxLoader = require("styled-jsx/webpack");
const withProgressBar = require("next-progressbar");

// 2. Custom
// Offline support
// const withOffline = require('next-offline')

module.exports = withTM(
  withProgressBar({
    progressBar: {
      profile: true
    },
    webpack(config, options) {
      // Perform customizations to webpack config
      config.module.rules.push({
        test: /\.s([ac])ss$/,
        use: [
          options.defaultLoaders.babel,
          {
            loader: styledJsxLoader.loader,
            options: {
              type: "scoped"
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./"]
            }
          },
          {
            loader: "sass-resources-loader",
            options: {
              sourceMap: true,
              resources: ["./vars.scss"]
            }
          }
        ]
      });
      return config;
    },
    exportPathMap: () => ({
      "/": { page: "/Home" }
    }),
    cssModules: true,
    cssLoaderOptions: {
      localIdentName: "[local]___[hash:base64:5]"
    }
  })
);
