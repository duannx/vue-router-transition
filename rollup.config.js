import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss'

export default async function config (args) {
    return [{
        input: ['src/index.ts'],
        output: {
            dir: 'dist',
            format: 'cjs',
        },
        plugins: [
            vue(),
            typescript()
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