<template>
  <div>
    <InBanner />
    <div class="ml_bread_inner" style="max-width: 1300px">
      <router-link to="/">首页</router-link>
      <span>&gt;</span>
      <router-link to="/knowledge">行业新闻</router-link>
    </div>
    <div class="inside">
      <!--Content Start-->

      <div id="NewsMoban" style="width: 100%">
        <div class="Ml_temlpate_news">
          <div class="Ml_temlpate_news_3">
            <div class="newitem3">
              <div class="newitem3con">
                <a href=""
                  ><img
                    src="../../assets/images/news_pic1.jpg"
                    alt="AI这次又“抢”了谁的饭碗？直播间里的数字人" /></a
                ><a href="" class="newitem2_title"
                  >AI这次又“抢”了谁的饭碗？直播间里的数字人</a
                >
                <p>
                  近期，在一些短视频平台，时不时会刷到这样“惊悚”的一幕：镜头扫过一个房间，桌子上摆放着数十台电脑，屏幕上的主播正实时在线直播卖货，配文却赫然写着：“太吓人了，200平方米直播基地空无一人，全是AI数字人直播。”
                </p>
              </div>
            </div>
            <div class="newitem3">
              <div class="newitem3con">
                <a href=""
                  ><img
                    src="../../assets/images/news_pic2.jpg"
                    alt="中国食品科学技术学会第十六届年会暨第十届中美食品业高层论坛在武汉召开" /></a
                ><a href="" class="newitem2_title"
                  >中国食品科学技术学会第十六届年会暨第十届中美食品业高层论坛在武汉召开</a
                >
                <p>
                  湖北省市场监督管理局党组成员陈专在致辞中提到，发展食品科学，促进食品产业健康发展，是落实健康中国战略，满足人民群众对美好生活追求的一件大事
                </p>
              </div>
            </div>
            <div class="newitem3">
              <div class="newitem3con">
                <a href=""
                  ><img
                    src="../../assets/images/news_pic3.jpg"
                    alt="中国食品科学技术学会：保障特殊时期食品供应及安全" /></a
                ><a href="" class="newitem2_title"
                  >中国食品科学技术学会：保障特殊时期食品供应及安全</a
                >
                <p>
                  新冠肺炎疫情发生以来，全国学会积极响应中国科协号召，发挥组织优势和专家优势，团结带领广大科技工作者积极投身疫情防控的人民战争
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clear"></div>
      <div
        class="page_box"
        style="width: 100%; padding-top: 5px; padding-bottom: 8px"
      ></div>

      <!--Content End-->
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