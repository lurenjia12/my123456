<template>
  <div class="z-con">
    <h6 > <i>自营</i>{{pf.title}}</h6>
    <h5>￥<b>{{pf.price}}</b>.0</h5>
    <ul>
      <h4>规格<span>喜力500ml*18听</span></h4>
      <a href=""><img :src="pf.pice" alt=""></a>
    </ul>
    <ul>
      <h4>配送<span>陕西 西安市 新城区</span><i>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp现货，由1号店发货，并提供售后服务。11:10<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp后下单，预计明天（10月25日）送达</i></h4>
      <a href=""><img :src="pf.pice" alt=""></a>
    </ul>
    <ul>
      <h4>参数<span>产品参数&包装清单</span></h4>
      <a href=""><img src="../../../static/images/z-d-c-r.jpg" alt=""></a>
    </ul>
    <ul class="z-d-xtb">
      <h6 style="border: 0;">服务</h6>
      <div class="z-d-xtb-div">
        <div>
          <img src="../../../static/images/z-d-c-l.jpg" alt="">
          <b>准时达</b>
        </div>
        <div>
          <img src="../../../static/images/z-d-c-l.jpg" alt="">
          <b>满86元免基础运费（20kg内）</b>
        </div>
        <div>
          <img src="../../../static/images/z-d-c-l.jpg" alt="">
          <b>正品保障</b>
        </div>
        <div>
          <img src="../../../static/images/z-d-c-l.jpg" alt="">
          <b>支持7天无理由退货</b>
        </div>
      </div>
      <a href=""><img src="../../../static/images/z-d-c-r.jpg" alt=""></a>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "zcon",
      props:["pf"]
    }
</script>

<style scoped>

</style>
