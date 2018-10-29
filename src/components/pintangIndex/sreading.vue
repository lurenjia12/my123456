<template>
  <div class="reading">
    <h1 class="s-conTitle">{{reading.title}}</h1>
    <div class="readingShow">
      <!-- <img src="../../../static/img/reading1.jpg"/> -->
      <!-- <img src="../../../static/img/reading2.jpg"/>
      <img src="../../../static/img/reading3.jpg"/> -->
      <img  v-for="r in reading.pic" :src="r"/>
    </div>
    <div class="s-readown">
      <h6>{{reading.author}}&nbsp;&nbsp;|&nbsp;&nbsp;{{reading.num}}人浏览</h6>
      <span class="s-goodsCounts">{{reading.counts}}件宝贝</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "sreading",
        props:['reading']
    }
</script>

<style scoped>

</style>
