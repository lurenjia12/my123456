<template>
  <section>
    <!-- 轮播图 -->
   <Swiper1 :td="tm"></Swiper1>
    <!-- 轮播图结束 -->
    <!-- 导航盒子 -->
    <div class="Y-nav">
      <div class="Y-nav-box">
        <img src="../../../static/assets/img/qiandao.gif"/>
        天天签到
      </div>
      <div class="Y-nav-box">
        <img src="../../../static/assets/img/choujiang.gif"/>
        全民抽奖
      </div>
      <div class="Y-nav-box">
        <img src="../../../static/assets/img/lingquan.png" />
        领券中心
      </div>
      <div class="Y-nav-box">
        <img src="../../../static/assets/img/9.9.png"/>
        9块9
      </div>
      <div class="Y-nav-box">
        <img src="../../../static/assets/img/chongzhi.png"/>
        充值中心
      </div>
    </div>
    <!-- 导航盒子结束 -->

    <!-- 1号热线 -->
    <div class="Y-Hotline">
      <img src="../../../static/assets/img/logo1.png"/>
      <Swiper02></Swiper02>
      <i class="iconfont icon-you"></i>
    </div>
    <!-- 1号热线结束 -->

    <!-- 新人专享 -->
    <div class="Y-Newlyweds">
      <div class="Y-imgbox">
        <img src="../../../static/assets/img/xinren.gif"/>
      </div>
      <div class="Y-imgbox">
        <img src="../../../static/assets/img/libao.gif"/>
      </div>
    </div>
    <!-- 新人专享结束 -->

    <!-- 超级单品 -->
    <div class="Y-Supersingle">
      <!-- 倒计时和超值购 -->
      <div class="Y-Countdownandvaluepurchase">
        <div class="Y-Countdown">
          <h3>超级单品</h3>
          <span class="Y-time">
                        <em class="hour num">00</em>
                        <em>:</em>
                        <em class="min num">00</em>
                        <em>:</em>
                        <em class="sec num">00</em>
                    </span>
        </div>
        <div class="Y-Bursting">
          爆款超值购 》
        </div>
      </div>
      <div class="Y-Singlebar">
        <div class="Y-goodsbox" v-for="data in tn">
          <img :src="data.src"/>
          <span class="Y-title">{{data.title}}</span>
          <p class="Y-price">
            <span class="Y-Present-price"><span>￥</span>{{data.price}}</span>
            <span class="Y-Original-price"><span>￥</span>{{data.oldprice}}</span>
          </p>
        </div>
        <a href="#">
          查看更多
          <i class="iconfont icon-you"></i>
        </a>
      </div>
    </div>
    <!-- 超级品牌和超级品类 -->
    <div class="Y-category">
      <!-- 超级品牌 -->
      <div class="Y-brand">
        <h3>超级品牌</h3>
        <img src="../../../static/assets/img/quqi.jpg"/>
      </div>
      <!-- 超级品类 -->
      <div class="Y-brand">
        <h3>超级品类</h3>
        <img src="../../../static/assets/img/tsubakl.jpg"/>
      </div>
    </div>
    <!-- 食品 -->
    <div class="Y-foodbox">
      <a href="#">
        <img src="../../../static/assets/img/meishi.jpg" class="Y-foodimg"/>
        <img src="../../../static/assets/img/group-purple.png" class="Y-foodimgtitle"/>
        <span class="Y-eat">吃遍全球</span>
      </a>
      <!-- 进口食品 -->
      <a href="#">
        <img src="../../../static/assets/img/jinkou.jpg" class="Y-jinkou"/>
      </a>
    </div>
    <!-- 食品类别 -->
    <div class="Food-category">
      <div class="Food-category-box">
        <img src="../../../static/assets/img/niunai.jpg"/>
        <p>牛奶</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/ganhuo.jpg" />
        <p>坚果炒货</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/Chocolates.jpg" />
        <p>巧克力/糖果</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/gaodian.jpg" />
        <p>饼干糕点</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/niurou.jpg" />
        <p>肉干</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/maipian.jpg" />
        <p>冲调</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/drink.jpg" />
        <p>饮料</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/jiu.jpg" />
        <p>酒</p>
      </div>
    </div>
    <!-- 水果 -->
    <div class="Y-foodbox">
      <a href="#">
        <img src="../../../static/assets/img/shuiguo.jpg" class="Y-foodimg" />
        <img src="../../../static/assets/img/group-yellow.png" class="Y-foodimgtitle" />
        <span class="Y-eat">水果</span>
      </a>
      <!-- 奶粉 -->
      <a href="#">
        <img src="../../../static/assets/img/naifen.jpg" class="Y-jinkou" />
      </a>
    </div>
    <!-- 肉类 -->
    <div class="Food-category">
      <div class="Food-category-box">
        <img src="../../../static/assets/img/dazhaxie.jpg" />
        <p>大闸蟹</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/zhuniuyangrou.jpg" />
        <p>猪牛羊肉</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/haixianshui.jpg" />
        <p>海鲜水</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/qinroudanpin.jpg" />
        <p>禽肉蛋品</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/niaokushijin.jpg" />
        <p>尿裤湿巾</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/yingyangjiankang.jpg" />
        <p>营养健康</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/weiyangyongpin.jpg" />
        <p>喂养用品</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/yingerxihu.jpg" />
        <p>婴儿洗护</p>
      </div>
    </div>
    <!-- 纸品清洁 -->
    <div class="Y-foodbox">
      <a href="#">
        <img src="../../../static/assets/img/zhipinqingjie.jpg" class="Y-foodimg" />
        <img src="../../../static/assets/img/group-red.png" class="Y-foodimgtitle" />
        <span class="Y-eat">纸品清洁</span>
      </a>
      <!-- 养发护发 -->
      <a href="#">
        <img src="../../../static/assets/img/yangfahufa.jpg" class="Y-jinkou" />
      </a>
    </div>
    <!-- 清洁 -->
    <div class="Food-category">
      <div class="Food-category-box">
        <img src="../../../static/assets/img/yiwuqingjie.jpg" />
        <p>衣物清洁</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/chuweiqingjie.jpg" />
        <p>厨卫清洁</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/qingjiegongju.jpg" />
        <p>清洁工具</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/yicixingyongpin.jpg" />
        <p>一次性用品</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/shentihuli.jpg" />
        <p>身体护理</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/nvxinghuli.jpg" />
        <p>女性护理</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/mianbuhuli.jpg" />
        <p>面部护理</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/kouqianghuli.jpg" />
        <p>口腔护理</p>
      </div>
    </div>
    <!-- 手机通讯 -->
    <div class="Y-foodbox">
      <a href="#">
        <img src="../../../static/assets/img/shoujitongxun.jpg" class="Y-foodimg" />
        <img src="../../../static/assets/img/group-green.png" class="Y-foodimgtitle" />
        <span class="Y-eat">手机通讯</span>
      </a>
      <!-- 奶粉 -->
      <a href="#">
        <img src="../../../static/assets/img/chongwu.jpg" class="Y-jinkou" />
      </a>
    </div>
    <!-- 空气净化 -->
    <div class="Food-category">
      <div class="Food-category-box">
        <img src="../../../static/assets/img/kongqijinghua.jpg" />
        <p>空气净化</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/xichenchuman.jpg" />
        <p>吸尘除螨</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/tongshu.jpg" />
        <p>童书</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/gouliang.jpg" />
        <p>狗粮</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/maoliang.jpg" />
        <p>猫粮</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/chongwulingshi.jpg" />
        <p>宠物零食</p>
      </div>
      <div class="Food-category-box">
        <img src="../../../static/assets/img/maogouriyong.jpg" />
        <p>猫狗日用</p>
      </div>
    </div>
    <!-- 懂你想要 -->
    <div class="want-to">
      <div class="Understand-title">
        <h3>懂你想要</h3>
      </div>
      <div class="goods-box-box" >
        <div class="goods" v-for="data in god">
          <img :src="data.src"/>
          <p class="Y-juan">劵</p>
          <p class="Y-oldthing">{{data.title}}</p>
          <p class="Y-price-p">
            <span class="Y-red-price">￥{{data.price}}</span>
            <span class="Y-similarity">找相似</span>
          </p>
        </div>
        <!--<div class="goods">-->
          <!--<img src="../../../static/assets/img/diqiuyi.jpg" />-->
          <!--<p class="Y-juan">劵</p>-->
          <!--<p class="Y-oldthing">翻旧事 创意家居装饰小摆件</p>-->
          <!--<p class="Y-shipin">复古地球仪工艺品摆件 家...</p>-->
          <!--<p class="Y-price-p">-->
            <!--<span class="Y-red-price">￥19.9</span>-->
            <!--<span class="Y-similarity">找相似</span>-->
          <!--</p>-->
        <!--</div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper1 from './swiper1'
  import Swiper02 from './swiper02'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import 'swiper/dist/js/swiper.js'
    export default {
      name: "Section",
      props:["tn","tm","god"],
      components:{
          Swiper1,
          Swiper02
      },
      created(){
        console.log(this.god)
        new Swiper('.Y-ulbox', {
          autoplay: {
            delay: 1000,//1秒切换一次
          },
          direction: 'vertical', // 水平方向
          loop: true, // 循环模式选项
          // 分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        })
      }
    }
</script>

<style scoped>
  .Y-nav{
    width:3.55rem;
    height:1.09rem;
    background:#ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius:0.1rem;
    border-top-right-radius:0.1rem;
    position: absolute;
    left:0.1rem;
    top:1.56rem;
    z-index: 1;
  }
  .Y-nav-box{
    width:0.71rem;
    font-size:0.12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Y-nav-box img{
    width:0.48rem;
    height:0.48rem;
  }
  /* 1号热线开始 */
  .Y-Hotline{
    width:3.55rem;
    height:0.32rem;
    background:#ffffff;
    margin:0 auto;
    margin-top:0.78rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow:hidden;
  }
  .Y-Hotline img{
    width:0.65rem;
    height:0.16rem;
  }

  /* 新人专享 */
  .Y-Newlyweds{
    width:3.55rem;
    height:1.13rem;
    margin:0 auto;
    margin-top:0.12rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .Y-imgbox{
    width:1.77rem;
    height:1.13rem;
  }
  .Y-imgbox img{
    width:1.77rem;
    height:1.13rem;
  }
  /* 新人专享结束 */

  /* 超级单品 */
  .Y-Supersingle{
    width:3.55rem;
    height:2.1rem;
    background:#ffffff;
    margin:0 auto;
    margin-top: 0.11rem;
  }
  /* 倒计时和超值购 */
  .Y-Countdownandvaluepurchase{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 0.13rem;
  }
  .Y-Countdown{
    display: flex;
    justify-content:flex-start;
    align-items: center;
  }
  .Y-Countdown h3{
    font-size: 0.17rem;
    margin-right: 0.06rem;
  }
  .Y-Countdown span{
    font-size: 0.1rem;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .Y-time .num{
    width:0.2rem;
    height:0.17rem;
    background:#666666;
  }
  /* 爆款超值购 */
  .Y-Bursting {
    font-size:0.13rem;
    color: #ff6666;
  }
  /* 物品栏 */
  .Y-Singlebar{
    width:100%;
    height:1.8rem;
    display: flex;
    overflow-x: auto;
  }
  .Y-goodsbox{
    width:1rem;
    height:1.65rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Y-goodsbox img{
    width:1rem;
    height:1rem;
  }
  .Y-goodsbox .Y-title{
    font-size: 0.12rem;
    color: #333333;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width:0.93rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .Y-price{
    display: flex;
    align-items: center;
  }
  .Y-goodsbox .Y-price .Y-Present-price{
    font-size:0.12rem;
    color: #cc3333;
  }
  .Y-goodsbox .Y-price .Y-Original-price{
    font-size: 0.08rem;
    color: #999999;
    text-decoration: line-through;
  }
  .Y-Singlebar a{
    font-size: 0.12rem;
    color: #cccccc;
    margin-left: 0.1rem;
    padding-right: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .Y-Singlebar a .icon-you{
    margin-top: 0.05rem;
  }
  /* 超级单品结束 */

  /* 超级品牌和超级品类 */
  .Y-category{
    width:3.55rem;
    height:1.42rem;
    margin:0 auto;
    display: flex;
  }
  .Y-category img{
    width:1.78rem;
    height:1.42rem;
  }
  .Y-brand h3{
    font-size: 0.16rem;
    color: #333333;
    z-index: 1;
    position: absolute;
    left:0.11rem;
    top:0.11rem;
  }
  .Y-brand{
    position: relative;
  }
  .Y-category h3{
    font-size: 0.16rem;
    color: #333333;
    position: absolute;
    left:0.11rem;
    top:0.11rem;
    z-index: 1;
  }
  /* 食品 */
  .Y-foodbox{
    width:3.55rem;
    height:1.31rem;
    margin:0 auto;
    margin-top:0.11rem;
    position: relative;
    display: flex;
  }
  .Y-foodimg{
    width:1.78rem;
    height:1.31rem;

  }
  .Y-foodimgtitle{
    width:0.95rem;
    height:0.34rem;
    position: absolute;
    top:0;
    left:-1%;
  }
  .Y-eat{
    font-size:0.14rem;
    color: #ffffff;
    position: absolute;
    top:4%;
    left:2%;
    font-weight:600;
  }
  /* 进口食品 */
  .Y-jinkou{
    width:1.78rem;
    height:1.31rem;
  }
  /* 食品类别 */
  .Food-category{
    width:3.55rem;
    height:1.45rem;
    background:#ffffff;
    margin:0 auto;
    overflow-x: auto;
    display: flex;
  }
  .Food-category-box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Food-category-box img{
    width:0.8rem;
    height:0.8rem;
    padding-top: 0.1rem;
  }
  .Food-category-box p{
    font-size: 0.14rem;
    color: #333333;
    margin-top:0.1rem;
  }
  /* 懂你想要 */
  .want-to{
    width:3.55rem;
    margin:0 auto;
    margin-top:0.1rem;
  }
  .Understand-title{
    width:100%;
    height:0.37rem;
    line-height: 0.37rem;
  }
  .Understand-title h3{
    font-size: 0.17rem;
    color: #333333;
  }
  /* 物品 */
  .goods-box-box{
    display: flex;
    /*flex-direction: column;*/
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
  }
  .goods{
    width:1.7rem;

  }
  .goods img{
    width:1.5rem;
    height:1.5rem;
    margin:0 auto;
  }
  .Y-juan{
    width:0.18rem;
    font-size: 0.1rem;
    text-align: center;
    color:#ff6600;
    border:1px solid #ffcc99;
    margin-top: 0.09rem;
  }
  .Y-oldthing{
    width:1.56rem;
    height:0.32rem;
    overflow: hidden;
    font-size: 0.13rem;
    color: #333333;
    margin-top: 0.1rem;
  }
  .Y-shipin{
    font-size: 0.13rem;
    color: #333333;
    margin-top: 0.05rem;
  }
  .Y-price-p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.17rem;
    padding-bottom: 0.13rem;
  }
  .Y-red-price{
    width:0.5rem;
    height:0.2rem;
    font-size: 0.14rem;
    color: #ff3300;
    background: url(../../../static/assets/img/beijing.jpg);
  }
  .Y-similarity{
    width:0.5rem;
    height:0.2rem;
    border:1px solid #cccccc;
    font-size: 0.12rem;
    color:#999999;
    text-align: center;
    line-height: 0.2rem;
  }
</style>
