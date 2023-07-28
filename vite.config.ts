import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/src/app.ts',
            ssr: 'resources/src/ssr.ts',
            refresh: true,
        }),
        svelte({
            preprocess: [sveltePreprocess({
                typescript: true,
            })],
            compilerOptions: {
                hydratable: true,
            },
        }),
        eslint({ fix: true }),
    ],
    ssr: {
        noExternal: true,
        external: ['@inertiajs/core'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/src'),
        }
    }
});
