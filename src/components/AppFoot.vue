<template>
  <div>
    <!-- 底部 -->
    <!-- foot -->
    <div class="foot">
      <div class="footer">
        <!-- 回到顶部 -->
        <a @click="handleBackToTop" v-show="showBackToTop" class="f_top"
          ><img src="../assets/images/top.png" alt=""
        /></a>
        <strong>友情链接</strong>
        <div class="a_link">
          <a href="http://www.baidu.com">腾讯</a>

          <span>|</span>

          <a href="http://www.baidu.com">百度</a>
          
          <span>|</span>

          <a href="http://www.douyin.com">抖音</a>
        </div>
      </div>
    </div>
    <!-- copy -->
    <div class="copy">
      <div class="copycon">
        © 2024 兰州焕雅文化传媒有限公司&nbsp;&nbsp;All Rights Reserved.
        &nbsp;&nbsp;备案号：<a href="http://beian.miit.gov.cn/" target="_blank"
          >甘ICP备202388888888号</a
        >

        <a
          href="https://www.aliyun.com/"
          title="阿里云提供技术服务"
          target="_blank"
        >
          阿里云提供技术服务
        </a>
      </div>
    </div>
    <!-- footer -->

    <!-- 购物车 -->


    <!-- 手机端底部菜单 -->
    <ul class="ml_mbbot">
      <li>
        <a href="/" style="text-align: center">
          <i class="fa fa-home"></i>
          <p>首页</p>
        </a>
      </li>
      <li>
        <a
          href="Tel:联系电话：0513-88888888&nbsp;&nbsp;"
          style="text-align: center"
        >
          <i class="fa fa-phone"></i>
          <p>电话</p>
        </a>
      </li>
      <li>
        <a href="Message.aspx?ClassID=22" style="text-align: center">
          <i class="fa fa-envelope-o"></i>
          <p>留言</p>
        </a>
      </li>
      <li>
        <a href="#top" style="text-align: center">
          <i class="fa fa-arrow-circle-o-up"></i>
          <p>回到顶部</p>
        </a>
      </li>
    </ul>
    <!-- 手机端底部菜单 -->

    <!-- 电脑侧边栏 -->

    <div class="ml_sidebar">
      <ul>
        <li>
          <i class="fa fa-phone"></i><span>电话</span>
          <div class="ml_sidebar_pos">1391931188</div>
        </li>

        <li>
          <i class="fa fa-qq"></i><span>QQ</span>
          <div class="ml_sidebar_pos">3699999</div>
        </li>

        <li>
          <i class="fa fa-qrcode"></i><span>微信</span>
          <div class="ml_sidebar_pos ml_sidebar_pos_code">
            <img src="../assets/images/2code.jpg" alt="二维码" />
          </div>
        </li>

        <li
          onclick="window.open('tencent://message/?uin=1234567&Site=Sambow&Menu=yes')"
        >
          <i class="fa fa-user"></i><span>客服</span>
        </li>

        <li class="backtotop ml_sidebar_show">
          <a
            href="#top"
            style="color: #fff; display: flex; flex-direction: column"
            ><i class="fa fa-angle-up"></i><span>返回顶部</span></a
          >
        </li>
      </ul>
    </div>

    <!-- 电脑侧边栏 -->
    <!-- 网站通用侧边栏底部菜单 -->
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  setup() {
    const showBackToTop = ref(false);
    const handleScroll = () => {
      showBackToTop.value = window.pageYOffset > 1000;
      // console.log(showBackToTop.value);

    };

    const handleBackToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      showBackToTop,
      handleBackToTop,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../assets/styles/variables.less");
@import url("../assets/styles/ml_index.css");
// 网站通用侧边栏底部菜单
@import url("../assets/styles/ML_contact_nav.css");
// @import url("../assets/styles/font-awesome.min.css");
.foot {
  padding: 50px 0;
  background-color: #3b3b3b;
  margin-top: 50px;
}
.footer {
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
}
.f_top {
  width: 56px;
  height: 64px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -80px;
}
</style>