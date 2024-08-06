<template>
  <div>
    <InBanner />
    <!-- con1 -->
    <div class="con1">
      <div class="con1con">
        <div class="contitle" data-aos="zoom-in">
          <strong>短视频运营服务</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>焕雅传媒，提供一切以客户为中心的短视频代运营服务</p>
        </div>
        <ul>
          <li data-aos="zoom-in" data-aos-delay="100" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/text.png" alt="text.png" />
            </div>
            <p>短视频账号托管服务</p>
            <span>账号全托管服务，包含文案编写、视频拍摄、视频剪辑、视频发布为一体的服务。账号装修、定位、标签打造。短视频日更。短视频数据反馈，调整。</span>
          </li>
          <li data-aos="zoom-in" data-aos-delay="200" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/pen.png" />
            </div>
            <p>公司矩阵账号托管服务</p>
            <span>矩阵账号文案编写、视频拍摄、视频剪辑、视频发布，混剪托管。矩阵视频日更。短视频数据反馈，调整。</span>
          </li>

          <li data-aos="zoom-in" data-aos-delay="300" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/chat.png" />
            </div>
            <p>矩阵软件服务</p>
            <span>件教学包会。技术服务支持。系统更新维护。适用于员工账号多，需要网络宣传获客的企业。</span>
          </li>

          <li data-aos="zoom-in" data-aos-delay="400" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/shop.png" />
            </div>
            <p>企业直播间搭建服务</p>
            <span>直播间搭建。直播人员、运营人员孵化。（主播话术精进、直播间实操、软件设备使用）。直播带播业务。</span>
          </li>

          <li data-aos="zoom-in" data-aos-delay="400" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/shop.png" />
            </div>
            <p>个人ip打造</p>
            <span>1、1v1个人IP定位（用户画像分析）。2、 形象包装（人设）。3、 短视频、直播能力培养。4、短视频内容打造。5、变现逻辑指导。6、运营陪跑。7、定期实地指导。8、线上线下定期培训。</span>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/shop.png" />
            </div>
            <p>商业IP打造</p>
            <span>1、线上商业模式。2、线上线下商业布局。3、传播形式拓展。4、线上线下渠道通路。5、私域转化。6、视频/直播内容。7、运营陪跑。8、定期实地指导。9、线上线下定期培训</span>
          </li>
          <li data-aos="zoom-in" data-aos-delay="400" @click="toInfo">
            <div class="con1imgbox">
              <img src="../../assets/images/shop.png" />
            </div>
            <p>企业IP打造（营销蓝V）</p>
            <span>1、企业在新媒体行业数据分析，商业定位。2、企业账号IP定位。3、企业账号运营方案。4、文案脚本策划、短视频拍摄剪辑。5、企业号代运营服务（作品发布、付费流投放规划、后台数据分析、数据建模）
            </span>
          </li>

        </ul>
      </div>
    </div>
    <!-- con2 -->
    <div class="con2">
      <div class="con2con">
        <div class="contitle" data-aos="zoom-in">
          <strong>抖音代运营案例</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>焕雅传媒，为您提供精准的流量池服务</p>
        </div>

        <ul>
          <li data-aos="zoom-in" data-aos-delay="100" v-for="(item, index) in data.articles" :key="index"
            @click="handleChangepage(item.id)">
            <div class="con2_topbox">
              <div class="con2_imgbox">
                <img :src="item.picname" :alt="item.picname" />
              </div>
              <div class="con2pos">
                <strong>{{ item.title }}</strong>
              </div>
              <div class="con2_botbox">
                <p>优秀案例</p>
                <i class="fa fa-eye"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- con2 -->
    <!-- con3 -->
    <div class="con3">
      <div class="con3con">
        <div class="contitle" data-aos="zoom-in">
          <strong>短视频代运营方案</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>焕雅传媒，为您提供精准的流量池服务</p>
        </div>
        <ul>
          <li data-aos="zoom-in" data-aos-delay="100" @click="toInfo">
            <div class="con3_imgbox">
              <img src="../../assets/images/1280x1280.jpg" alt="1280x1280.jpg" />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>A套餐 短视频代运营试水套餐方案</p>
              <span>（运营一个账号）3980元+视频条数25条+运营周期30天+预期意向客户人数80人+
                保底意向客户人数60人+预期粉丝量2000+保底粉丝量1000+预期总曝光20万+保底总曝光15万</span>
            </div>
          </li>

          <li data-aos="zoom-in" data-aos-delay="200" @click="toInfo">
            <div class="con3_imgbox">
              <img src="../../assets/images/1280x1284.jpg" alt="1280x1280.jpg" />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>B套餐 短视频代运营特惠方案</p>
              <span>（运营二个账号）6000元+ 视频条数50条+运营周期60天+
                预期意向客户人数160+保底意向客户人数120+
                预期粉丝量4000+保底粉丝量2000+
                预期总曝光40万+保底总曝光30万</span>
            </div>
          </li>

          <li data-aos="zoom-in" data-aos-delay="300" @click="toInfo">
            <div class="con3_imgbox">
              <img src="../../assets/images/1280x1280.jpg" alt="1280x1284.jpg" />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>C套餐 短视频代运营速推套餐方案</p>
              <span>（运营三个账号）9000元+ 视频条数75条+运营周期30天+
                预期意向客户人数240+保底意向客户人数180+
                预期粉丝量6000+保底粉丝量3000+
                预期总曝光60万+保底总曝光45万</span>
            </div>
          </li>
        </ul>
        <a href="" class="more">更多+</a>
      </div>
    </div>
    <!-- con4 -->
    <div class="con4">
      <div class="con4con">
        <div class="contitle" data-aos="zoom-in">
          <strong>我们的优势</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>经营之道 立足之根</p>
        </div>
        <div class="con4box">
          <div class="con4boxside con4boxitem" data-aos="fade-right">
            <ul>
              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>短视频细分领域专业机构</p>
                <span>专注于短视频代运营一站式服务的新媒体传播公司，以创意策划、视频摄制、运营推广为驱动，形成了独具特色的闭环式短视频代运营服务</span>
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>天马行空的策划团队</p>
                <span>根据品牌需求和短视频平台属性，给予私人订制短视频营销解决方案。</span>
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>专业视频摄制团队</p>
                <span>追求完美的摄影师团队，加之极其注重细节的剪辑包装团队，为甲方保证每一条视频的成片质量。</span>
              </li>
            </ul>
          </div>
          <div class="con4boxcenter con4boxitem">
            <img data-aos="zoom-in" src="../../assets/images/phone_img.png" alt="bling.png" />
          </div>
          <div class="con4boxside con4boxitem" data-aos="fade-left">
            <ul>
              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>脑洞大开的创意团队</p>
                <span>一个好的脚本，约等于一个热门视频，一群平均年龄不足二十五岁的年轻人必将全力以赴。</span>
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>千人短视频素人矩阵</p>
                <span>千余素人小号资源，视频发布后模拟真人行为进行观看、点赞、评论、转发，促使视频进入更大流量池，自然流量呈井喷式增长。</span>
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>闭环式落地执行团队</p>
                <span>售后团队占公司总人数七成以上，致力打造业内完善的售后服务体系，两年来客户续单率高达九成，不续单即为失败。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- con5 -->
    <div class="con5">
      <div class="con5con">
        <div class="contitle" data-aos="zoom-in">
          <strong>短视频知识</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>分享你我的短视频代运营感悟</p>
        </div>
        <ul>
          <li @click="toInfo" data-aos="zoom-in" data-aos-delay="100">
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>AI这次又“抢”了谁的饭碗？直播间里的数字人</p>
              <span>近期，在一些短视频平台，时不时会刷到这样“惊悚”的一幕：镜头扫过一个房间，桌子上摆放着数十台电脑，屏幕上的主播正实时在线直播卖货，配文却赫然写着：“太吓人了，200平方米直播基地空无一人，全是AI数字人直播。”</span>
              <a href="">查看详情</a>
            </div>
          </li>

          <li @click="toInfo" data-aos="zoom-in" data-aos-delay="200">
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>2023年闵行科技节开幕，170余项活动等你来</p>
              <span>今年2月，上海市政府正式发布《推进“大零号湾”科技创新策源功能区建设方案》，借上海市政府推进“大零号湾”创新策源地建设契机，今年闵行科技节将围绕“科创策源，智创未来”主题开展活动</span>
              <a href="">查看详情</a>
            </div>
          </li>

          <li @click="toInfo" data-aos="zoom-in" data-aos-delay="300">
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>神舟十六号整装待发，或将首次迎来非飞行员出身的“航天员</p>
              <span>央广网北京5月23日报道，据中国载人航天工程办公室消息，神舟十六号载人飞船与长征二号F遥十六运载火箭组合体22日转运至发射区，计划近日择机实施发射。</span>
              <a href="">查看详情</a>
            </div>
          </li>

          <li data-aos="zoom-in" data-aos-delay="400" @click="toInfo">
            <div class="lin_left">
              <strong>16</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>
                中国食品科学技术学会第十六届年会暨第十届中美食品业高层论坛在武汉召开
              </p>
              <span>湖北省市场监督管理局党组成员陈专在致辞中提到，发展食品科学，促进食品产业健康发展，是落实健康中国战略，满足人民群众对美好生活追求的一件大事</span>
              <a href="">查看详情</a>
            </div>
          </li>

          <li data-aos="zoom-in" data-aos-delay="500" @click="toInfo">
            <div class="lin_left">
              <strong>16</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>中国食品科学技术学会：保障特殊时期食品供应及安全</p>
              <span>新冠肺炎疫情发生以来，全国学会积极响应中国科协号召，发挥组织优势和专家优势，团结带领广大科技工作者积极投身疫情防控的人民战争</span>
              <a href="">查看详情</a>
            </div>
          </li>

          <li data-aos="zoom-in" data-aos-delay="600" @click="toInfo">
            <div class="lin_left">
              <strong>12</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>普遍应用于轻型结构的切割工艺普遍应用于轻型结构的切割工艺</p>
              <span>现如今，许多行业都将减重作为创新驱动力。主要包括汽车技术、航空航天
                技术以及医疗技术。超声波切割为轻型结构中使用日益增多的材料…</span>
              <a href="">查看详情</a>
            </div>
          </li>
        </ul>
        <a href="" class="more">更多+</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import InBanner from "@/components/InBanner.vue";
