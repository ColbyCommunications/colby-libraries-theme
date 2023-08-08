import { createApp } from 'vue/dist/vue.esm-bundler';
import './styles/styles.scss';

import LibrariesSearch from './twig/components/libraries-search/LibrariesSearch.vue';
import LibrariesSearchBanner from './twig/components/libraries-search-banner/LibrariesSearchBanner.vue';

const app = createApp(LibrariesSearch);
app.mount('#libraries-search');

const searchBanner = createApp(LibrariesSearchBanner);
searchBanner.mount('#libraries-search-banner');
