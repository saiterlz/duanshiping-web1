<template>
  <div>
    <!-- 1. 顶部通栏 -->
    <AppTopNav />

    <!-- 2. 头部区域 -->
    <!-- <div>头部区域</div> -->

    <!-- 3. 主体区域 -->
    <div class="main">
        <router-view />
    </div>
    <!-- 4. 底部区域 -->
    <AppFoot />
  </div>
</template>

<script setup>
import AppTopNav  from "@/components/AppTopNav.vue";
import AppFoot from "@/components/AppFoot.vue"

</script>

<style lang="less" scoped>
</style>