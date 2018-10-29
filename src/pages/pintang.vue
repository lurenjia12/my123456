<template>
  <div class="pingtangBox">
    <headerOnePinTang :header="data.header"></headerOnePinTang>
    <box :content="data.content"></box>
    <footerOneTang ></footerOneTang>
  </div>
</template>

<script>
    import '../../static/css/1pintang.css'
    import footerOneTang from "../components/pintangIndex/footerOneTang"
    import headerOnePinTang from "../components/pintangIndex/headerOnePinTang"
    import box from "../components/pintangIndex/box"
    import data from '../data/data.js'
    export default {
      data() {
        return {
          data
        }
      },
        components:{
          footerOneTang,
          headerOnePinTang,
          box
        }
    }
</script>

<style scoped>
  .pingtangBox{
    height: 100%;
    display: flex;
    flex-direction: column;
    background: white;
  }
</style>
