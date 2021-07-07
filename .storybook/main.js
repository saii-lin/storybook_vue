const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // allow SCSS
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    // setup URL Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    };

    // Return the altered config
    return config;
  },
}