module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'no-nested-ternary': 'off',
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/prefer-stateless-function': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off'
  },
};
