<template>
  <div class="digtalShow">
    <ul class="digtalShowList">
      <digtal-show-list v-for="d in data.digtalShow" :d="d"></digtal-show-list>
    </ul>
  </div>
</template>

<script>
  import data from '../../data/sdigtal'
  import digtalShowList from './digtalShowList'
    export default {
        name: "digtal-show",
      components:{
          digtalShowList
        },
        data(){
          return {
            data
          }
        }
    }
</script>

<style scoped>

</style>
