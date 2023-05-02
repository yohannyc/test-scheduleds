module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'import',
        'prettier'
    ],
    rules: {
        'quotes': ['error', 'single'],
        'no-console': 'error',
        'no-debugger': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'import/order': ['error', {
            'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            'newlines-between': 'always-and-inside-groups',
            'alphabetize': {
                'order': 'asc',
                'caseInsensitive': true
            }
        }],
        'prettier/prettier': [
            'error',
            {
                'printWidth': 100,
                'tabWidth': 2,
                'useTabs': false,
                'singleQuote': true,
                'trailingComma': 'es5',
                'jsxBracketSameLine': false
            }
        ]
    },
};