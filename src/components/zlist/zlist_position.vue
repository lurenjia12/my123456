<template>
<div class="zlistposition">
 <img class="zlistfooterim-top" src="../../../static/images/zlistfooterimg-top.jpg" alt="">
  <img class="zlistfooterim-bottom" src="../../../static/images/zlistfooterimg-bottom.jpg" alt="">
</div>
</template>

<script>
    export default {
        name: "zlist_position"
    }
</script>

<style scoped>
  .zlistposition img{
    border-radius: 50%;
    opacity: .6;
    width: 0.43rem;
    height: 0.43rem;
  }
  .zlistfooterim-top{
    position: fixed;
    bottom: .2rem;
    left: 3.2rem;
  }
  .zlistfooterim-bottom{
    position: fixed;
    bottom: .8rem;
    left: 3.2rem;
    /*display: none;*/
  }
</style>
