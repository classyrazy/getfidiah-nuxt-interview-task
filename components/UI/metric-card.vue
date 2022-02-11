<template>
    <div class="card-wrapper">
        <div class="card-header">
            <h3 class="card-header-title">
                <slot name="header"></slot>
            </h3>
            <card-menu></card-menu>
        </div>

        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardMenu from './card-menu.vue'
</script>

<style scoped>
.card-wrapper {
    background: var(pry);
    padding: 0.8rem;
    border: 1px solid var(--color-gray);
    box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1),
        0px 1px 2px rgba(16, 24, 40, 0.06);
    border-radius: 8px;
    font-family: var(--font-inter);
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>