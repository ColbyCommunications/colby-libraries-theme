<template>
    <div>
        <form
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
                <input type="hidden" name="search_scope" value="CourseReserves" />
                <input
                    type="image"
                    @click.prevent="handleLibrarysearch"
                    :src="search"
                    alt="search"
                />
            </div>
        </form>
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

    const placeholderText = computed(() => {
        return 'Course materials selected by faculty';
    });

    onMounted(() => {
        // Emit the initial value
        emit('update:modelValue', searchSelection.value);
    });

    const handleLibrarysearch = () => {
        // Submit the form
        document.librarysearchForm.submit();
    };
</script>
<style lang="scss" scoped></style>
