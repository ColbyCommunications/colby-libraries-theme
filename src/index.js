import { createApp } from 'vue/dist/vue.esm-bundler';
import './styles/styles.scss';

import LibrariesSearch from './twig/components/libraries-search/LibrariesSearch.vue';

const app = createApp(LibrariesSearch);
app.mount('#libraries-search');
