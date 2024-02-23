import { createInertiaApp } from '@westacks/inertia-svelte';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { ComponentType } from 'svelte';
import '@/app.scss';

createInertiaApp({
    resolve: name => resolvePageComponent<ComponentType>(`./pages/${name}.svelte`, import.meta.glob<ComponentType>('./pages/**/*.svelte')),
    setup({ el, App, props }) {
        new App({target: el, props, hydrate: true});
        // @ts-ignore
        delete el.dataset.page
    }
})
