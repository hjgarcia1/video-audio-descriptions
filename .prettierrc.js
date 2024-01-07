/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: false,
    plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
    importOrder: [
        '<THIRD_PARTY_MODULES>',
        '',
        '^@Components/(.*)$',
        '',
        '^@/(.*)$',
        '',
        '^[./]',
        '',a
        '^(?!.*[.]css$)[./].*$',
        '.css$',
    ],
    importOrderSeparation: true,
    importOrderBuiltinModulesToTop: true
}
