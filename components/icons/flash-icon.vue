<template>
    <svg :width="size" height="auto" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.83333 1.66669L1.5 11.6667H9L8.16667 18.3334L16.5 8.33335H9L9.83333 1.66669Z"
            stroke="#344054"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script setup>
let props = defineProps({
    size: {
        type: Number,
        default: 20
    },
})
</script>

<style  scoped>
</style>