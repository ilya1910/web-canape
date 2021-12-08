module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            {
                anonymous: "never",
                named: "always",
                asyncArrow: "always"
            }
        ],
        "multiline-ternary": "always",
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "react/no-unescaped-entities": 0
    }
};
