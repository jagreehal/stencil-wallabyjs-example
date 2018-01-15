exports.config = {
  bundles: [{ components: ['my-app'] }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
