module.exports = {
  core: {
    builder: 'webpack4',
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions'],
};
