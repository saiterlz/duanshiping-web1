<template>
  <div>
    <!-- 电脑端头部 -->
    <div class="pchead">
      <div class="pcheader">
        <img
          class="pclogo"
          data-aos="zoom-in"
          style="height: 70px"
          src="../assets/images/cLogo_1.jpg"
          alt="Element logo"
        />

        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#ffff"
          text-color="#000"
          active-text-color="#800000"
          :ellipsis="false"
        >
          <div class="flex-grow" />

          <TreeMenu :index="1" :menuData="menuData" />
        </el-menu>
      </div>
    </div>
    <!-- 电脑端头部 -->
    <!-- 手机端头部 -->
    <div class="ml_mb_head" data-aos="zoom-in">
      <a href="http://www.lzhuanya.com" class="ml_mb_logo">
        <img src="../assets/images/cLogo_1.jpg"
      /></a>
      <div class="hb" @click="toggleClass">
        <span class="top_span"></span>
        <span class="center_span"></span>
        <span class="bottom_span"></span>
      </div>
    </div>
    <!-- 手机端头部 -->
    <!-- 手机端菜单 -->
    <div class="ml_mb_nav">
      <!-- 存在二级和三级的时候添加箭头 -->
      <!-- 一级菜单 -->
      <div class="ml_mbnav_1">
        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/">首页</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/about">关于我们</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/shotmovie">短视频代运营方案</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/douyin">抖音代运营案例</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/knowledge">新闻资讯</router-link>
          <i class="fa fa-angle-right mb_item1_arrow"></i>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_2">
          <div class="ml_mbnav_2_item" @click="toggleClass">
            <router-link to="/knowledge">短视频知识</router-link>
          </div>

          <div class="ml_mbnav_2_item" @click="toggleClass">
            <router-link to="/tradnews">行业新闻</router-link>
          </div>
        </div>

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/download">下载中心</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/message">在线留言</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item" @click="toggleClass">
          <router-link to="/content">联系我们</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->
      </div>
    </div>
    <!-- 手机端菜单 -->
  </div>
</template>


<script setup>
import TreeMenu from "./treeMenu.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";

const router = useRouter();
//console.log('router',router.options.routes[0].children.length);
const menuData = reactive(router.options.routes[0].children);
// const props = defineProps(['menuData']);
// console.log(props);
const activeIndex = ref("1");
const activeIndex2 = ref("1");

const handleSelect = (key, keyPath) => {
  //console.log(key, keyPath);
};

//生命周期函数（或者 mounted 函数）调用的方法才能运行
AOS.init({
  duration: 1000,
  disable: "mobile",
  once: true,
});
const toggleCollapse = (event) => {
  event.preventDefault();
  $(".hb_fadeout").toggleClass("center_span");
  $(".change1").toggleClass("top_span");
  $(".change2").toggleClass("bottom_span");
  $(".mb_navShow").stop().toggleClass(false);
};
const toggleClass = (event) => {
  event.preventDefault();
  $(".center_span").toggleClass("hb_fadeout");
  $(".top_span").toggleClass("change1");
  $(".bottom_span").toggleClass("change2");
  $(".ml_mb_nav").stop().toggleClass("mb_navShow");
};
const mb1_toggleClass = (event) => {
  event.preventDefault();

  var num1 = $(".mb_item1_arrow").index(this);
  $(".ml_mbnav_2").eq(num1).stop().slideToggle();
  $(".mb_item1_arrow").eq(num1).stop().toggleClass("ml_mb_arrowChange");
};
const mb2_toggleClass = (event) => {
  event.preventDefault();
  var num2 = $(".mb_item2_arrow").index(this);
  $(".ml_mbnav_3").eq(num2).stop().slideToggle();
  $(".mb_item2_arrow").eq(num2).stop().toggleClass("ml_mb_arrowChange");
};
</script>

<style lang="less" scoped>
@import url("../assets/styles/variables.less");
@import url("../assets/styles/ml_index.css");
@import url("../assets/styles/aos.css");
@import url("../assets/styles/bugfixed.css");
// .el-menu-item.is-disabled{
//   color:inherit !important;
//   pointer-events: none;
// }
</style>