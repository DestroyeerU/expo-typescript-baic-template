module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@types': './src/types',
            '@components': './src/components',
            '@hooks': './src/hooks',
            '@utils': './src/utils',
            '@styles': './src/styles',
          },
        },
      ],
    ],
    ignore: ['**/*/.test.ts', '**/*/.test.js', './src/types', '**/*.d.ts'],
  };
};
