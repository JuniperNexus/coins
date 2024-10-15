/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    arrowParens: 'always',
    overrides: [
        {
            files: '**/*.md',
            options: {
                tabWidth: 2,
            },
        },
    ],
    plugins: ['prettier-plugin-pkg', 'prettier-plugin-tailwindcss'],
    printWidth: 100,
    semi: true,
    singleQuote: true,
    tabWidth: 4,
    tailwindFunctions: ['clsx', 'cn', 'cva'],
    trailingComma: 'all',
};

export default config;
