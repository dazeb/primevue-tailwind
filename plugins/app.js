import DeferredDemo from '@/components/demo/DeferredDemo.vue';
import CodeHighlight from '@/directives/CodeHighlight';
import Aura from '@/presets/aura';
import Lara from '@/presets/lara';

const $appStatePlugin = {
    install: (app) => {
        const _appState = reactive({
            preset: 'Aura',
            primary: 'emerald',
            surface: null,
            darkMode: false,
            codeSandbox: false,
            sourceType: 'options-api',
            newsActive: false,
            announcement: null,
            storageKey: 'primevue-tailwind '
        });

        watch(
            () => _appState.preset,
            (newValue) => {
                if (newValue === 'Lara') app.config.globalProperties.$primevue.config.pt = Lara;
                else if (newValue === 'Aura') app.config.globalProperties.$primevue.config.pt = Aura;
            }
        );

        app.config.globalProperties.$appState = _appState;
    }
};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('DeferredDemo', DeferredDemo);
    nuxtApp.vueApp.directive('code', CodeHighlight);
    nuxtApp.vueApp.use($appStatePlugin);
});
