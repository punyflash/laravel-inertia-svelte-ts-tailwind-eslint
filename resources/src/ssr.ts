import createServer from '@inertiajs/svelte/server'
import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createServer(page =>
    createInertiaApp({
        page,
        resolve: name => resolvePageComponent(`./pages/${name}.svelte`, import.meta.glob('./pages/**/*.svelte')),
    }),
import.meta.env.VITE_SSR_PORT ?? 13714
)
