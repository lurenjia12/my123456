<template>
  <div class="z-lists">
    <zlistbase :prolist="prolist"></zlistbase>
    <zlistfooter></zlistfooter>
    <zlist_position></zlist_position>
  </div>
</template>

<script>
   import zlistbase from "./zlistbase"
   import Zlistfooter from "./zlistfooter";
   import Zlist_position from "./zlist_position";
    export default{
     props:["prolist"],
      components:{
        Zlist_position,
        Zlistfooter,
        zlistbase
      }
    }
</script>

<style scoped>
  .z-lists{
    flex:1;
    overflow-y: scroll;
  }
</style>
