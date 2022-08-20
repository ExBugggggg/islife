<template>
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" style="font-weight: bold;">
        <el-menu-item index="1" >Home</el-menu-item>
        <el-menu-item index="2">Category</el-menu-item>
        <el-menu-item index="3">Tags</el-menu-item>
        <el-menu-item index="4">Archive</el-menu-item>
        <el-menu-item index="5">Album</el-menu-item>
        <el-menu-item index="6">Plan</el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')


</script>
<style>
/** set el-header padding */
.el-header {
    --el-header-padding: 0px;
}
</style>