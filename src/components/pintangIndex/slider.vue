<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
      <!--<div class="swiper-slide"><img src="../../../static/img/luobo1.jpg"/></div>-->
      <!--<div class="swiper-slide"><img src="../../../static/img/luobo2.jpg"/></div>-->
      <!--<div class="swiper-slide"><img src="../../../static/img/lunbo3.jpg"/></div>-->
      <div class="swiper-slide"  v-for="z in x"><img :src="z" class="slunboimg"/></div>
    </div>
  </div>
</template>

<script>
    // const Swiper=require("Swiper");
    import Swiper from "swiper"
    import "../../../node_modules/swiper/dist/css/swiper.css"
    import "../../../node_modules/swiper/dist/js/swiper.js"
    export default {
      mounted(){
        new Swiper('.swiper-container', {
          loop:true,
          autoplay:true,
          preventClicks : false,
          preventLinksPropagation : false,
          slideToClickedSlide: true
        })
      },
      props:["x"]
    }
</script>

<!--<style scoped>-->
  <!--.swiper-container {-->
    <!--width: 100%;-->
    <!--/*height: 100%;*/-->
  <!--}-->
  <!--.swiper-slide {-->
    <!--text-align: center;-->
    <!--font-size: 18px;-->
    <!--background: #fff;-->

    <!--/* Center slide text vertically */-->
    <!--display: -webkit-box;-->
    <!--display: -ms-flexbox;-->
    <!--display: -webkit-flex;-->
    <!--display: flex;-->
    <!-- -webkit-box-pack: center;-->
    <!-- -ms-flex-pack: center;-->
    <!-- -webkit-justify-content: center;-->
    <!--justify-content: center;-->
    <!-- -webkit-box-align: center;-->
    <!-- -ms-flex-align: center;-->
    <!-- -webkit-align-items: center;-->
    <!--align-items: center;-->
  <!--}-->
  <!--.swiper-slide img{-->
    <!--width: 2.78rem;-->
    <!--height: 1.74rem;-->
  <!--}-->
<!--</style>-->
