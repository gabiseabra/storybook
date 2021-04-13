module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    compact: true,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ],
    env: {
      development: {
        plugins: ['react-refresh/babel'],
      },
    },
  };
};
