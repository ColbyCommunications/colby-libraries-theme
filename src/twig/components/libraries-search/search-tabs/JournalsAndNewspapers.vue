<template>
    <div>
        <form
            id="jsearch"
            name="journalSearchForm"
            action="https://librarysearch.colby.edu/discovery/jsearch/"
            accept-charset="utf-8"
            method="GET"
            @submit.prevent="handleJournalSearch"
        >
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Find a journal or newspaper by title or ISSN"
                    class="summon-search-field search-bar-full"
                    autocomplete="off"
                    v-model="journalQuery"
                />
                <input type="hidden" name="query" :value="'any,contains,' + journalQuery" />
                <input type="hidden" name="tab" value="jsearch_slot" />
                <input type="hidden" name="vid" value="01CBB_CCLIBRAR:COLBY" />
                <input type="hidden" name="journals" id="jsearchJournals" />
                <input
                    type="image"
                    @click.prevent="handleJournalSearch"
                    :src="search"
                    alt="search"
                />
            </div>
        </form>
        <section class="text-12 sm:text-[11px] md:text-12">
            <div>
                <p>
                    Locate and access Colby's academic journal and newspaper holdings. Use
                    <a
                        class="text-linkBlue no-underline"
                        href="https://librarysearch.colby.edu/discovery/npsearch?vid=01CBB_CCLIBRAR:COLBY"
                        >Search Newspapers</a
                    >
                    to locate newspaper articles by keyword.
                </p>
                <br />
                <p>
                    Did you know the Libraries provide subscriptions to the digital editions of the
                    New York Times, Wall Street Journal, and Morning Sentinel to current students,
                    faculty, and staff?
                    <a
                        class="text-linkBlue no-underline"
                        href="https://libguides.colby.edu/newspapers-at-colby/setup"
                        >Register here for yours!</a
                    >
                </p>
            </div>
        </section>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import search from '../img/search.svg';

    const journalQuery = ref(null);

    const handleJournalSearch = () => {
        // Submit the form
        document.journalSearchForm.submit();
    };
</script>
<style lang="scss" scoped></style>
