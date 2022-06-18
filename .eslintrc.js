module.exports = {
  // extends: [ 'plugin:vue/vue3-recommended', '@vue/typescript/recommended' ],
  plugins: [ '@typescript-eslint' ],
  env: {
    node: true
  },
  overrides: [
    {
      files: '*.vue',
      extends: [ 'plugin:vue/vue3-recommended', '@vue/typescript/recommended' ],
      rules: {
        'vue/multi-word-component-names': 'off',
        'no-var': 'error',
        'vue/no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'error', // 使用 ts 未使用变量的规则 比如枚举类型在es中会报错
        'semi': [ 'error', 'always' ],
        'comma-dangle': 'error',
        'id-length': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'no-unused-vars': 'error',
        'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
        'no-unreachable': 'error',
        'keyword-spacing': 'error',
        'semi-spacing': 'error',
        'comma-spacing': 'error',
        'key-spacing': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
          }
        ],
        'space-infix-ops': 2,
        'no-irregular-whitespace': 2, // 不规则的空白不允许
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/require-default-prop':"off"
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [ 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended',"plugin:@typescript-eslint/recommended" ],
      rules: {
        'no-var': 'error',
        'vue/no-unused-vars': 'error',
        '@typescript-eslint/no-unused-vars': 'error', // 使用 ts 未使用变量的规则 比如枚举类型在es中会报错
        'semi': [ 'error', 'always' ],
        'comma-dangle': 'error',
        'id-length': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'no-unused-vars': 'error',
        'quotes': [ 'error', 'single', { allowTemplateLiterals: true } ],
        'no-unreachable': 'error',
        'keyword-spacing': 'error',
        'semi-spacing': 'error',
        'comma-spacing': 'error',
        'key-spacing': 'error',
        'prefer-const': [
          'error',
          {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
          }
        ],
        'space-infix-ops': 2,
        'no-irregular-whitespace': 2, // 不规则的空白不允许
      }
    }
  ]
};
