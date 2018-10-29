<template>
  <div class="header" >
    <img :src="header.img" />
    <div class="header_down">
      <a v-for="item in header.nav"
         :key="item.href"
         :href="item.href"
         class="hotPoint">{{item.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header']
}
</script>

<style scoped>

</style>
