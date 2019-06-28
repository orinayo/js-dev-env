module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1'
        },
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true }
      }
    ]
  ];

  return {
    presets,
    env: {
      production: {
        presets: [
          [
            '@babel/preset-env',
            {
              es2015: {
                modules: false
              }
            }
          ]
        ]
      }
    }
  };
};
