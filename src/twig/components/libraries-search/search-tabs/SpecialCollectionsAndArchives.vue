<template>
    <div>
        <form
            class="mb-[3px]"
            id="pc-search"
            name="pcSearchForm"
            action="https://librarysearch.colby.edu/discovery/search"
            accept-charset="utf-8"
            method="GET"
            @submit.prevent="handlePCSearch"
            v-show="collectionSelection === 'physical'"
        >
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Search for physical materials in our special collections and archives"
                    class="summon-search-field search-bar-full"
                    autocomplete="off"
                    v-model="pcQuery"
                />
                <input type="hidden" name="query" :value="'any,contains,' + pcQuery" />
                <input type="hidden" name="vid" value="01CBB_CCLIBRAR:COLBY" />
                <input type="hidden" name="search_scope" value="SCA" />
                <input type="image" @click.prevent="handlePCSearch" :src="search" alt="search" />
            </div>
        </form>
        <form
            class="mb-[3px]"
            id="sc-search"
            name="scSearchForm"
            :action="
                selectedSearchScope === 'digitalCommons'
                    ? 'https://digitalcommons.colby.edu/do/search/'
                    : 'https://www.jstor.org/action/doBasicSearch'
            "
            accept-charset="utf-8"
            method="GET"
            @submit.prevent="handleSCSearch"
            v-show="collectionSelection === 'digital'"
        >
            <div class="search-box">
                <input
                    type="text"
                    :placeholder="placeholderText"
                    class="summon-search-field search-bar"
                    autocomplete="off"
                    v-model="scQuery"
                />
                <input
                    type="hidden"
                    :name="selectedSearchScope === 'digitalCommons' ? 'q' : 'Query'"
                    :value="scQuery"
                />
                <input
                    v-if="selectedSearchScope === 'digitalCommons'"
                    type="hidden"
                    name="start"
                    value="0"
                />
                <input
                    v-if="selectedSearchScope === 'digitalCommons'"
                    type="hidden"
                    name="context"
                    value="624264"
                />
                <input
                    v-if="selectedSearchScope === 'digitalCommons'"
                    type="hidden"
                    name="facet"
                    value=""
                />
                <input
                    v-if="selectedSearchScope === 'JSTOR'"
                    type="hidden"
                    name="scope"
                    value="eyJpZCI6ICIxMDA0NTgwNzEiLCAicGFnZU5hbWUiOiAiQ29sYnkgQ29sbGVnZSIsICJwYWdlVXJsIjogIi9zaXRlL2NvbGJ5Y29sbGVnZWxpYnJhcmllcy8iLCAidHlwZSI6ICJwb3J0YWwifQ%3D%3D"
                />
                <div class="drop-down">
                    <div class="flex items-center">
                        <select v-model="selectedSearchScope" class="outline-offset-8">
                            <option value="digitalCommons">Digital Commons</option>
                            <option value="JSTOR">JSTOR</option>
                        </select>
                    </div>
                </div>
                <input type="image" @click.prevent="handleSCSearch" :src="search" alt="search" />
            </div>
        </form>
        <div class="mb-2 sc-btn-container text-12 sm:text-[11px] md:text-12">
            <input
                id="physical-collections-btn"
                type="radio"
                value="physical"
                name="special-collections"
                checked="checked"
                autocomplete="off"
                class="mr-2 hover:cursor-pointer"
                v-model="collectionSelection"
            />
            <label for="physical-collections-btn" class="mr-4">Physical Collections</label>
            <input
                id="digital-collections-btn"
                type="radio"
                value="digital"
                name="special-collections"
                autocomplete="off"
                class="mr-2 hover:cursor-pointer"
                v-model="collectionSelection"
            />
            <label for="digital-collections-btn">Digital Collections</label>
        </div>
        <section v-show="collectionSelection === 'physical'">
            <div class="text-12 sm:text-[11px] md:text-12">
                <p class="mb-2">
                    Discover Colby’s <strong>physical</strong> Special Collections & Archives
                    collections which include both culturally significant materials and Colby
                    documents and memorabilia from the 13th through the 21st centuries.
                </p>
                <ul class="pl-6 list-disc">
                    <li>
                        <p>
                            Use
                            <a
                                class="text-linkBlue no-underline"
                                href="https://archivesspace.colby.edu/"
                                >ArchivesSpace</a
                            >
                            to search for detailed finding aids describing many of our manuscript
                            and archival collections.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
        <section v-show="collectionSelection === 'digital'">
            <div class="text-12 sm:text-[11px] md:text-12">
                <p>
                    Explore our digital special collections and archives, including culturally
                    significant materials and Colby documents and memorabilia from the 13th through
                    the 21st centuries.
                </p>
            </div>
        </section>
    </div>
</template>
<script setup>
    import { ref, computed } from 'vue';
    import search from '../img/search.svg';

    // set the default selection to physical collections
    const collectionSelection = ref('physical');

    const pcQuery = ref(null);
    const scQuery = ref(null);

    const handlePCSearch = () => {
        // Submit the form
        document.pcSearchForm.submit();
    };

    const handleSCSearch = () => {
        // Submit the form
        document.scSearchForm.submit();
    };

    const selectedSearchScope = ref('digitalCommons');

    const placeholderText = computed(() => {
        if (selectedSearchScope.value === 'digitalCommons') {
            return 'Explore senior theses, college publications, yearbooks, and more.';
        } else if (selectedSearchScope.value === 'JSTOR') {
            return 'Search our archival photo collections and other unique materials.';
        }
    });
</script>
<style scoped></style>
