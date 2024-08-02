<template>
    <div class="swiper-container ml_banner">
      <div class="swiper-wrapper">
        <swiper
          :modules="modules"
          :slidesPerView="auto"
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
          class="swiper-slide"
        >
          <swiper-slide
            ><img src="@/assets/images/logo1.jpg"  alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="@/assets/images/logo2.jpg" alt=""
          /></swiper-slide>

        </swiper>
      </div>
    </div>
</template>

<script>

import AOS from "@/assets/js/aos.js";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide} from "swiper/vue";
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
const modules = [Autoplay, Pagination, Navigation, A11y,Scrollbar];

export default {
  data () {
    return {
       swiperOptions: {
          autoHeight: true
        }
    }
  },
  created() {
    //生命周期函数（或者 mounted 函数）调用的方法才能运行
  },
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
      navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style lang="less" scoped>
// @import url("../../../assets/styles/aos.css");
// @import url("swiper/swiper.less");

@import url("../assets/styles/ml_index.css");
@import url("../assets/styles/ML_swiper.min.css");
</style>