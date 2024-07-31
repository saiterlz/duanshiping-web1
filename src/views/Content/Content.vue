<template>
  <div>
    <div class="inbanner">
      <strong data-aos="zoom-in">联系我们</strong>
    </div>

    <div class="inside">
      <!--Content Start-->

      <div id="ContactMoban" style="width: 100%">
        <div class="ml_contact">
          <div class="ml_contactcon">
            <div class="ml_contactcon_left">
              <strong class="tact_strong">联系方式</strong>
              <ul>
                <li
                  data-aos="fade-right"
                  data-aos-delay="100"
                  class="aos-init aos-animate"
                >
                  <i class="fa fa-phone"></i>
                  <div>
                    <p>联系电话：</p>
                    <span>0931-88888888</span>
                  </div>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="200"
                  class="aos-init aos-animate"
                >
                  <i class="fa fa-envelope-o"></i>
                  <div>
                    <p>联系邮箱：</p>
                    <span>328763968@qq.com</span>
                  </div>
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-delay="300"
                  class="aos-init aos-animate"
                >
                  <i class="fa fa-location-arrow"></i>
                  <div>
                    <p>联系地址：</p>
                    <span>甘肃省兰州市城关区南滨河东路5222号名城广场3号楼33层3309室</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="ml_contactcon_right ml_map">
              <li >
                <div id="showMap"></div>
              </li>
            </div>
          </div>
        </div>
        <div class="ml_map">
          <div class="ml_contactcon_right" style="width: 100%">
            <strong class="tact_strong" style="text-align: center"
              >在线留言</strong
            >
            <input
              data-aos="fade-left"
              data-aos-delay="100"
              name="txtTitle"
              type="hidden"
              value="咨询主题"
              class="aos-init aos-animate"
            />
            <input
              data-aos="fade-left"
              data-aos-delay="100"
              name="txtRealname"
              type="text"
              placeholder="姓名"
              class="aos-init aos-animate"
            />
            <input
              data-aos="fade-left"
              data-aos-delay="200"
              name="txtPhone"
              type="text"
              placeholder="电话"
              class="aos-init aos-animate"
            />
            <input
              data-aos="fade-left"
              data-aos-delay="300"
              name="txtEmail"
              type="text"
              placeholder="邮箱"
              class="aos-init aos-animate"
            />
            <textarea
              data-aos="fade-left"
              data-aos-delay="400"
              name="txtContent"
              id=""
              placeholder="留言内容"
              class="aos-init aos-animate"
            >
            </textarea>
            <a
              href="javascript:checkNull();"
              data-aos="fade-left"
              data-aos-delay="500"
              name="Button1"
              class="ml_sub aos-init aos-animate"
              >立即提交</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import  BaiduMap  from 'vue-baidu-map-3x'

import AOS from "@/assets/js/aos.js";
AOS.init();

import { reactive, onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      //地图初始化
      const BMapGL = window.BMapGL;
      var map = new BMapGL.Map("showMap");
      // 103.873869,36.082543
      map.centerAndZoom(new BMapGL.Point(103.873869, 36.082543), 14);
      map.enableScrollWheelZoom(true);
      map.setHeading(64.5);
      map.setTilt(73);
      var point = new BMapGL.Point(103.873869, 36.082543);
      var marker = new BMapGL.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      var opts = {
        width: 150, // 信息窗口宽度
        height: 30, // 信息窗口高度
        title: "Hello", // 信息窗口标题
      };
      var infoWindow = new BMapGL.InfoWindow("名城广场3号楼3309室", opts); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
    });
  },
};
</script>

<style lang="less" scoped>
@import url("../../assets/styles/commonStyle.css");
@import url("../../assets/styles/aos.css");
.inbanner {
  width: 100%;
  height: 300px;
  background-image: url(../../assets/images/about_banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
}
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
img {
  font-family: "microsoft yahei";
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 90px;
}
#showMap {
  height: 380px;
}
</style>