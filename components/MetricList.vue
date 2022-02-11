<template>
    <div class="metric-card-list-con nav-wrapper">
        <metric-card v-for="(statObj, idx) in statArray" :key="idx">
            <template #header>{{ statObj.cardName }}</template>
            <!-- <template #body> -->
            <div class="card-body-con">
                <div class="card-body-stat">
                    <div class="stat-num">
                        <auto-count
                            class="stat-num-value"
                            :start-amount="0"
                            :end-amount="statObj.statNum"
                            :duration="3"
                        ></auto-count>
                    </div>
                    <div class="stat-percent">
                        <p class>
                            <arrow-up-icon v-if="statObj.isIncrementing"></arrow-up-icon>
                            <arrow-down-icon v-else></arrow-down-icon>
                            <span
                                class="stat-percent-value"
                                :class="statObj.isIncrementing ? 'stat-percent-value-incrementing' : 'stat-percent-value-decrementing'"
                            >{{ statObj.statPercent }}%</span>
                            vs last month
                        </p>
                    </div>
                </div>
                <div class="card-body-icon">
                    <metric-img-green v-if="statObj.isIncrementing"></metric-img-green>
                    <metric-img-red v-else></metric-img-red>
                </div>
            </div>
            <!-- </template> -->
        </metric-card>
    </div>
</template>

<script setup lang="ts">
import AutoCount from "./UI/auto-count.vue";
import ArrowDownIcon from "./icons/arrow-down-icon.vue";
import ArrowUpIcon from "./icons/arrow-up-icon.vue";
import MetricImgRed from "./icons/metric-img-red.vue";
import MetricImgGreen from "./icons/metric-img-green.vue";
import MetricCard from "./UI/metric-card.vue";

interface Props {
    statArray: any[];
}

const props = defineProps<Props>();
</script>

<style scoped>
.metric-card-list-con {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
}
.card-body-con {
    margin: 20px 0px; 
    display: flex;
    justify-content: space-between;
    grid-gap: 10px;
}
.card-body-icon {
    padding-right: 0.8rem;
}
.card-body-stat {
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.stat-num-value {
    font-size: 2rem;
    font-weight: bold;
}
.stat-percent-value-incrementing{
    color: #027A48;
}
.stat-percent-value-decrementing{
    color: #B42318;
}
.stat-percent{
    margin-top: 10px;
}
</style>
