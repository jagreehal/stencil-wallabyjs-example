var compilerOptions = require('./tsconfig.json');
compilerOptions.module = 'CommonJs';
compilerOptions.target = 'ES5';
module.exports = function(wallaby) {
  return {
    debug: true,
    files: ['src/components/my-app/my-app.tsx', 'package.json'],

    tests: ['src/components/my-app/my-app.spec.tsx'],

    env: { type: 'node' },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions)
    },

    setup: wallaby => {
      wallaby.testFramework.configure(require('./package.json').jest);
    },

    testFramework: 'jest'
  };
};
