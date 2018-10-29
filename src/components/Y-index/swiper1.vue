<template>
  <div class="Y-swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="data in td"><img :src="data.src"></div>
    </div>
    <!-- 顺序红点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    import 'swiper/dist/js/swiper.js'
    // import
    export default {
      name: "swiper1",
      props:["td"],
      mounted(){
        new Swiper('.Y-swiper-container', {
          autoplay: {
            delay: 1000,//1秒切换一次
            disableOnInteraction: false,
          },
          direction: 'horizontal', // 水平方向
          loop: true, // 循环模式选项
          // 分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        })
      },
      created(){
        console.log(this.td)
      }
    }
</script>

<style scoped>
  /*@import Swiper from 'swiper/dist/css/swiper'*/
  .Y-swiper-container{
    width:100%;
    height:1.9rem;
  }
  .Y-swiper-container img{
    width:100%;
    height:1.9rem;
  }

  .swiper-pagination{
    width:100%;
    height:0.1rem;
    position: absolute;
    left:0;
    top:1.41rem;
    display: flex;
    justify-content: center;
  }

</style>
