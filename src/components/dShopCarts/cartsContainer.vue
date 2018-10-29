<template>
  <div class="d-container">


    <!-- 购物详情 -->
    <div class="d-shopping">
      <div class="d-shop-group-item">
        <div class="d-shop-name">
          <input type="checkbox" class="d-check"/>
          <h4 class="d-h4">自营</h4>
          <div class="coupons">免运费</div>
        </div>
        <ul>


          <li>
            <div class="d-activity">
              <p class="d-activity-tit">
                满减
              </p>
              <p class="d-activity-con">
                购满￥399.0立减<span>￥100.0</span>，还差<span>￥190.0</span>
              </p>
              <a href="http://localhost:8080/#/couDan">凑单 ></a>
            </div>
            <div class="d-shop-info">
              <input type="checkbox" class="d-check"/>
              <div class="d-shop-information">
                <div class="d-snapUp">
                  <span>抢购中</span> <span>抢购结束时间： 10月16日 09:59</span>
                </div>
                <div class="d-shop-info-01">
                  <div class="d-shop-info-img">
                    <a href="javascript:;">
                      <img src="../../../static/images/carts/goods01.png" alt=""/>
                    </a>
                  </div>
                  <div class="d-shop-info-text">
                    <h4>好奇 Huggies 铂金装 超薄透气纸尿裤 L96+8片 大号尿不湿</h4>
                    <div class="shop-brief">纸尿裤L104</div>
                    <div class="shop-price">
                      <div class="shop-pices">
                        ￥<b class="price">209.0</b>
                      </div>
                      <div class="shop-arithmetic">
                        <a href="javascript:;" class="minus">-</a>
                        <span class="num">1</span>
                        <a href="javascript:;" class="plus">+</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-promotion">
                  <div class="d-promotion-left">
                    <div class="promotion-01">促销</div>
                    <p>满399元减100元</p>

                  </div>
                  <div class="d-amend">
                    修改
                  </div>
                </div>
              </div>



            </div>

          </li>
          <li>
            <div class="d-activity">
              <p class="d-activity-tit">
                换购
              </p>
              <p class="d-activity-con">
                已购满￥7.0，可优惠换购
              </p>
              <a href="javascript:;">换购商品 ></a>
            </div>
            <div class="d-shop-info">
              <input type="checkbox" class="d-check"/>
              <div class="d-shop-information">
                <div class="d-snapUp">
                  <span>抢购中</span> <span>抢购结束时间： 10月16日 09:59</span>
                </div>
                <div class="d-shop-info-01">
                  <div class="d-shop-info-img">
                    <a href="javascript:;">
                      <img src="../../../static/images/carts/goods02.png" alt=""/>
                    </a>
                  </div>
                  <div class="d-shop-info-text">
                    <h4>海天 生抽酱油 1.9L</h4>
                    <div class="shop-brief">海天 生抽酱油 1.9L</div>
                    <div class="shop-price">
                      <div class="shop-pices">
                        ￥<b class="price">9.8</b>
                      </div>
                      <div class="shop-arithmetic">
                        <a href="javascript:;" class="minus">-</a>
                        <span class="num">1</span>
                        <a href="javascript:;" class="plus">+</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>



            </div>

          </li>

        </ul>
      </div>
    </div>

    <!-- 猜你喜欢 -->
    <div class="d-like">
      <h4>猜你喜欢</h4>
      <ul class="d-like-list">
        <li class="d-list-01" v-for="data in dLike">
          <img :src="data.pic" alt="" class="d-list-img"/>
          <h5>{{data.title}}}</h5>
          <div class="d-list-price">
            <span>￥{{data.price}}</span>
            <a href="javascript:;">
              <img src="../../../static/images/carts/carts-icon.png" alt=""/>
            </a>

          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>

    export default {
    props:["dLike"]
    }
</script>

<style scoped>

</style>
