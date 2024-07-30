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
                    <span>888888@xx.com</span>
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
                    <span>甘肃省兰州市七里河区兰州中心大夏</span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="ml_contactcon_right ml_map">
                <li style="height: 500px;">
              <!-- 103.781759,36.073969 -->
              <baidu-map class="ml_contactcon_right ml_map" ak="Iwem88PLqq1lCfkRWcIBbsSorVjijlgf" v="3.0" type="API" :center="{lng: 103.781759, lat: 36.073969}" zoom="5" width="100%" height="500px">
                <!-- <baidu-map class="map" ak="Iwem88PLqq1lCfkRWcIBbsSorVjijlgf" v="3.0" type="API" :center="{lng: 116.404, lat: 39.915}" :zoom="15"> -->
            </baidu-map>
            </li>
            </div>
          </div>
        </div>
        <div>
            <baidu-map class="ml_contactcon_right ml_map" ak="Iwem88PLqq1lCfkRWcIBbsSorVjijlgf" v="3.0" type="API" :center="{lng: 103.781759, lat: 36.073969}" zoom="5" width="100%" height="500px">
                <!-- <baidu-map class="map" ak="Iwem88PLqq1lCfkRWcIBbsSorVjijlgf" v="3.0" type="API" :center="{lng: 116.404, lat: 39.915}" :zoom="15"> -->
            </baidu-map>
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
import  BaiduMap  from 'vue-baidu-map-3x'

import AOS from "@/assets/js/aos.js";
AOS.init();




export default {
}
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
.map {
  width: 500px;
  height: 500px;
}

</style>