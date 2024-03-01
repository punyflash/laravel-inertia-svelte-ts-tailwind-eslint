import { createInertiaApp } from '@westacks/inertia-svelte';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { type ComponentType, hydrate } from 'svelte';
import '@/app.scss';

createInertiaApp({
    resolve: name => resolvePageComponent<ComponentType>(`./pages/${name}.svelte`, import.meta.glob<ComponentType>('./pages/**/*.svelte')),
    setup({ el, App, props }) {
        hydrate(App, {target: el, props});
        // @ts-ignore
        delete el.dataset.page
    }
})
