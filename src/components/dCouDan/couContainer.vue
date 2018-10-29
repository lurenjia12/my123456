<template>
  <div class="d-container">


    <!-- 优惠政策、活动时间  -->
    <div class="d-activity-txt" id="d-top">
      <div>满268元减50元，满399元减100元</div>
      <p>活动时间： 2018-10-10~2018-10-16</p>
    </div>
    <!-- 分类、品牌等导航 -->
    <div class="d-nav" id="d-navbg">
      <ul>
        <li class="d-sort">
          <a href="javascript:;">
            <span>分类</span>
            <img src="../../../static/images/carts/sanjiao-red.png" alt=""/>
          </a>

        </li>
        <li class="d-brand">
          <a href="javascript:;">
            <span>品牌</span>
            <img src="../../../static/images/carts/sanjiao-green.png" alt=""/>
          </a>

        </li>
        <li class="d-rank">
          <a href="javascript:;">
            <span>综合排序</span>
            <img src="../../../static/images/carts/sanjiao-red.png" alt=""/>
          </a>

        </li>
        <li class="d-filtrate">
          <a href="javascript:;">
            <span>筛选</span>
            <img src="../../../static/images/carts/sanjiao-green.png" alt=""/>
          </a>

        </li>

      </ul>

    </div>
    <!-- 商品信息 -->
    <div class="d-sort-info">
      <ul>
        <li v-for="data in dSort">
          <img class="d-sort-list" :src="data.pic" alt="">
          <div class="d-info-desc">
            <div class="d-info-tit">
              <span class="d-self">自营</span>
             {{data.title}}

            </div>
            <div class="d-discount">
              满268减50
            </div>
            <div class="d-info-price">
              <div class="d-price-left">
                <div class="price-left-top">
                  ￥<span>{{data.price}}</span>.0
                </div>
                <div class="price-left-bot">
                  <span>3826915条评论</span>
                  <span><strong>98%</strong>好评</span>
                </div>
              </div>
              <a href="javascript:;">
                <img src="../../../static/images/carts/carts-icon.png" alt="">
              </a>

            </div>
          </div>
        </li>

      </ul>

    </div>

  </div>
</template>

<script>
    export default {
      props:["dSort"]
    }
</script>

<style scoped>

</style>
