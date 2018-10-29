<template>
    <div>
      <Zlistson :p="lis" v-for="(lis) in prolist" :key="lis.id"></Zlistson>
    </div>
</template>

<script>
  import Zlistson from "./zlistson";
  export default {
    props:["prolist"],
    components: {Zlistson}
  }
</script>

<style scoped>

</style>
