module.exports = {
    presets:
      process.env.NODE_ENV === 'test'
        ? [ [ '@babel/preset-env', { targets: { node: 'current' } } ] ]
        : [
            [
              '@babel/preset-env',
              {
                targets: '>2%, not IE 11'
              }
            ]
          ]
  };
  