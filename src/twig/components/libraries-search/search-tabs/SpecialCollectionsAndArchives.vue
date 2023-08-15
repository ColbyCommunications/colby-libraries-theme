<template>
    <div>
        <form
            class="mb-[3px]"
            id="sc-search"
            name="scSearchForm"
            action="https://librarysearch.colby.edu/discovery/search"
            accept-charset="utf-8"
            method="GET"
            @submit.prevent="handleSCSearch"
        >
            <div v-show="collectionSelection === 'physical'" class="search-box">
                <input
                    type="text"
                    placeholder="Find a journal or newspaper by title or ISSN"
                    class="summon-search-field search-bar-full"
                    autocomplete="off"
                    v-model="scQuery"
                />
                <input type="hidden" name="query" :value="'any,contains,' + scQuery" />
                <input type="hidden" name="vid" value="01CBB_CCLIBRAR:COLBY" />
                <input type="hidden" name="search_scope" value="SCA" />
                <input type="image" @click.prevent="handleSCSearch" :src="search" alt="search" />
            </div>
            <div class="sc-btn-container text-12 sm:text-[11px] md:text-12">
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
        </form>
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
                <p class="mb-2">
                    Explore Colby’s <strong>digital</strong> Special Collections & Archives
                    collections which include both culturally significant materials and Colby
                    documents and memorabilia from the 13th through the 21st centuries.
                </p>
                <ul class="pl-6 list-disc">
                    <li>
                        <p>
                            <a
                                class="text-linkBlue no-underline"
                                href="https://digitalcommons.colby.edu/"
                                >Digital Commons</a
                            >: Explore senior theses, college publications, yearbooks, and more.
                        </p>
                    </li>
                    <li>
                        <p>
                            <a
                                class="text-linkBlue no-underline"
                                href="https://library.artstor.org/#/browse/institution"
                                >Artstor</a
                            >: Discover archival photo collections, unique materials and items from
                            the Libraries’ special collections and beyond.
                        </p>
                    </li>
                    <li>
                        <p>
                            Special Collections and Archives’
                            <a
                                class="text-linkBlue no-underline"
                                href="https://web.colby.edu/csc-home/"
                                >web portal</a
                            >
                            contains digital exhibits displaying curated collection holdings
                            selections.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import search from '../img/search.svg';

    // set the default selection to physical collections
    const collectionSelection = ref('physical');

    const scQuery = ref(null);

    const handleSCSearch = () => {
        // Submit the form
        document.scSearchForm.submit();
    };
</script>
<style scoped></style>
