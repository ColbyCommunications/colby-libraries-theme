<template>
    <div>
        <form
            v-if="searchSelection === 'librarysearch'"
            name="librarysearchForm"
            method="GET"
            action="https://librarysearch.colby.edu/discovery/search"
            accept-charset="utf-8"
            @submit.prevent="handleLibrarysearch"
        >
            <div class="search-box">
                <input
                    type="text"
                    :placeholder="placeholderText"
                    class="summon-search-field search-bar"
                    autocomplete="off"
                    v-model="query"
                />
                <input type="hidden" name="query" :value="'any,contains,' + query" />
                <input type="hidden" name="tab" value="Library" />
                <input type="hidden" name="vid" value="01CBB_CCLIBRAR:COLBY" />
                <div class="drop-down">
                    <div class="flex items-center">
                        <select
                            v-model="selectedSearchScope"
                            name="search_scope"
                            class="outline-offset-8"
                        >
                            <option value="DN_and_CI">Everything</option>
                            <option value="CentralIndex">Articles and More</option>
                            <option value="DiscoveryNetwork">Books and More</option>
                            <option value="CourseReserves">Course Reserves</option>
                            <option value="SCA">Special Collections & Archives</option>
                        </select>
                    </div>
                </div>
                <input
                    type="image"
                    @click.prevent="handleLibrarysearch"
                    :src="search"
                    alt="search"
                />
            </div>
        </form>
        <form
            v-if="searchSelection === 'mainecat'"
            name="maineCatForm"
            method="GET"
            action="https://mainecat.maine.edu/search/"
            accept-charset="utf-8"
            @submit.prevent="handleMaineCatSearch"
        >
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Search by keyword, title, or author."
                    class="summon-search-field search-bar"
                    autocomplete="off"
                    v-model="searcharg"
                />
                <div class="drop-down">
                    <div class="flex items-center">
                        <select name="searchtype" class="outline-offset-8">
                            <option value="X">Keyword</option>
                            <option value="t">Title</option>
                            <option value="a">Author (Last, First)</option>
                        </select>
                    </div>
                </div>
                <input type="hidden" name="searcharg" :value="searcharg" />
                <input
                    type="image"
                    @click.prevent="handleMaineCatSearch"
                    :src="search"
                    alt="search"
                />
            </div>
        </form>
        <div v-show="searchSelection !== 'worldcat' && searchSelection !== 'mainecat'" class="mb-2">
            <a
                href="https://librarysearch.colby.edu/discovery/search?vid=01CBB_CCLIBRAR:COLBY&mode=advanced"
                class="text-12 sm:text-[11px] md:text-12 uppercase text-linkBlue"
                >advanced search</a
            >
        </div>
        <div class="mb-2 flex text-12 sm:text-[11px] md:text-12">
            <input
                type="radio"
                value="librarysearch"
                id="librarysearch-btn"
                checked="checked"
                autocomplete="off"
                class="mr-2 hover:cursor-pointer"
                v-model="searchSelection"
                @change="$emit('update:modelValue', $event.target.value)"
            />
            <label for="librarysearch-btn" class="mr-4">LibrarySearch</label>
            <input
                type="radio"
                value="mainecat"
                id="mainecat-btn"
                autocomplete="off"
                class="mr-2 hover:cursor-pointer"
                v-model="searchSelection"
                @change="$emit('update:modelValue', $event.target.value)"
            />
            <label for="mainecat-btn" class="mr-4">MaineCat</label>
            <input
                type="radio"
                value="worldcat"
                id="worldcat-btn"
                autocomplete="off"
                class="mr-2 hover:cursor-pointer"
                v-model="searchSelection"
                @change="$emit('update:modelValue', $event.target.value)"
            />
            <label for="worldcat-btn">WorldCat</label>
        </div>
        <section
            v-show="searchSelection === 'librarysearch'"
            class="text-12 sm:text-[11px] md:text-12"
        >
            <p class="mb-2">
                Use
                <a
                    class="text-linkBlue no-underline"
                    href="https://librarysearch.colby.edu/discovery/search?vid=01CBB_CCLIBRAR:COLBY&lang=en"
                    >LibrarySearch</a
                >
                to access Colby, Bates, and Bowdoin's library collections.
            </p>
            <p class="mb-4">
                <a
                    class="text-linkBlue no-underline"
                    href="https://libguides.colby.edu/librarysearch/about/"
                    >Explore</a
                >
                and utilize the dropdown options in the search box to get the best search results.
            </p>
            <p class="text-center"><i>Not finding what you need?</i> Try MaineCat, or WorldCat.</p>
        </section>
        <section v-show="searchSelection === 'mainecat'" class="text-12 sm:text-[11px] md:text-12">
            <p>
                <strong>MaineCat: </strong>Use MaineCat to search for and borrow materials from
                libraries across Maine.
            </p>
        </section>
        <section v-show="searchSelection === 'worldcat'" class="text-12 sm:text-[11px] md:text-12">
            <p class="mb-2">
                <strong>WorldCat:</strong> Explore and request items from academic libraries
                worldwide.
            </p>
            <ul class="pl-6 list-disc">
                <li>
                    <p>
                        <a
                            class="text-linkBlue no-underline"
                            href="https://colby.idm.oclc.org/login?url=https://firstsearch.oclc.org/dbname=WorldCat;done=referer;FSIP"
                            >FirstSearch</a
                        >: focused searches and automated
                        <a
                            class="text-linkBlue no-underline"
                            href="https://libraries.colby.edu/borrow-renew-request/ill/"
                            >Interlibrary Loan</a
                        >
                        requests.
                    </p>
                </li>
                <li>
                    <p>
                        Use
                        <a class="text-linkBlue no-underline" href="https://www.worldcat.org/"
                            >WorldCat.org</a
                        >
                        for the most intuitive browsing experience.
                    </p>
                </li>
            </ul>
        </section>
    </div>
</template>
<script setup>
    import { ref, onMounted, computed } from 'vue';
    import search from '../img/search.svg';

    defineProps(['modelValue']);
    const emit = defineEmits();

    // set the default selection to librarysearch
    const searchSelection = ref('librarysearch');
    const query = ref(null);
    const searcharg = ref(null);

    const selectedSearchScope = ref('DN_and_CI');

    const placeholderText = computed(() => {
        if (selectedSearchScope.value === 'DN_and_CI') {
            return 'Find articles, books, and more.';
        } else if (selectedSearchScope.value === 'CentralIndex') {
            return 'Citations and full-text articles, ebook chapters, and more';
        } else if (selectedSearchScope.value === 'DiscoveryNetwork') {
            return 'CBB books, media, and more';
        } else if (selectedSearchScope.value === 'CourseReserves') {
            return 'Course materials selected by faculty';
        } else {
            return 'Physical materials in our Special Collections and Archives';
        }
    });

    onMounted(() => {
        // Emit the initial value
        emit('update:modelValue', searchSelection.value);
    });

    const handleLibrarysearch = () => {
        // Submit the form
        document.librarysearchForm.submit();
    };

    const handleMaineCatSearch = () => {
        // Submit the form
        document.maineCatForm.submit();
    };
</script>
<style lang="scss" scoped></style>
