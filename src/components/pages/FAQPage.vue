<template>
    <div>
        <div class="text-center text-white">
            <h1 class="font-bold text-3xl my-2">F A Q</h1>
            <p class="text-gray-200">
                This section is dedicated to FAQ. For additional information, you can always contact our support team.
            </p>
        </div>
        <div class="mt-3 text-white overflow-auto custom-scrollbar" style="height: 45vh; max-height: 45vh;">
            <TheAccordion v-for="item in accordionData" :data="item"></TheAccordion>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import TheAccordion from '../TheAccordion.vue';
export default {
    components: {
        TheAccordion
    },
    setup() {
        let accordionData = ref([
            { id: 1, title: "Title 1", des: "Description 1", isOpen: false },
            { id: 2, title: "Title 2", des: "Description 2", isOpen: false },
            { id: 3, title: "Title 3", des: "Description 3", isOpen: false },
            { id: 4, title: "Title 4", des: "Description 4", isOpen: false },
            { id: 5, title: "Title 5", des: "Description 5", isOpen: false },
            { id: 6, title: "Title 6", des: "Description 6", isOpen: false },
            { id: 7, title: "Title 7", des: "Description 7", isOpen: false },
            // می‌توانید داده‌ها را بیشتر کنید
        ]);
        return {
            accordionData
        };
    }
};
</script>

<style>
body {
    overflow: hidden;
}

.accor {
    background-color: #4064c9bf;
    transition: all .3s;
}

.mt-3 {
    overflow-y: auto;
}

.custom-scrollbar::-webkit-scrollbar {
    display: none;
}

.custom-scrollbar {
    scrollbar-width: none;
}
</style>
