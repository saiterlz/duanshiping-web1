<template>
  <div>
    <div class="inbanner">
      <strong data-aos="zoom-in">关于我们</strong>
    </div>

    <!-- 内页二级 -->
    <!-- 内页面包屑 -->
    <div class="ml_bread_inner">
      <a href="/">首页</a>
      <span>></span>
      <a>关于我们</a>
    </div>

    <!-- aboutus1 -->
    <div class="aboutus1">
      <div class="aboutus1con">
        <div class="aboutus1left" data-aos="fade-right">
          <p>焕雅全媒体运营中心</p>
          <span>HUAN YA ALL MEDIA OPERATION CENTER <br>
            兰州焕雅文化传媒有限公司在新媒体领域有着丰富建设实施经验，是一家致力于新媒体建设投资运营服务型企业。公司以“抖音本地生活化服务中心、焕雅新媒体商学院”为核心架构，形成了针对实体商家、政府、企业、个人IP打造等不行同业、不同规模、不同应用的新媒体运营1V1针对性新媒体流量解决方案及产业闭环。
          </span>
        </div>
        <div class="aboutus1right" data-aos="fade-left">
          <img src="../../assets/images/lilian.jpg" alt="about_4pic.png" />
        </div>
      </div>
    </div>
    <!-- aboutus2 -->
    <div class="aboutus2">
      <div class="aboutus2con">
        <div class="about2item">
          <div class="aboutus2itemleft" data-aos="fade-right">
            <img
              src="../../assets/images/changdi.jpg"
              alt="about_banner1.jpg"
            />
          </div>
          <div class="aboutus2itemright" data-aos="fade-left">
            <p>专业、专注</p>
            <span
              >团队每个成员拥有10年的运营推广经验积累，我们不是单打独斗，每一个作品都是各成员齐心协力合作而成。</span
            >
          </div>
        </div>

        <div class="about2item">
          <div class="aboutus2itemleft" data-aos="fade-right">
            <img
              src="../../assets/images/zhibohuanjin.jpg"
              alt="about_banner2.jpg"
            />
          </div>
          <div class="aboutus2itemright" data-aos="fade-left">
            <p>严苛、严谨的制作流程</p>
            <span
              >细节决定品质、品质决定成败，我们从业务谈单获取需求到设计短视频方案，再到落地拍摄，上线到推广每一个环节步骤层层把关与客户保持紧密沟通，不出纰漏。</span
            >
          </div>
        </div>

        <div class="about2item">
          <div class="aboutus2itemleft" data-aos="fade-right">
            <img
              src="../../assets/images/huanjin.jpg"
              alt="about_banner3.jpg"
            />
          </div>
          <div class="aboutus2itemright" data-aos="fade-left">
            <p>差异化，拒绝平庸</p>
            <span
              >您的企业听您的，做属于自己特色的短视频代运营，深刻透彻领悟您的需求与想法为您实现个性化。</span
            >
          </div>
        </div>

        <div class="about2item">
          <div class="aboutus2itemleft" data-aos="fade-right">
            <img
              src="../../assets/images/about_banner4.jpg"
              alt="about_banner4.jpg"
            />
          </div>
          <div class="aboutus2itemright" data-aos="fade-left">
            <p>一对一服务，满意为止</p>
            <span
              >制作过程快速响应全程跟踪，一切以客户为中心，作品满意为宗旨，提供完善售后、技术支持，让您无后顾之忧。</span
            >
          </div>
        </div>

        <div class="about2item">
          <div class="aboutus2itemleft" data-aos="fade-right">
            <img
              src="../../assets/images/about_banner5.jpg"
              alt="about_banner5.jpg"
            />
          </div>
          <div class="aboutus2itemright" data-aos="fade-left">
            <p>短视频细分领域专业机构</p>
            <span>以创意策划、视频摄制、运营推广为驱动</span>
          </div>
        </div>
      </div>
    </div>
    <!-- txt_ -->
    <div class="_txt">
      <p>
        <img
          src="../../assets/images/example01.jpg"
          alt="DM_20231024144206_001.jpg"
        />
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "@/assets/js/aos.js";
AOS.init();
export default {};
</script>

<style lang="less" scoped>
@import url("../../assets/styles/ml_index.css");
@import url("../../assets/styles/aos.css");
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
.inbanner {
  background-image: url("@/assets/images/about_banner.jpg");
}
.infotext {
  font-family: "microsoft yahei";
  font-size: 20px;
  color: #000000;
}
.infotext_a {
  font-family: "microsoft yahei";
  font-size: 14px;
  color: #000000;
}
</style>