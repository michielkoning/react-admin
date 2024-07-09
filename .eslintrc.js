module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import"],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-admin",
            group: "external",
            position: "before",
          },
          {
            pattern: "@react-admin/**",
            group: "external",
            position: "before",
          },
        ],
        "newlines-between": "never",
        groups: [
          ["external", "builtin", "internal"],
          ["parent", "sibling", "index"],
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
  },
};
