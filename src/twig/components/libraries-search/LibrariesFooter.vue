<template>
    <ul
        class="py-[5px] md:py-0 px-4 h-auto md:h-[50px] bg-colbyBlue text-white grid grid-cols-2"
        :class="
            props.selectedTab === 'librarysearch' || props.selectedTab === 'journals-and-newspapers'
                ? 'md:grid md:grid-cols-4'
                : 'md:grid md:grid-cols-3'
        "
    >
        <li
            v-for="link in filteredLinks"
            :key="link.id"
            class="py-[5px] md:py-0 pr-2 flex justify-start items-center"
        >
            <a :href="link.url" class="flex items-center"
                ><img :src="link.imgPath" :alt="link.text" class="mr-2 w-[30px] h-[30px]" />
                <p class="text-10 uppercase">{{ link.text }}</p>
            </a>
        </li>
    </ul>
</template>
<script setup>
    import { ref, watch, computed } from 'vue';
    import moreInfo from './img/more_info.svg';
    import getHelp from './img/get_help.svg';
    import interlibraryLoan from './img/interlibrary_loan.svg';
    import remoteAccess from './img/remote_access.svg';
    import digitalExhibits from './img/digital_exhibits.svg';

    const props = defineProps(['selectedTab', 'searchSelection']);

    const dynamicURL = computed(() => {
        if (props.searchSelection === 'librarysearch') {
            return 'https://libguides.colby.edu/librarysearch';
        } else if (props.searchSelection === 'mainecat') {
            return 'https://www.maineinfonet.org/mainecat/about/';
        } else {
            return 'https://www.worldcat.org/about';
        }
    });

    const footerLinks = [
        {
            id: 1,
            tab: 'librarysearch',
            url: 'https://libguides.colby.edu/librarysearch',
            imgPath: moreInfo,
            text: 'more info',
        },
        {
            id: 2,
            tab: 'librarysearch',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 3,
            tab: 'journals-and-newspapers',
            url: 'https://libguides.colby.edu/newspapers-at-colby',
            imgPath: moreInfo,
            text: 'more info',
        },
        {
            id: 4,
            tab: 'journals-and-newspapers',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 5,
            tab: 'databases',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 6,
            tab: 'research-guides',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 7,
            tab: 'course-reserves',
            url: 'https://libguides.colby.edu/librarysearch',
            imgPath: moreInfo,
            text: 'more info',
        },
        {
            id: 8,
            tab: 'course-reserves',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 9,
            tab: 'special-collections-and-archives',
            url: 'https://libraries.colby.edu/specialcollections/',
            imgPath: moreInfo,
            text: 'more info',
        },
        {
            id: 10,
            tab: 'special-collections-and-archives',
            url: 'https://libanswers.colby.edu/',
            imgPath: getHelp,
            text: 'get help',
        },
        {
            id: 11,
            tab: 'special-collections-and-archives',
            url: 'https://web.colby.edu/csc-home/',
            imgPath: digitalExhibits,
            text: 'digital exhibits',
        },
    ];

    let filteredLinks = ref(footerLinks.filter((link) => link.tab === 'librarysearch'));

    watch(props, () => {
        footerLinks[0].url = dynamicURL.value;
        filteredLinks.value = footerLinks.filter((link) => link.tab === props.selectedTab);
    });
</script>
<style scoped></style>
