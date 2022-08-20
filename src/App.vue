<template>
    <div class="common-layout" style="min-width: 992px">
        <el-container>
            <el-header>
                <LayoutHeader></LayoutHeader>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>
                <LayoutFooter></LayoutFooter>
            </el-footer>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import LayoutHeader from '@components/Layout/LayoutHeader.vue'
import LayoutFooter from '@components/Layout/LayoutFooter.vue'
</script>
<style>
@import '@assets/css/global.css';
</style>