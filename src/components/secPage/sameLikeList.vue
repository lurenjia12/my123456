<template>
  <div>
    <li class="sameLike" v-for="m in slist " :key="m.id">
      <a href=""><img :src="m.pice" /></a>
      <div class="slistRight">
        <h5>{{m.title}}</h5>
        <div class="slistDown">
          <span>￥<b>{{m.price}}</b></span>
          <a  href=""  class="zhaoxiangsi">找相似</a>

        </div>
      </div>
    </li>
  </div>
</template>

<script>
    export default {
        name: "same-like-list",
      props:['slist'],

    }
</script>

<style scoped>

</style>
