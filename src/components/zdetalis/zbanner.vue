<template>
  <div class="z-banner">
    <div class="swiper-containers">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="is in pf"><a href=""><img :src="is" alt=""></a></div>
        <!--<div class="swiper-slide"><a href=""><img :src="pf[0]" alt=""></a></div>-->
        <!--<div class="swiper-slide"><a href=""><img :src="pf[1]"></a></div>-->
        <!--<div class="swiper-slide"><a href=""><img :src="pf[2]" alt=""></a></div>-->
        <!--<div class="swiper-slide"><a href=""><img :src="pf[3]" alt=""></a></div>-->
        <!--<div class="swiper-slide"><a href=""><img :src="pf[4]" alt=""></a></div>-->
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
    import Swiper   from "../../../node_modules/swiper/dist/js/swiper.min"
  import "../../../node_modules/swiper/dist/css/swiper.css"
    export default {
      props:["pf"],
      mounted(){
        new Swiper('.z-banner .swiper-container',{
          autoplay: {
               delay: 1000,
               stopOnLastSlide: false,
               disableOnInteraction: true
          },
          loop : true,
          pagination: {
            el: '.z-banner .swiper-pagination',
            type: 'fraction'
          }
        })
      }
    }
</script>

<style scoped>

</style>
