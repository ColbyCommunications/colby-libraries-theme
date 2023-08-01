<template>
    <div
        class="tabbable tabs-left mb-6 p-0 flex flex-col sm:flex-row justify-center"
        id="librarysearch"
    >
        <section class="nav-section sm:h-[300px]">
            <ul
                class="nav nav-tabs m-0 w-full flex flex-row justify-between sm:flex-col sm:justify-start relative list-none bg-white"
            >
                <li
                    v-for="tab in searchTabs"
                    :key="tab.id"
                    :id="tab.id"
                    class="h-[50px] sm:w-full border-l border-r border-lightGray sm:border-0"
                    :class="{ 'tab relative text-colbyBlue': true, active: selectedTab === tab.id }"
                >
                    <button
                        @click="handleTabChange(tab.id)"
                        class="px-2 sm:px-2 w-full h-full flex justify-start items-center text-center sm:text-start text-10 sm:text-14"
                        :class="{ 'hover:bg-lightGray': selectedTab !== tab.id }"
                    >
                        {{ tab.name }}
                    </button>
                </li>
            </ul>
        </section>
        <section class="content-section sm:w-[500px] relative bg-lightGray">
            <div class="h-[250px] w-full">
                <component :is="selectedComponent" />
            </div>
            <LibrariesFooter />
        </section>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import LibrariesFooter from './LibrariesFooter.vue';
    import Librarysearch from './search-tabs/Librarysearch.vue';
    import JournalsAndNewspapers from './search-tabs/JournalsAndNewspapers.vue';
    import Databases from './search-tabs/Databases.vue';
    import ResearchGuides from './search-tabs/ResearchGuides.vue';
    import SpecialCollectionsAndArchives from './search-tabs/SpecialCollectionsAndArchives.vue';

    const selectedTab = ref('librarysearch');

    const searchTabs = [
        { id: 'librarysearch', name: 'LibrarySearch' },
        { id: 'journals-and-newspapers', name: 'Journals & Newspapers' },
        { id: 'databases', name: 'Databases' },
        { id: 'research-guides', name: 'Research Guides' },
        { id: 'special-collections-and-archives', name: 'Special Collections & Archives' },
    ];

    const handleTabChange = (tabID) => {
        selectedTab.value = tabID;
    };

    // Computed property to dynamically select the component based on the selected tab
    const selectedComponent = computed(() => {
        switch (selectedTab.value) {
            case 'librarysearch':
                return Librarysearch;
            case 'journals-and-newspapers':
                return JournalsAndNewspapers;
            case 'databases':
                return Databases;
            case 'research-guides':
                return ResearchGuides;
            case 'special-collections-and-archives':
                return SpecialCollectionsAndArchives;
            default:
                return LibrarySearch;
        }
    });
</script>

<style lang="scss" scoped>
    /* Styles for active tab */
    .active {
        background-color: #002878;
        color: white;
    }

    @media (max-width: 480px) {
        .active:after {
            content: ' ';
            width: 0;
            height: 0;
            border-top: 10px solid #002878;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            position: absolute;
            z-index: 2;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media (min-width: 480px) {
        .active:after {
            margin-right: -25px;
            content: ' ';
            width: 0;
            height: 50px;
            border-top: 25px solid transparent;
            border-bottom: 25px solid transparent;
            border-left: 25px solid #002878;
            position: absolute;
            z-index: 2;
            top: 0;
            right: 0;
        }
    }
</style>
