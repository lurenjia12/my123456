<template>
  <div>
    <regin-header></regin-header>
    <sdig-banner></sdig-banner>
    <digtal-show></digtal-show>
  </div>
</template>

<script>
  import '../../static/css/DigitalPage.css'
  import reginHeader from '../components/digtalPage/reginHeader'
  import digtalShow from  '../components/digtalPage/digtalShow'
  import sdigBanner from  '../components/digtalPage/sdigBanner'
    export default {
        name: "digtal-page",
      components:{
        sdigBanner,
        digtalShow,
        reginHeader
      }
    }
</script>

<style scoped>

</style>
