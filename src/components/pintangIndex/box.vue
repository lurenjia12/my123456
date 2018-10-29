<template>
  <div id="box">
    <silder :content="content.slider" :x="content.slider"></silder>
    <afternoonTea></afternoonTea>
    <!--<content-box :navlist="content.navbox"></content-box>-->
    <content-box :contentbox="content"></content-box>
  </div>
</template>

<script>
  import silder from "./slider"
  import afternoonTea from './afternoonTea'
  import  contentBox from './contentBox'
    export default {
      components:{
        silder,
        afternoonTea,
        contentBox
      },
      props:['content'],

    }
</script>

<style scoped>

</style>
