module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "import"],
    rules: {
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "no-console": "warn",
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "parent", "sibling", "index", "object", "type"],
                pathGroups: [
                    {
                        pattern: "@/**/**",
                        group: "parent",
                        position: "before",
                    },
                ],
                alphabetize: { order: "asc", caseInsensitive: true },
                "newlines-between": "always"
            },
        ],
    },
};
