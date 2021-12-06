import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';

export default async function config (args) {
    return {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
        },
        plugins: [
            vue(),
            typescript()
        ],
    };
}