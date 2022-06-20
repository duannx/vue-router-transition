import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'

export default async function config (args) {
    return [{
        input: ['src/index.ts'],
        output: [
            {
                file: "dist/index.es.js",
                format: "es",
            },
            {
                file: "dist/index.cjs.js",
                format: "cjs",
                exports: "auto"
            }
        ],
        plugins: [
            vue(),
            typescript(
                { tsconfigDefaults: { compilerOptions: { declaration: true }, include: ['src/index.ts'] }, }
            )
        ],
    },
    {
        input: ['src/style.css'],
        output: {
            file: 'dist/style.css',
        },
        plugins: [
            postcss({
                extract: true,
                modules: false
            })
        ],
    }]
}