<template>
    <div>
        <form
            name="rgForm"
            class="summon-search-widget"
            accept-charset="utf-8"
            method="GET"
            action="https://libguides.colby.edu/srch.php"
            @submit.prevent="handleRGSearch"
        >
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Find a research guide by subject or course"
                    class="summon-search-field search-bar-full"
                    name="q"
                    autocomplete="off"
                />
                <input type="image" :src="search" alt="search" @click.prevent="handleRGSearch" />
            </div>
        </form>
        <section>
            <div class="text-12 sm:text-[11px] md:text-12">
                <p class="mb-2">
                    Research guides are curated collections of library resources and helpful
                    information created by our subject specialists.
                </p>
                <ul class="pl-6 list-disc">
                    <li class="mb-2">
                        <p>
                            Browse guides by
                            <a
                                class="text-linkBlue no-underline"
                                href="https://libguides.colby.edu/"
                                >subject</a
                            >
                            or
                            <a
                                class="text-linkBlue no-underline"
                                href="https://libguides.colby.edu/course_guides"
                                >course</a
                            >
                        </p>
                    </li>
                    <li>
                        <p>
                            Find and contact a
                            <a
                                class="text-linkBlue no-underline"
                                href="https://libraries.colby.edu/research-help/subjectspecialists/"
                                >library liaison</a
                            >
                            in your subject area
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script setup>
    import search from '../img/search.svg';

    const handleRGSearch = () => {
        // Submit the form
        document.rgForm.submit();
    };
</script>
<style scoped></style>
