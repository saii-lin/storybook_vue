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
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   loaders: ["style-loader", "css-loader", "sass-loader"],
    //   include: path.resolve(__dirname, "../"),
    // });
    config.module.rules.push(
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `
              @import "@/assets/scss/base/_color.scss";
              `,
            }
          }
        ]
      },
      // TODO need to be resolve: customize theme
      {
        test: /\.less$/,
        use: [
          'style-loader','css-loader',
          {
            loader: 'less-loader', 
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#FD80AC',
                },
                javascriptEnabled: true,
              },
            }
          }
        ]
      },
    ),
    // setup URL Alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src")
    };

    // Return the altered config
    return config;
  },
}