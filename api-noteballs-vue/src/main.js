import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';
import piniaPluginPersistedState from "pinia-plugin-persistedstate";

const pinia = createPinia();

// pinia.use(piniaPluginPersistedState)

pinia.use(({ store }) => {
    store.router = markRaw(router)
  },piniaPluginPersistedState)

createApp(App).use(pinia).use(router).mount('#app')
