<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        下午1点红包雨不见不散!
      </div>
      <div class="swiper-slide">
        1号店最全金币玩法大升级啦!
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import 'swiper/dist/js/swiper.js'
    export default {
      name: "swiper02",
      mounted(){
        new Swiper('.swiper-container', {
          autoplay: {
            delay: 2000,//2秒切换一次
            disableOnInteraction: false,
          },
          direction: 'vertical', // 水平方向
          loop: true, // 循环模式选项
        })
      },
    }
</script>

<style scoped>
  .swiper-container{
    width:1.88rem;
    height:0.64rem;
    margin-top: 0.3rem;
    /* display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center; */
  }
  .swiper-slide{

    display: block;
    width:1.88rem;
    height:0.32rem;
    font-size: 0.13rem;
    line-height: 0.32rem;
    color:#333333;
  }
</style>
