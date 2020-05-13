module.exports = {
  parser: 'babel-eslint',
  parserOptions: { 
    ecmaVersion: 2018,
    sourceType: 'module' 
  },
  extends: [ 
    'airbnb-base', 
    require.resolve('./rules/base')
  ],
  plugins: [ 'align-assignments' ],
  env: {
    node: true,
    browser: true,
    es6: true
  }
};