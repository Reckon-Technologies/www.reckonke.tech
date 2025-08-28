import antfu from "@antfu/eslint-config";

/**
 * A custom ESLint configuration for libraries that use React.
 *
  @type {import("eslint").Linter.Config[]} */
export default antfu(
  {
    type: "app",
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
        },
      ],
    },
  },
);
