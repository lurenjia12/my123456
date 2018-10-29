<template>
  <div class="s-videoes">
    <h1 class="s-conTitle">{{v.title}}</h1>
    <img :src="v.pic" class="s-video" />
    <h6 class="s-leftH6">{{v.author}}&nbsp;&nbsp;|&nbsp;&nbsp;{{v.num}}次播放</h6>
    <a href="" class="s-share"><img src="../../../static/img/fenxiang.jpg"/></a>
  </div>
</template>

<script>
    export default {
      props:['v']
    }
</script>

<style scoped>

</style>
