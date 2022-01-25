module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  /*   parserOptions: {
      parser: 'babel-eslint'
    }, */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /*  "vue/no-parsing-error": ["error", {
       "abrupt-closing-of-empty-comment": true,
       "absence-of-digits-in-numeric-character-reference": true,
       "cdata-in-html-content": true,
       "character-reference-outside-unicode-range": true,
       "control-character-in-input-stream": true,
       "control-character-reference": true,
       "eof-before-tag-name": true,
       "eof-in-cdata": true,
       "eof-in-comment": true,
       "eof-in-tag": true,
       "incorrectly-closed-comment": true,
       "incorrectly-opened-comment": true,
       "invalid-first-character-of-tag-name": true,
       "missing-attribute-value": true,
       "missing-end-tag-name": true,
       "missing-semicolon-after-character-reference": true,
       "missing-whitespace-between-attributes": true,
       "nested-comment": true,
       "noncharacter-character-reference": true,
       "noncharacter-in-input-stream": true,
       "null-character-reference": true,
       "surrogate-character-reference": true,
       "surrogate-in-input-stream": true,
       "unexpected-character-in-attribute-name": true,
       "unexpected-character-in-unquoted-attribute-value": true,
       "unexpected-equals-sign-before-attribute-name": true,
       "unexpected-null-character": true,
       "unexpected-question-mark-instead-of-tag-name": true,
       "unexpected-solidus-in-tag": true,
       "unknown-named-character-reference": true,
       "end-tag-with-attributes": true,
       "duplicate-attribute": true,
       "end-tag-with-trailing-solidus": true,
       "non-void-html-element-start-tag-with-trailing-solidus": false,
       "x-invalid-end-tag": true,
       "x-invalid-namespace": true
     }] */
  },

}
