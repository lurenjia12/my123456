<template>
  <!--<div class="searchLookSame">-->
    <ul class="sameLikeList" :slist="slist">
        <same-list ></same-list>
    </ul>
  <!--</div>-->
</template>

<script>
  import sameList from 'sameLikeList'
    export default {
      components:{
        sameList
      },
      props:['slist']

    }
</script>

<style scoped>

</style>
