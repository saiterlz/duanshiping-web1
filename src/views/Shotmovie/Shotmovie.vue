<template>
  <div>
    <InBanner />
    <div class="ml_bread_inner" style="max-width: 1300px">
      <router-link to="/">首页</router-link>
      <span>&gt;</span>
      <router-link to="/shotmovie">短视频代运营方案</router-link>
    </div>
    <MinPicWin />
  </div>
</template>

<script>
import InBanner from "@/components/InBanner.vue"
import MinPicWin from "@/components/MinPicWin.vue"
export default {
  components: {
    MinPicWin,
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
  display: flex;
  align-items: center;
}
</style>