<template>
    <div>
      <InBanner />
      <div class="ml_bread_inner" style="max-width: 1300px">
        <router-link to="/">首页</router-link>
        <span>&gt;</span>
        <router-link to="/knowledge">短视频知识</router-link>
      </div>
      <div class="inside">

<!--Content Start-->


<div id="NewsMoban" style="width:100%;">

    <div class="Ml_temlpate_news">
        <div class="Ml_temlpate_news_4">
            <div class="newitem4">
                <div class="newitem4_top">
                    <div class="Ml_temlpate_news_3">
                        <div class="newitem3">
                            <div class="newitem3con"><a href=""><img
                                        src="../../assets/images/news_pic1.jpg" alt="AI这次又“抢”了谁的饭碗？直播间里的数字人"></a><a
                                    href=""
                                    class="newitem2_title">AI这次又“抢”了谁的饭碗？直播间里的数字人</a>
                                <p>近期，在一些短视频平台，时不时会刷到这样“惊悚”的一幕：镜头扫过一个房间，桌子上摆放着数十台电脑，屏幕上的主播正实时在线直播卖货，配文却赫然写着：“太吓人了，200平方米直播基地空无一人，全是AI数字人直播。”
                                </p>
                            </div>
                        </div>
                        <div class="newitem3">
                            <div class="newitem3con"><a href=""><img
                                        src="../../assets/images/news_pic2.jpg" alt="2023年闵行科技节开幕，170余项活动等你来"></a><a
                                    href=""
                                    class="newitem2_title">2023年闵行科技节开幕，170余项活动等你来</a>
                                <p>今年2月，上海市政府正式发布《推进“大零号湾”科技创新策源功能区建设方案》，借上海市政府推进“大零号湾”创新策源地建设契机，今年闵行科技节将围绕“科创策源，智创未来”主题开展活动
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="newitem4_bot">
                    <ul>
                        <li>
                            <div class="li_left"><strong>05/24</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">神舟十六号整装待发，或将首次迎来非飞行员出身的“航天员</a><span>央广网北京5月23日报道，据中国载人航天工程办公室消息，神舟十六号载人飞船与长征二号F遥十六运载火箭组合体22日转运至发射区，计划近日择机实施发射。</span>
                            </div>
                        </li>
                        <li>
                            <div class="li_left"><strong>05/16</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">中国食品科学技术学会第十六届年会暨第十届中美食品业高层论坛在武汉召开</a><span>湖北省市场监督管理局党组成员陈专在致辞中提到，发展食品科学，促进食品产业健康发展，是落实健康中国战略，满足人民群众对美好生活追求的一件大事</span>
                            </div>
                        </li>
                        <li>
                            <div class="li_left"><strong>05/16</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">中国食品科学技术学会：保障特殊时期食品供应及安全</a><span>新冠肺炎疫情发生以来，全国学会积极响应中国科协号召，发挥组织优势和专家优势，团结带领广大科技工作者积极投身疫情防控的人民战争</span>
                            </div>
                        </li>
                        <li>
                            <div class="li_left"><strong>05/12</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">普遍应用于轻型结构的切割工艺普遍应用于轻型结构的切割工艺</a><span>现如今，许多行业都将减重作为创新驱动力。主要包括汽车技术、航空航天
                                    技术以及医疗技术。超声波切割为轻型结构中使用日益增多的材料…</span></div>
                        </li>
                        <li>
                            <div class="li_left"><strong>05/12</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">走进贵安超算中心</a><span>现如今，许多行业都将减重作为创新驱动力。主要包括汽车技术、航空航天
                                    技术以及医疗技术。超声波切割为轻型结构中使用日益增多的材料…</span></div>
                        </li>
                        <li>
                            <div class="li_left"><strong>05/12</strong>
                                <p>2023</p>
                            </div>
                            <div class="li_line"></div>
                            <div class="li_right"><a
                                    href="">中信建投：看好苹果MR发布，以及AI技术的快速发展</a><span>现如今，许多行业都将减重作为创新驱动力。主要包括汽车技术、航空航天
                                    技术以及医疗技术。超声波切割为轻型结构中使用日益增多的材料…</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>

<div class="clear">
</div>
<div class="page_box" style="width: 100%; padding-top: 5px; padding-bottom: 8px;">

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