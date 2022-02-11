<template>
    <div class="nav-wrapper">
        <div class="welcome-con">
            <h2 class="welcome-header-text">Welcome back, Olivia</h2>
            <p class="welcome-sub-header-text">Track, manage and forecast your customers and orders.</p>
        </div>
        <div class="welcome-actions-btn-con">
            <c-button :icon="ImportIcon">Import</c-button>
            <c-button :icon="AddIcon" type="sec">Add</c-button>
        </div>

    </div>
</template>

<script setup lang="ts">
import AddIcon from './icons/add-icon.vue'
import ImportIcon from './icons/import-icon.vue'
import CButton from './UI/c-button.vue'

</script>

<style scoped>
.welcome-header-text{
    font-size: 2.5rem;
    font-family: var(--font-inter);
    font-weight: 500;
    margin-bottom: .5rem;
}
.welcome-sub-header-text{
    font-size: 1.5rem;
    font-family: var(--font-inter);
    color: var(--color-gray-dark);
    margin-bottom: 1rem;
}
.welcome-actions-btn-con{
    display: grid;
    display: flex;
    grid-gap: 10px;
}

</style>