/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  plugins: [
    'mocha',
  ],
  extends: [
    'eslint-config-syndrobox/lib/defaults',
    'plugin:mocha/recommended',
  ],
  rules: {
    'no-unused-expressions': 'off',
  },
};
