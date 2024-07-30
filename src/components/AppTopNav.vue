<template>
  <div>
    <!-- 电脑端头部 -->
    <div class="app-top-nav">
      <div class="pcheader">
        <a href="https://www.lzhuanya.com" class="pclogo" data-aos="zoom-in"
          ><img src="../assets/images/cLogo_1.jpg" alt="公司LOGO"
        /></a>
        <ul class="pcnav">
          <!-- 一级导航 -->

          <li class="first_li" data-aos="fade-left" data-aos-delay="100">
            <router-link to="/">首页</router-link>
          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="200">
            <router-link to="/about" class="first">关于我们</router-link>
          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="300">
            <router-link to="/shotmovie">短视频代运营方案</router-link>
          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="400">
            <router-link to="/douyin">抖音代运营案例</router-link>
          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="500">
            <router-link to="/knowledge">新闻资讯</router-link>

            <!-- 二级导航 -->
            <ul class="pc_sec_nav">
              <li class="pc_sec_item">
                <router-link to="/knowledge" class="second_a">短视频知识</router-link>
              </li>

              <li class="pc_sec_item">
                <router-link to="/tradnews" class="second_a">行业新闻</router-link>

              </li>
            </ul>
          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="600">
            <router-link to="/download">下载中心</router-link>

          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="700">
            <router-link to="/message">在线留言</router-link>

          </li>

          <li class="first_li" data-aos="fade-left" data-aos-delay="800">
            <router-link to="/content">联系我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 电脑端头部 -->
    <!-- 手机端头部 -->
    <div class="ml_mb_head" data-aos="zoom-in">
      <a href="http://tengyun.template.tyjz.com" class="ml_mb_logo">
        <img src="../assets/images/c_logo.png"
      /></a>
      <div class="hb">
        <span class="top_span"></span>
        <span class="center_span"></span>
        <span class="bottom_span"></span>
      </div>
    </div>
    <!-- 手机端头部 -->
    <!-- 手机端菜单 -->
    <div class="ml_mb_nav">
      <!-- 存在二级和三级的时候添加箭头 -->
      <!-- 一级菜单 -->
      <div class="ml_mbnav_1">
        <div class="ml_mbnav_1_item">
          <router-link to="/">首页</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <router-link to="/about">关于我们</router-link>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <a href="/shotmovie">短视频代运营方案</a>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <a href="/douyin">抖音代运营案例</a>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <a href="/tradnews">新闻资讯</a>
          <i class="fa fa-angle-right mb_item1_arrow"></i>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_2">
          <div class="ml_mbnav_2_item">
            <a href="/knowledge">短视频知识</a>
          </div>

          <div class="ml_mbnav_2_item">
            <a href="/tradnews">行业新闻</a>
          </div>
        </div>

        <div class="ml_mbnav_1_item">
          <a href="/download">下载中心</a>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <a href="/message">在线留言</a>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->

        <div class="ml_mbnav_1_item">
          <a href="/content">联系我们</a>
        </div>
        <!-- 二级菜单 -->
        <!-- 存在二级和三级的时候添加箭头 -->
      </div>
    </div>
    <!-- 手机端菜单 -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../assets/styles/variables.less");
@import url("../assets/styles/ml_index.css");

:root {
  --main-color: #d31f23;
  --main-color1: #d32329;
  --main-color-white: #ffffff;
  --main-color-555: #555555;
  --main-color-999: #999999;
  --main-color-666: #666666;
  --main-color-333: #333333;
  --main-color-888: #888888;
  --main-color-222: #222222;
  --main-transition: all ease 0.4s;
  --main-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.app-top-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: var(--main-transition);
  height: 90px;
  background-color: var(--main-color-white);
  //   background-color: #333;
  .pcheader {
    max-width: 1250px;
    margin: 0 auto;
    transition: var(--main-transition);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
  }
  .pclogo img {
    height: 60px;
  }
  .pcnav {
    display: flex;
    align-items: center;
    position: relative;
    // z-index: 99;
  }
  .pcnav > li {
    position: relative;
    transition: var(--main-transition);
  }
  .pcnav > li > a {
    height: 60px;
    // line-height: 60px;
    display: block;
    font-size: 15px;
    transition: var(--main-transition);
    color: var(--main-color-333);
    padding: 0 15px;
  }
  .pc_sec_nav {

    list-style: none;
    font-family: 'microsoft yahei';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    position: absolute;
    top: 100%;
    left: 0;
    width: 150px;
    background-color: var(--main-color-white);
    opacity: 0;
    visibility: hidden;
    transition: var(--main-transition);
  }
  .pc_sec_item a {
    color: var(--main-color-666);
    font-size: 14px;
    display: block;
    padding: 10px 30px;
    transition: var(--main-transition);
  }
  .pcnav li:hover .pc_sec_nav {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .pc_sec_item:hover .pc_third_nav {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .pc_sec_item:hover .second_a {
    color: var(--main-color) !important;
    background-color: #f3f3f3;
  }
  .third_a:hover {
    color: var(--main-color) !important;
    background-color: #f3f3f3;
  }
  .pc_sec_item {
    position: relative;
  }
  .pc_third_nav {
    position: absolute;
    left: 100%;
    top: 0;
    z-index: 998;
    width: 150px;
    top: 0%;
    opacity: 0;
    visibility: hidden;
    transition: var(--main-transition);
  }
  .first_a{
    list-style: none;
    font-family: 'microsoft yahei';
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    height: 60px;
    line-height: 60px;
    display: block;
    font-size: 15px;
    transition: var(--main-transition);
    color: var(--main-color-333);
    padding: 0 20px;
  }
  .secoud_a{
    visibility: hidden;
    list-style: none;
    font-family: 'microsoft yahei';
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: var(--main-color-666);
    font-size: 14px;
    display: block;
    padding: 10px 30px;
    transition: var(--main-transition);
  }

  //   ul {
  //     display: flex;
  //     height: 90px;
  //     line-height: 90px;
  //     justify-content: flex-end;
  //     li {
  //       a {
  //         font-size: 12px;
  //         padding: 0 15px;
  //         // color: #ccc;

  //         &:hover {
  //         //   color: @xtxColor;
  //         }
  //       }
  //     }
  //     li:nth-child(1) {
  //       a {
  //         border-left: 0;
  //       }
  //     }
  //   }
}
</style>