import AOS from "aos";
import { ref, reactive, onMounted, computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
// 从Vuex中按需导入mapMutations函数
import { useStore, mapMutations } from "vuex";

const store = useStore();
const router = useRouter();

const isCollapse = computed(() => store.state.menu.isCollapse)
//console.log("isCollapse", isCollapse);
//console.log("isCollapse", !isCollapse);
// console.log('父组件created')


//更新store.state的方法
const updateArticleList = () => {
  store.commit('updateArticleList', data.artilesList)
}
//获取store.state的方法
const ArticleList = computed(() => store.state.articles.articleList)
//console.log("ArticleList", ArticleList.value);

defineOptions({
  beforeRouteEnter(_to, _from, next) {
    window.scroll(0, 0);
    next();
  }
})


const handleChangepage = (id) => {
  //console.log(id);
  router.push(`/info/${id}`);
}

const data = reactive({
  code: "",
  msg: "",
  articles: [],
  artilesList: []
})

const getArticles = () => {
  const vm = this;
  axios.get("/api/admin/articles").then(response => {
    // console.log('response',response);
    if (response.data.status == true) {
      //console.log('for');
      for (let i = 0; i < 4; i++) {
        // console.log(response.data.data.articles[i]);
        let temp = response.data.data.articles[i];
        // 重新定义picname的值，添加url路径。这样可以正常显示
        temp.picname = require('@/assets/images/' + temp.picname);
        // console.log(temp.picname);
        data.articles.push(response.data.data.articles[i]);
        data.artilesList.push({"id":String(response.data.data.articles[i].id)});
      }
    }
  })
    .catch(error => {
      console.log(error);
    });
}

// console.log(getArticles());
AOS.init({
  duration: 1000,
  disable: "mobile",
  once: true,
})



onMounted(() => {
  //生命周期函数（或者 mounted 函数）调用的方法才能运行
  getArticles();
  //更新store数据
  // updateArticleList();
  // console.log('父组件Mounted')
});
</script>

<style lang="less" scoped>
@import url("../../assets/styles/ml_index.css");
@import url("../../assets/styles/aos.css");
@import url("../../assets/styles/bugfixed.css");
@import url("../../assets/styles/nav.css");
</style>
