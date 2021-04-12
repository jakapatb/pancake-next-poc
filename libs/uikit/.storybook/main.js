const rootMain = require("../../../.storybook/main");

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"]);

module.exports = {
  ...rootMain,
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "themeprovider-storybook/register",
  ],
};
