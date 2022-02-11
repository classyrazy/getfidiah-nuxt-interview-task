<template>
    <div class="main-container">
        <nav-container></nav-container>
        <welcome-container></welcome-container>
        <metric-list :stat-Array="statList"></metric-list>
    </div>
</template>

<script setup lang="ts">
import MetricList from '../components/MetricList.vue'
import WelcomeContainer from '../components/WelcomeContainer.vue'
import NavContainer from '../components/NavContainer.vue'

let statList = [
    {
        cardName: 'Total customers',
        statNum: 2420,
        isIncrementing: true,
        statPercent: 40
    },
    {
        cardName: 'Members',
        statNum: 1210,
        isIncrementing: false,
        statPercent: 10
    },
    {
        cardName: 'Active now',
        statNum: 316,
        isIncrementing: true,
        statPercent: 20
    }

]

</script>

<style>
.main-container {
    height: 100vh;
}
</style>