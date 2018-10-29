<template>

  <div class="s-introTa">
    <div class="s-introleft">
      <h1 class="s-leftH1">{{sx.title}}</h1>
      <h6 class="s-leftH6">{{sx.author}}&nbsp;&nbsp;|&nbsp;&nbsp;{{sx.num}}人浏览</h6>
    </div>
    <img :src="sx.pic" class="s-introPic"/>
  </div>
</template>

<script>
  export default {

    props:["sx"]


  }
</script>

<style scoped>

</style>
