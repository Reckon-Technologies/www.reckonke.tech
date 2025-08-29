import antfu from "@antfu/eslint-config";

/**
 * A custom ESLint configuration for libraries that use React.
 *
  @type {import("eslint").Linter.Config[]} */
export default antfu(
  {
    type: "app",
    nextjs: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: ["**/env.ts"],
  },
  {
    rules: {
      "ts/no-redeclare": "off",
      "node/prefer-global/process": ["off"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
    },
  },
);
