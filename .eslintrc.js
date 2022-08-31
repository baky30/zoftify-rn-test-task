module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["*.js", "*.ts", "*.tsx"],
      rules: {
        quotes: [
          "error",
          "double",
          {
            avoidEscape: true,
          },
        ],
        "@typescript-eslint/quotes": [
          "error",
          "double",
          {
            avoidEscape: true,
          },
        ],
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
      },
    },
  ],
};
