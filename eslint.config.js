import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    ignores: ["dist/"],
  },
  {
    settings: { react: { version: "detect" } },
  },
  pluginJs.configs.recommended,
  ...tsEslint.configs.recommended,
  pluginReactConfig,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
  },
];
