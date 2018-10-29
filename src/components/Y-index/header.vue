<template>
  <header>
    <!-- 定位盒子 -->
    <div class="Y-header-left">
      <i class="iconfont icon-location"></i>
      <span>北京</span>
    </div>
    <!-- 搜索框 -->
    <div class="Y-header-search-box">
      <i class="iconfont icon-sousuo"></i>
      <span>抢11111金币 天天抽奖</span>
    </div>
    <!-- 扫一扫和信息 -->
    <div class="Y-header-right">
      <i class="iconfont icon-saoyisao"></i>
      <i class="iconfont icon-xinxi"></i>
    </div>
  </header >
</template>

<script>
    export default {
      name: "Yheader",
      // methods(){
      //   this.$nextTick(()=>{
      //     window.onscroll = function() {
      //       var headerMain = document.getElementsByTagName('header');
      //       if(window.pageYOffset >0){
      //         headerMain.style.backgroundColor="#fff";
      //       } else if(window.pageYOffset === 0){
      //         headerMain.style.backgroundColor='transparent';
      //       }
      //     }
      //   })
      // }
    }
</script>

<style scoped>
  header{
    width:100%;
    height:0.49rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left:0;
    top:0;
    z-index:2;
    background: transparent;
  }
  .Y-header-left{
    width:0.48rem;
    height:0.34rem;
    font-size:0.12rem;
    color:#efffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 0.13rem;
  }
  .iconfont{
      font-size: 0.2rem;
      color:#efffff;
  }
  .Y-header-search-box{
    width:2.23rem;
    height:0.34rem;
    background:#cde6f3;
    font-size:0.14rem;
    color: #666666;
    line-height: 0.34rem;
    border-radius:0.1rem;
  }
  .icon-sousuo{
    margin-left: 0.07rem;
    margin-right: 0.05rem;
  }
  .Y-header-right{
    width:0.6rem;
    height:0.34rem;
    font-size: 0.22rem;
    color: #efffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 0.11rem;
  }
</style>
