<template>
  <div>
    <!-- 固定分隔 -->
    <div class="sep"></div>

    <div class="swiper-container ml_banner">
      <div class="swiper-wrapper">
        <swiper
          :modules="modules"
          :slidesPerView="1"
          :spaceBetween="30"
          :loop="true"
          :centeredSlides="true"
          :navigation="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
          }"
          class="mySwiper"
        >
          <swiper-slide
            ><img src="@/assets/images/logo1.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/images/logo2.jpg" alt=""
          /></swiper-slide>

          <div class="swiper-slide">
            <a href="">
              <img src="../../assets/images/logo2.jpg" alt="通栏图片"
            /></a>
          </div>
          <div class="swiper-button-prev" @click.stop="prevEl(item, index)" />
          <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="swiper-button-next" @click.stop="nextEl" />
          <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </swiper>
      </div>
    </div>

    <!-- con1 -->
    <div class="con1">
      <div class="con1con">
        <div class="contitle" data-aos="zoom-in">
          <strong>抖音代运营服务</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>壹家视频，提供一切以客户为中心的短视频代运营服务</p>
        </div>
        <ul>
          <li
            data-aos="zoom-in"
            data-aos-delay="100"
            onclick='window.open("")'
          >
            <div class="con1imgbox">
              <img src="../../assets/images/text.png" alt="text.png" />
            </div>
            <p>短视频代运营个性化定制</p>
            <span
              >壹家视频，通过短视频代运营，用***前沿的技术，全新的互联网思维，为您是企业打造高端的品牌</span
            >
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="200"
            onclick='window.open("")'
          >
            <div class="con1imgbox">
              <img
                src="../../assets/images/pen.png"
              />
            </div>
            <p>短视频专业化拍摄</p>
            <span>壹家视频，研究视频流量的专业代运营</span>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="300"
            onclick='window.open("")'
          >
            <div class="con1imgbox">
              <img
                src="../../assets/images/chat.png"
              />
            </div>
            <p>爆款视频定制推广</p>
            <span>壹家视频，研究视频流量的专业代运营</span>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="400"
            onclick='window.open("")'
          >
            <div class="con1imgbox">
              <img
                src="../../assets/images/shop.png"
              />
            </div>
            <p>短视频矩阵推广</p>
            <span>壹家视频，研究视频流量的专业代运营</span>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="500"
            onclick='window.open("")'
          >
            <div class="con1imgbox">
              <img
                src="../../assets/images/vi.png"
              />
            </div>
            <p>短视频达人探店扶持</p>
            <span>壹家视频，研究视频流量的专业代运营</span>
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
          <p>壹家视频，为您提供精准的流量池服务</p>
        </div>
        <ul>
          <li
            data-aos="zoom-in"
            data-aos-delay="100"
            onclick='window.open("")'
          >
            <div class="con2_topbox">
              <div class="con2_imgbox">
                <img
                  src="../../assets/images/douyinyunyin.jpg"
                  alt="phone_img1.jpg"
                />
              </div>
              <div class="con2pos">
                <strong>查看案例</strong>
              </div>
            </div>
            <div class="con2_botbox">
              <p>优秀案例</p>
              <i class="fa fa-eye"></i>
            </div>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="200"
            onclick='window.open("")'
          >
            <div class="con2_topbox">
              <div class="con2_imgbox">
                <img
                  src="../../assets/images/relaiship.jpg"
                  alt="phone_img2.jpg"
                />
              </div>
              <div class="con2pos">
                <strong>查看案例</strong>
              </div>
            </div>
            <div class="con2_botbox">
              <p>优秀案例1</p>
              <i class="fa fa-eye"></i>
            </div>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="300"
            onclick='window.open("")'
          >
            <div class="con2_topbox">
              <div class="con2_imgbox">
                <img
                  src="../../assets/images/phone_img3.jpg"
                  alt="phone_img3.jpg"
                />
              </div>
              <div class="con2pos">
                <strong>查看案例</strong>
              </div>
            </div>
            <div class="con2_botbox">
              <p>优秀案例2</p>
              <i class="fa fa-eye"></i>
            </div>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="400"
            onclick='window.open("")'
          >
            <div class="con2_topbox">
              <div class="con2_imgbox">
                <img
                  src="../../assets/images/phone_img4.jpg"
                  alt="phone_img4.jpg"
                />
              </div>
              <div class="con2pos">
                <strong>查看案例</strong>
              </div>
            </div>
            <div class="con2_botbox">
              <p>优秀案例3</p>
              <i class="fa fa-eye"></i>
            </div>
          </li>
        </ul>
        <a href="" class="more"> 更多+ </a>
      </div>
    </div>
    <!-- con3 -->
    <div class="con3">
      <div class="con3con">
        <div class="contitle" data-aos="zoom-in">
          <strong>短视频代运营方案</strong>
          <img src="../../assets/images/line.png" alt="" />
          <p>壹家视频，为您提供精准的流量池服务</p>
        </div>
        <ul>
          <li
            data-aos="zoom-in"
            data-aos-delay="100"
            onclick='window.open("")'
          >
            <div class="con3_imgbox">
              <img
                src="../../assets/images/1280x1280.jpg"
                alt="1280x1280.jpg"
              />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>A套餐 短视频代运营试水套餐方案</p>
              <span
                >（运营一个账号）3980元+视频条数25条+运营周期30天+预期意向客户人数80人+
                保底意向客户人数60人+预期粉丝量2000+保底粉丝量1000+预期总曝光20万+保底总曝光15万</span
              >
            </div>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="200"
            onclick='window.open("")'
          >
            <div class="con3_imgbox">
              <img
                src="../../assets/images/1280x1284.jpg"
                alt="1280x1280.jpg"
              />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>B套餐 短视频代运营特惠方案</p>
              <span
                >（运营一个账号）6000元+ 视频条数50条+运营周期60天+
                预期意向客户人数160+保底意向客户人数120+
                预期粉丝量4000+保底粉丝量2000+
                预期总曝光40万+保底总曝光30万</span
              >
            </div>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-delay="300"
            onclick='window.open("")'
          >
            <div class="con3_imgbox">
              <img
                src="../../assets/images/1280x1280.jpg"
                alt="1280x1284.jpg"
              />
              <div class="con3pos">
                <img src="../../assets/images/more.png" alt="" />
              </div>
            </div>
            <div class="con3info">
              <p>C套餐 短视频代运营速推套餐方案</p>
              <span
                >（运营三个账号）9000元+ 视频条数75条+运营周期30天+
                预期意向客户人数240+保底意向客户人数180+
                预期粉丝量6000+保底粉丝量3000+
                预期总曝光60万+保底总曝光45万</span
              >
            </div>
          </li>
        </ul>
        <a href="Photo.aspx?ClassID=19" class="more">更多+</a>
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
                <span
                  >专注于短视频代运营一站式服务的新媒体传播公司，以创意策划、视频摄制、运营推广为驱动，形成了独具特色的闭环式短视频代运营服务</span
                >
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>天马行空的策划团队</p>
                <span
                  >根据品牌需求和短视频平台属性，给予私人订制短视频营销解决方案。</span
                >
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>专业视频摄制团队</p>
                <span
                  >追求完美的摄影师团队，加之极其注重细节的剪辑包装团队，为甲方保证每一条视频的成片质量。</span
                >
              </li>
            </ul>
          </div>
          <div class="con4boxcenter con4boxitem">
            <img
              data-aos="zoom-in"
              src="../../assets/images/phone_img.png"
              alt="bling.png"
            />
          </div>
          <div class="con4boxside con4boxitem" data-aos="fade-left">
            <ul>
              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>脑洞大开的创意团队</p>
                <span
                  >一个好的脚本，约等于一个热门视频，一群平均年龄不足二十五岁的年轻人必将全力以赴。</span
                >
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>千人短视频素人矩阵</p>
                <span
                  >千余素人小号资源，视频发布后模拟真人行为进行观看、点赞、评论、转发，促使视频进入更大流量池，自然流量呈井喷式增长。</span
                >
              </li>

              <li>
                <img src="../../assets/images/bling.png" alt="bling.png" />
                <p>闭环式落地执行团队</p>
                <span
                  >售后团队占公司总人数七成以上，致力打造业内完善的售后服务体系，两年来客户续单率高达九成，不续单即为失败。</span
                >
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
          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>AI这次又“抢”了谁的饭碗？直播间里的数字人</p>
              <span
                >近期，在一些短视频平台，时不时会刷到这样“惊悚”的一幕：镜头扫过一个房间，桌子上摆放着数十台电脑，屏幕上的主播正实时在线直播卖货，配文却赫然写着：“太吓人了，200平方米直播基地空无一人，全是AI数字人直播。”</span
              >
              <a href="">查看详情</a>
            </div>
          </li>

          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>2023年闵行科技节开幕，170余项活动等你来</p>
              <span
                >今年2月，上海市政府正式发布《推进“大零号湾”科技创新策源功能区建设方案》，借上海市政府推进“大零号湾”创新策源地建设契机，今年闵行科技节将围绕“科创策源，智创未来”主题开展活动</span
              >
              <a href="">查看详情</a>
            </div>
          </li>

          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="lin_left">
              <strong>24</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>神舟十六号整装待发，或将首次迎来非飞行员出身的“航天员</p>
              <span
                >央广网北京5月23日报道，据中国载人航天工程办公室消息，神舟十六号载人飞船与长征二号F遥十六运载火箭组合体22日转运至发射区，计划近日择机实施发射。</span
              >
              <a href="">查看详情</a>
            </div>
          </li>

          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div class="lin_left">
              <strong>16</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>
                中国食品科学技术学会第十六届年会暨第十届中美食品业高层论坛在武汉召开
              </p>
              <span
                >湖北省市场监督管理局党组成员陈专在致辞中提到，发展食品科学，促进食品产业健康发展，是落实健康中国战略，满足人民群众对美好生活追求的一件大事</span
              >
              <a href="">查看详情</a>
            </div>
          </li>

          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <div class="lin_left">
              <strong>16</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>中国食品科学技术学会：保障特殊时期食品供应及安全</p>
              <span
                >新冠肺炎疫情发生以来，全国学会积极响应中国科协号召，发挥组织优势和专家优势，团结带领广大科技工作者积极投身疫情防控的人民战争</span
              >
              <a href="">查看详情</a>
            </div>
          </li>

          <li
            onclick='window.open("")'
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div class="lin_left">
              <strong>12</strong>
              <span>2023-05</span>
            </div>
            <div class="lin_right">
              <p>普遍应用于轻型结构的切割工艺普遍应用于轻型结构的切割工艺</p>
              <span
                >现如今，许多行业都将减重作为创新驱动力。主要包括汽车技术、航空航天
                技术以及医疗技术。超声波切割为轻型结构中使用日益增多的材料…</span
              >
              <a href="">查看详情</a>
            </div>
          </li>
        </ul>
        <a href="" class="more">更多+</a>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "@/assets/js/aos.js";
AOS.init();

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
// Import Swiper styles
import "swiper/swiper-bundle.css";
const modules = [Autoplay, Pagination, Navigation, A11y];

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/styles/aos.css");
.mySwiper {
  width: 100%;
  height: 400px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
//修改分页器圆点颜色
.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: rgb(58, 76, 235);
}
//修改分页器圆点大小
.swiper-pagination-bullet {
  width: 14px;
  height: 14px;
  background-color: rgb(58, 76, 235);
}
//修改分页器圆点之间的距离
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  margin: 0 48px;
}
//修改上下页箭头样式
// .swiper-button-prev,
// .swiper-button-next {
//   color: rgb(58, 76, 235);
//   background-color: rgb(101, 114, 231);
// }
</style>
