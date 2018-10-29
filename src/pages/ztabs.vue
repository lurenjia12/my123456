<template>
<div class="zt" >
      <zth></zth>
      <ztb></ztb>
      <ztf></ztf>
</div>
</template>

<script>
  import '../../static/css/tabs.css'
    import Zth from "../components/ztb/zth";
    import Ztf from "../components/ztb/ztf";
    import Ztb from "../components/ztb/ztb";
    export default {
        name: "ztabs",
      components: {Ztb, Ztf, Zth},
      methods:{
        // go(){
        //   this.$router.push({"path": "/zl"})
        // }
      }

    }

</script>

<style scoped>
  .zt{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
