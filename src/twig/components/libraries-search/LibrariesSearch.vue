<template>
    <div
        class="tabbable tabs-left pt-6 p-0 pb-6 flex flex-col md:flex-row justify-center"
        id="librarysearch"
    >
        <section class="nav-section md:h-[300px]">
            <ul
                class="nav nav-tabs m-0 w-full md:w-36 flex flex-row justify-between md:flex-col md:justify-start relative list-none bg-white md:bg-transparent"
            >
                <li
                    v-for="tab in searchTabs"
                    :key="tab.id"
                    :id="tab.id"
                    class="h-[50px] md:w-full border-l border-r border-lightGray md:border-0"
                    :class="{ 'tab relative text-colbyBlue': true, active: selectedTab === tab.id }"
                >
                    <button
                        @click="handleTabChange(tab.id)"
                        class="px-2 md:px-2 w-full h-full flex justify-start items-center text-center md:text-start text-10 md:text-12"
                        :class="{
                            'hover:bg-lightGray md:hover:border-r-2 md:hover:border-gray-200':
                                selectedTab !== tab.id,
                        }"
                    >
                        {{ tab.name }}
                    </button>
                </li>
            </ul>
        </section>
        <section class="content-section w-auto md:w-[600px] relative bg-lightGray">
            <div class="pt-6 lg:pt-2 pr-4 pl-10 h-[300px] w-full">
                <component :is="selectedComponent" @update:modelValue="handleSearchUpdate" />
            </div>
            <LibrariesFooter :selected-tab="selectedTab" :search-selection="searchSelection" />
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
    import CourseReserves from './search-tabs/CourseReserves.vue';
    import SpecialCollectionsAndArchives from './search-tabs/SpecialCollectionsAndArchives.vue';

    const selectedTab = ref('librarysearch');
    const searchSelection = ref('librarysearch');

    const searchTabs = [
        { id: 'librarysearch', name: 'LibrarySearch' },
        { id: 'journals-and-newspapers', name: 'Journals & Newspapers' },
        { id: 'databases', name: 'Databases' },
        { id: 'research-guides', name: 'Research Guides' },
        { id: 'course-reserves', name: 'Course Reserves' },
        { id: 'special-collections-and-archives', name: 'Special Collections & Archives' },
    ];

    const handleTabChange = (tabID) => {
        selectedTab.value = tabID;
    };

    const handleSearchUpdate = (newValue) => {
        searchSelection.value = newValue;
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
            case 'course-reserves':
                return CourseReserves;
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

    @media (max-width: 767px) {
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

    @media (min-width: 768px) {
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
