<template>
  <div class="reading">
    <h1 class="s-conTitle">{{food.title}}</h1>
    <div class="readingShow">
      <img v-for="f in food.pic" :src="f" />
      <!--<img src="../../../static/img/peanuts2.jpg"/>-->
      <!--<img src="../../../static/img/peanuts3.jpg"/>-->
    </div>
    <div class="s-readown">
      <h6>{{food.author}}&nbsp;&nbsp;|&nbsp;&nbsp;{{food.num}}人浏览</h6>
      <span class="s-goodsCounts">{{food.counts}}件宝贝</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "foods",
      props:['food']
    }
</script>

<style scoped>

</style>
