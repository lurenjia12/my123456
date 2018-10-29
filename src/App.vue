<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import zdetails from './pages/zdetails'
  import ztabs from './pages/ztabs'
  import couDan from './pages/couDan'
  import carts from './pages/shopCarts'
  import digtalPage from './pages/digtalPage'
  import yindex from './pages/Yindex'
  import pintang from "./pages/pintang"
  import secPage from './pages/secPage'
  export default {
    components:{
      pintang,
      secPage,
      yindex,
      digtalPage,
      carts,
      couDan,
      zdetails,
      ztabs
    }
  }
</script>

<style>
  #app{
    height: 100%;
  }
</style>
