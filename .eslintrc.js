module.exports = {
  "root": [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],

  "env": {
    "node": true
  },

  "extends": [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],

  "rules": {
    "no-console": 0,
    "no-debugger": "off",
    "no-shadow": 0,
    "operator-linebreak": [2, "before"],
    "linebreak-style": ["error", "windows"],
    "max-len": [
      "error",
      {
        "ignoreStrings": true,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
        "ignoreTemplateLiterals": true,
        "code": 120
      }
    ],
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state",
          "acc",
          "e"
        ]
      }
    ],
    'import/no-extraneous-dependencies': true,
    "no-mixed-operators": 0,
  },

  "parserOptions": {
    "parser": "babel-eslint"
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
