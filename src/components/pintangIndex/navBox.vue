<template>
  <nav>
    <!--<a href=""><img src="../../../static/img/5.jpg"/></a>-->
    <!--<a href=""><img src="../../../static/img/6.jpg"/></a>-->
    <!--<a href=""><img src="../../../static/img/7.jpg"/></a>-->
    <!--<a href=""><img src="../../../static/img/8.jpg"/></a>-->
    <!--<a href=""><img src="../../../static/img/9.jpg"/></a>-->
    <!--<a href=""><img src="../../../static/img/10.jpg"/></a>-->
    <a :href="a.href" v-for="a in navlist"><img :src="a.pic"></a>
  </nav>
</template>

<script>
    export default {
        name: "navBox",
      props:['navlist']
    }
</script>

<style scoped>

</style>
