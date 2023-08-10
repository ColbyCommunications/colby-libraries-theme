<template>
    <div>
        <form
            name="dbForm"
            method="GET"
            action="https://libguides.colby.edu/az.php"
            accept-charset="utf-8"
            @submit.prevent="handleDBSearch"
        >
            <div class="search-box">
                <input
                    type="text"
                    placeholder="Find the best library databases for your research"
                    class="summon-search-field search-bar-full"
                    name="q"
                    autocomplete="off"
                />
                <input type="image" :src="search" alt="search" @click.prevent="handleDBSearch" />
            </div>
        </form>
        <section>
            <div class="text-12 sm:text-[11px] md:text-12">
                <p>
                    Browse our
                    <a class="text-linkBlue no-underline" href="https://libguides.colby.edu/az.php"
                        >databases by title or subject</a
                    >, use
                    <a class="text-linkBlue no-underline" href="https://libguides.colby.edu/az.php"
                        >popular databases</a
                    >
                    to jump start your research, or explore our
                    <a class="text-linkBlue no-underline" href="https://libguides.colby.edu/az.php"
                        >trial databases</a
                    >.
                </p>
            </div>
        </section>
    </div>
</template>
<script setup>
    import search from '../img/search.svg';

    const handleDBSearch = () => {
        // Submit the form
        document.dbForm.submit();
    };
</script>
<style scoped></style>
