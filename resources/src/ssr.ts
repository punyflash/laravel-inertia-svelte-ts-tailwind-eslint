import createServer from '@westacks/inertia-svelte/server';
import { createInertiaApp } from '@westacks/inertia-svelte';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { ComponentType } from 'svelte';

createServer(page => createInertiaApp({
    page,
    resolve: name => resolvePageComponent<ComponentType>(`./pages/${name}.svelte`, import.meta.glob<ComponentType>('./pages/**/*.svelte')),
    setup: () => {}
}), import.meta.env.VITE_SSR_PORT)
