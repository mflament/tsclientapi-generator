import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';

export default [
    {
        input: ['./src/index.ts'],
        output: {
            dir: 'dist',
            format: 'esm',
            sourcemap: true,
        },
        context: 'window',
        plugins: [
            commonjs(),
            nodeResolve(),
            eslint(),
            typescript()
        ]
    }
];
