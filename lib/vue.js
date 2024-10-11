/* eslint-disable import/no-commonjs */
module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'vue',
  ],
  extends: [
    'eslint-config-syndrobox/lib/defaults',
    'plugin:vue/recommended',
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'import/prefer-default-export': 'error',
      },
    },
  ],
};
