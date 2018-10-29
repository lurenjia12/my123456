<template>
  <footer>
    <a href="" class="onepintang">
      <i class="iconfont icon-shouye" ></i>
      <span>首页</span>
    </a>
    <a href="http://localhost:8080/#/zts">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </a>
    <a href="http://localhost:8080/#/onepintang" >
      <i class="iconfont icon-1haodian51"></i>
      <span>1品堂</span>
    </a>
    <a href="http://localhost:8080/#/carts">
      <i class="iconfont icon-icon22fuzhi"></i>
      <span>购物车</span>
      <b class="s-number">0</b>
    </a>
    <a href="javascript">
      <i class="iconfont icon-wode"></i>
      <span>我的1号店</span>
    </a>
  </footer>
</template>

<script>
    export default {

        props:["number"]
    }
</script>

<style scoped>
  footer{
    /*height: .44rem;*/
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #FFFFFF;
  }

  footer a{
    /*height: .31rem;*/
    margin-top: .03rem;
    margin-bottom: 0.03rem;
    text-align: center;
    color: #686868;
  }
  .iconfont{
    display: block;
    font-size: 0.2rem;
    /*color: #f04d46;*/
  }
  footer a span{
    display: block;
    font-size: 0.08rem;
  }
  footer .onepintang{
    color: #f04d46;
  }

  .s-number{
    display: block;
    width:.15rem;
    height: .15rem;
    border-radius: 50%;
    background: #ff3c25;
    font-size:.08rem ;
    color: #fff3f1;
    text-align: center;
    line-height: .15rem;
    /*position: absolute;*/
    /*left: 2.45rem;*/
    /*top: .25rem;*/
    font-weight: 100;
  }

</style>
