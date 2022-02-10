<template>
    <div class="main-con">
        <nav class="nav-wrapper">
            <div class="nav-link-con">
                <div class>
                    <img src="/logo.png" alt />
                </div>
                <ul class="nav-links">
                    <li class="nav-link">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Dashboard</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Projects</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Tasks</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Reporting</a>
                    </li>
                    <li class="nav-link">
                        <a href="#">Users</a>
                    </li>
                </ul>
            </div>
            <div class="_nav-extras">
                <c-button size="medium" type="pry" :icon="FlashIcon">Upgrade now</c-button>
                <div class="nav-extras-icons">
                    <div class>
                        <settings-icon :size="20" class="c-round-icon"></settings-icon>
                    </div>
                    <div class>
                        <bell-icon :size="20" class="c-round-icon"></bell-icon>
                    </div>
                    <div class="user-avatar">
                        <img src="/avatar.png" alt />
                    </div>
                </div>
            </div>
        </nav>
        <div class="divider-style"></div>

        <div class="nav-wrapper">
            <ul class="quick-links">
                <li class="quick-link">
                    <a href="#">Overview</a>
                </li>
                <li class="quick-link">
                    <a href="#">Notifications</a>
                </li>
                <li class="quick-link">
                    <a href="#">Analytics</a>
                </li>
                <li class="quick-link">
                    <a href="#">Saved reports</a>
                </li>
                <li class="quick-link">
                    <a href="#">Trade history</a>
                </li>
                <li class="quick-link">
                    <a href="#">User reports</a>
                </li>
            </ul>
            <div class="search-sec">
                <search-icon class="search-icon"></search-icon>
                <input type="text" placeholder="Search" class="search-input" />
            </div>
        </div>
        <div class="divider-style"></div>
    </div>
</template>

<script setup>
import SearchIcon from './icons/search-icon.vue'
import BellIcon from './icons/bell-icon.vue'
import SettingsIcon from './icons/settings-icon.vue'
import FlashIcon from './icons/flash-icon.vue'

import CButton from './UI/c-button.vue'

</script>

<style scoped>
.nav-link-con {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
._nav-extras {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
}
.nav-extras-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
}
.c-round-icon {
    cursor: pointer;
    padding: 8px;
}
.c-round-icon:hover {
    border-radius: 50%;
    background: rgba(228, 222, 222, 0.918);
}
.c-round-icon:active {
    transform: scale(0.7);
}
.user-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
}
.nav-links {
    display: flex;
    list-style: none;
    /* justify-content: space-between; */
}
.nav-link a {
    cursor: pointer;
    text-decoration: none;
    color: var(--text-color-grey);
    font-family: var(--font-inter);
    margin-left: 8px;
    margin-right: 8px;
    font-weight: 500;
}
.nav-link a:hover {
    color: var(--text-color-primary);
}
.divider-style {
    margin-top: 10px;
    width: 100%;
    height: 1px;
    background: var(--color-gray);
}

.quick-links-con {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    align-items: center;
}
.quick-links {
    display: flex;
    list-style: none;
    /* flex-wrap: wrap; */
}
.quick-link a {
    cursor: pointer;
    text-decoration: none;
    color: var(--text-color-grey);
    font-family: var(--font-inter);
    margin-left: 8px;
    margin-right: 8px;
    font-weight: 500;
}
.search-sec {
    width: 320px;
    margin-left: auto;
    position: relative;
}
.search-input {
    width: 100%;
    min-height: 40px;
    border: none;
    border-radius: 10px;
    background: var(--color-pry);
    padding: 5px 10px;
    padding-left: 30px;
    font-size: 14px;
    color: var(--text-color-grey);
    font-family: var(--font-inter);
    outline: none;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-sizing: border-box;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 8px;
}
.search-input:focus {
    background: var(--color-gray);
}
.search-icon {
    position: absolute;
    top: 0;
    left: 8px;
    bottom: 0;
}
</style>