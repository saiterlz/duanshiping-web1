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
              <span>{{ data.article.title }}</span>
            </h1>
            <h2>
              <span>3214</span>
              <font class="eye"></font>
              <time>{{ whichTime(data.article.createdAt) }}</time>
              <font class="eye"></font>
            </h2>
          </div>

          <div class="update_detail_con">
            <div  style="white-space:pre-wrap" v-html="data.article.content"></div>
            <div class="">
              <span><img :src="data.article.picname" alt=""></span>
            </div>
          </div>

          <div class="update_detail_bot">
            <el-button size="mini" plain type="primary" @click="handlePrevious">上一篇</el-button>
            <el-button size="mini" plain type="primary" @click="handleNext">下一篇</el-button>

          </div>
        </div>
        <!--Content End-->
      </div>
    </div>
  </div>
</template>

<script setup>
import InBanner from "@/components/InBanner.vue";
import { onMounted, ref, reactive, watchEffect, onUpdated, toRaw, computed, watch, } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import moment from 'moment'
import { useStore, mapState } from 'vuex'
const route = useRoute();
const store = useStore();
const router = useRouter();

moment.locale("zh-cn")

let pageId = route.params.id
let index = 0
//获取store.state的方法
const ArticleList = computed(() => store.state.articles.articleList)
// console.log(ArticleList.value)
const tmpArticlelist = ArticleList.value
// console.log("tmpArticlelist", tmpArticlelist[1]);
// console.log("tmpArticlelist", typeof tmpArticlelist);
// console.log("tmpArticlelist findIndex",tmpArticlelist.findIndex(item => item.id === pageId));
 

//跳转回顶部
defineOptions({
  beforeRouteEnter(_to, _from, next) {
    window.scroll(0, 0);
    next();
  }
})

//route.push()跳转BUG
watch(route ,(to , from)=>{
  router.go(0)
})



//时间转换
const whichTime = time => {
  return moment(time).format("lll")
}

//console.log("子组件created");




const handleChangepage = (id) => {
  //console.log(id);
  router.push(`/info/${id}`);
}
//上一篇、下一篇
// 上一篇
const handlePrevious = (() => {
  index = tmpArticlelist.findIndex(item => item.id === pageId)
  //console.log(index,"index handlePrevious");
  if (index === 0) {
    // 提示已经是第一篇或者禁用上一篇按钮 自由发挥咯
  } else {
    pageId = tmpArticlelist[index - 1].id // 获取上一篇id 在getList()里需要
    handleChangepage(pageId) // 获取详情数据的接口
  }
})
// 下一篇
const handleNext = (() => {
  index = tmpArticlelist.findIndex(item =>item.id === pageId)
  //console.log(index,"index handleNext");
  if (index >= tmpArticlelist.length - 1) {
    // 提示已经是最后一篇或者禁用下一篇按钮 自由发挥咯
  } else {
    pageId = tmpArticlelist[index + 1].id // 获取下一篇id 在getList()里需要
    handleChangepage(pageId) // 获取详情数据的接口
  }
})
// 获取详情数据
// getList() {	
// 	xxx.({id: this.pageId}).then(res = > {})
// }


const data = reactive({
  article: {}
})


const getArticle = watchEffect(async () => {
  //console.log('请求文章详情');
  //console.log(typeof pageId);
  if (!pageId) return;
  let res1 = await axios.get(`/api/articles/${pageId}`);
  data.article = res1.data.data.article
  data.article.picname = require('@/assets/images/' + res1.data.data.article.picname);
  //console.log(data);
});



onUpdated(() => {
  pageId
});

onMounted(() => {
  //console.log(`子组件Mounted`);
  getArticle();

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