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
              <span>{{ article.title }}</span>
            </h1>
            <h2>
              <span>{{ article.content }}</span>
              <font class="eye"></font>
            </h2>
          </div>
          <div class="update_detail_con">
            <span>{{ article.createdAt }}</span>
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
  
  <script>
import InBanner from "@/components/InBanner.vue";
import { onMounted, ref,re, watchEffect, onBeforeUnmount } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Info",
  data() {
    return {
      article:[]
    };
  },
  onMounted(){
   this.getArticle();
  },
  methods:{
    async getArticle(){
      try{
        const response = await axios.get("/api/admin/articles/" + route.params.id);
        const{data}=response.data.data;
        this.article=data;
        console.log(this.article)
      } catch(error){
        console.error(error);
      }
    }
  },
  setup() {

    
    return{
      
    }
  },

  components: {
    InBanner,
  }
};
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