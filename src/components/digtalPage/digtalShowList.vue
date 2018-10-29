<template>
  <li class="digtalListBox">
    <div class="liLeft">
      <h2>{{d.title}}</h2>
      <p>{{d.author}}   | {{d.num}}人浏览</p>
    </div>
    <div class="liRight">
      <img :src="d.pic" alt="" />
    </div>
  </li>
</template>

<script>
    export default {
      name: "digtal-show-list",
      props:['d']
    }
</script>

<style scoped>

</style>
