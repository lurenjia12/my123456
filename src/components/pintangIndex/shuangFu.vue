<template>
  <div>
    <h1 class="s-conTitle">面试职场,实力洗护刷满清爽分值</h1>
    <div class="readingShow">
      <!--<img src="../../../static/img/shuangfu1.jpg" />-->
      <!--<img src="../../../static/img/shuangfu2.jpg"/>-->
      <!--<img src="../../../static/img/shuangfu3.jpg"/>-->
      <img :src="s" v-for="s in shuangfu" />
    </div>
  </div>
</template>

<script>
    export default {
      props:['shuangfu']
    }
</script>

<style scoped>

</style>
