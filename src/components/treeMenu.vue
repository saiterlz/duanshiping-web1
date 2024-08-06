<template>
    <template v-for="(item, index) in props.menuData.slice(0,8)" >
        <!-- 无子菜单 --> 

        <el-menu-item 
            @click="handleClick(item,`${props.index}-${item.meta.id}`)"
            v-if="!item.children || item.children.length == 0" 
            :index="`${props.index}-${item.meta.id}`"
            :key="`${props.index}-${item.meta.id}`">

            <span data-aos="zoom-in">{{ item.meta.name }}</span>

        </el-menu-item>
        <el-sub-menu 
            v-else 
            :index="`${props.index}-${item.meta.id}`">
            <template #title>
                <span data-aos="zoom-in">{{ item.meta.name }}</span>

            </template>
            <tree-menu :index="`${props.index}-${item.meta.id}`" :menuData="item.children" />

        </el-sub-menu>
    </template>
</template>

<script setup>

import { useRouter } from "vue-router";
import AOS from "aos";
AOS.init({
  duration: 1000,
  disable: "mobile",
  once: true,
});

const props = defineProps(['menuData', 'index'])
//console.log(props);

//创建router实例
const router= useRouter()
//点击菜单 
const handleClick = (item,active)=>{
    //console.log(item,item);
    router.push(item.meta.path)
}
</script>

<style lang="less" scoped>
@import url("../assets/styles/aos.css");
</style>