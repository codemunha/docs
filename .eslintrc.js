module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': false,
      ignores: ['/^router-/', '/^i-/']
    }],
    'indent': ['error', 2, {
      'VariableDeclarator': 1
    }],
    'vue/html-quotes': [
      'error',
      'double'
    ],
    'vue/this-in-template': [2, 0],
    'vue/html-indent': ['error', 2,
      {
        attribute: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'error',
    'vue/html-closing-bracket-newline': ['error', {
      'multiline': 'never'
    }],
    // 'vue/html-closing-bracket-spacing': 'error',
    // 'vue/html-end-tags': 'error',
    // 'vue/html-self-closing':[0],
    // 'vue/html-self-closing': ['error', {
    //   'html': {
    //     'void': 'never',
    //     'normal': 'always',
    //     'component': 'any'
    //   },
    //   'svg': 'always',
    //   'math': 'always'
    // }],
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 4,
      'multiline': {
        'max': 7,
        'allowFirstLine': true
      }
    }],
    'vue/attributes-order': 'off',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/name-property-casing': 'error',
    'vue/no-multi-spaces': 'error',
    'vue/no-template-shadow': 'off',
    'vue/prop-name-casing': 'error',
    'vue/v-bind-style': 'error',
    'vue/v-on-style': 'error',
    'brace-style': 'off',
    'eqeqeq': 'off',
    'eol-last': 'off',
    'space-before-function-paren': 'off'
    // 'no-eval':[0]
  },
  overrides: [
    {
      'files': ['src/*.js'],
      'excludedFiles': './node_modules'
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
