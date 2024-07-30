<template>
  <div class="sep">
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
              <img src="@/assets/images/logo2.jpg" alt="通栏图片"
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
// @import url("../../../assets/styles/aos.css");
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
</style>