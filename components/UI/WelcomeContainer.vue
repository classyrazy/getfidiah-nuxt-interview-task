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
import AddIcon from '../icons/add-icon.vue'
import ImportIcon from '../icons/import-icon.vue'
import CButton from './c-button.vue'

</script>

<style scoped>
.welcome-actions-btn-con{
    display: grid;
    display: flex;
}

</style>