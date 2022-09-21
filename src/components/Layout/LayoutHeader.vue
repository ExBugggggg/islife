<template>
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
        <el-menu-item index="1" id="menu-item-logo">Cookies's House</el-menu-item>
        <el-menu-item index="2" id="menu-item-put-in-right">Home</el-menu-item>
        <el-menu-item index="3" id="menu-item">Category</el-menu-item>
        <el-menu-item index="4" id="menu-item">Tags</el-menu-item>
        <el-menu-item index="5" id="menu-item">Archive</el-menu-item>
        <el-menu-item index="6" id="menu-item">Album</el-menu-item>
        <el-menu-item index="7" id="menu-item">Plan</el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('2')


</script>
<style scoped>
/** set el-header padding */
.el-header {
    --el-header-padding: 0px;
    font-weight: bold;
}
.el-menu {
    --el-menu-border-color: none;
    --el-menu-active-color: black;
    --el-menu-hover-text-color: black;
    --el-menu-hover-bg-color: none;
    border-bottom: none;
}
.el-menu-item {
    border-bottom: none;
}
/** set item active*/
.el-menu-item.is-active {
    --el-menu-border-color: none;
    --el-menu-active-color: black;
    --el-menu-hover-text-color: black;
    --el-menu-hover-bg-color: none;
    font-weight: bolder;
    border-bottom: none;
}
/** custom style */
/** set menu items*/
#menu-item-put-in-right {
    margin-left: auto;
}
#menu-item {
    margin-left: 8px;
}
#menu-item-logo {
    font-size: 1.5em;
    font-weight: bold;
}
@media only screen and (min-width: 1440px) {
    .el-menu {
        margin: 32px 70px;
    }
}
@media only screen and (max-width: 1440px) and (min-width: 1024px) {
    .el-menu {
        margin: 32px 60px;
    }
}
</style>