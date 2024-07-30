<template>
  <div>
    <InBanner />
    <div class="ml_bread_inner" style="max-width: 1300px">
      <router-link to="/">首页</router-link>
      <span>&gt;</span>
      <router-link to="/download">下载中心</router-link>
    </div>
    <div class="inner">
      <img src="../../assets/images/shigong.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import InBanner from "@/components/InBanner.vue";
export default {
  components: {
    InBanner,
  },
};
</script>

<style lang="less" scoped>
.ml_bread_inner {
  font-family: "microsoft yahei";
  font-size: 16px;
  padding: 0;
  box-sizing: border-box;
  max-width: 1300px !important;
  margin: 30px auto;
  align-items: center;
}
.inner {
  font-size: 14px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "microsoft yahei";
  display: flex;
    justify-content: space-around;
  img {
    font-size: 14px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "microsoft yahei";
  }
}
</style>