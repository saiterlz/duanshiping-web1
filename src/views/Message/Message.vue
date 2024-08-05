<template>
  <div>
    <InBanner />
    <div class="ml_bread_inner" style="max-width: 1300px">
      <router-link to="/">首页</router-link>
      <span>&gt;</span>
      <router-link to="/message">在线留言</router-link>
    </div>

    <div class="inside">
      <!--Content Start-->
      <div class="ml_message">
        <h2>在线留言</h2>
        <h3>我们会尽快与您取得联系</h3>
        <img src="../../assets/images/message_tel.jpg" alt="" />
        <div class="form_area">
          <input type="text" id="txtTitle" placeholder="主题" />
          <input type="text" id="txtRealname" placeholder="姓名" />
          <input type="text" id="txtPhone" placeholder="电话" />
          <input type="text" id="txtEmail" placeholder="邮箱" />

          <textarea
            name="txtContent"
            id="txtContent"
            placeholder="内容"
          ></textarea>
        </div>
        <a href="javascript:checkNull()" class="message_sub">提交</a>
      </div>

      <!--Content End-->
    </div>
  </div>
</template>

<script setup>
import InBanner from "@/components/InBanner.vue";
defineOptions({
  beforeRouteEnter(_to,_from,next){
    window.scroll(0,0);
    next();
  }
})
</script>

<style lang="less" scoped>
@import url("../../assets/styles/commonStyle.css");
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