<template>
  <div>
    <InBanner />
    <div class="ml_bread_inner" style="max-width: 1300px">
      <router-link to="/">首页</router-link>
      <span>&gt;</span>
      <span>文章列表</span>
    </div>
    <div class="inside">
      <!--Content Start-->
      <div class="inside">
        <!--Content Start-->
        <div class="update_detail">
          <div class="update_detail_top">
            <h1>
              <span>{{data.article.title}}</span>
            </h1>
            <h2>
              <span>3214</span>
              <font class="eye"></font>
              <time >{{whichTime(data.article.createdAt) }}</time>
              <font class="eye"></font>
            </h2>
          </div>

          <div class="update_detail_con">
            <span>{{data.article.content}}</span>
            <div class="">
            <span><img :src="data.article.picname" alt=""></span>
          </div>
          </div>

          <div class="update_detail_bot">
            <a class="prev" href="PicDetail.aspx?ID=151">上一篇：没有了</a
            ><a class="next" href="PicDetail.aspx?ID=150"
              >下一篇：B套餐 短视频代运营特惠方案</a
            >
          </div>
        </div>
        <!--Content End-->
      </div>
    </div>
  </div>
</template>
  
<script setup>
import InBanner from "@/components/InBanner.vue";
import { onMounted, ref, reactive, watchEffect, onBeforeUnmount ,toRaw ,} from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import moment from 'moment'

moment.locale("zh-cn")


const whichTime = time =>{
    return moment(time).format("lll")
}

console.log("子组件created");
const route = useRoute();
defineOptions({
  beforeRouteEnter(_to,_from,next){
    window.scroll(0,0);
    next();
  }
})
const data = reactive({
  article:{}
})


const getArticle = watchEffect(async () => {
  if (!route.params.id) return;
  let res1 = await axios.get(`/api/articles/${route.params.id}`);
  data.article =  res1.data.data.article
  data.article.picname = require('@/assets/images/'+res1.data.data.article.picname);


  console.log(data);
});

onMounted(() => {
  getArticle();
  console.log(`子组件Mounted`);
});
</script>
  
  <style lang="less" scoped>
@import url("../../assets/styles/commonStyle.css");
@import url("../../assets/styles/update.css");
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