<template>
    <div class="z-list_base" @click="go(p.id)">
      <img  :src="p.pice" alt="">
      <div class="z-list_base_right">
        <h6> <i>自营</i>{{p.title}}</h6>
        <h5>满80减10</h5>
        <h4>￥ <b>{{p.price}}</b>.0</h4>
        <ul>
          <h3>评论{{p.pl}}万+条 <a>{{p.bfb}}%</a>好评</h3>
          <img :src="p.picc" alt="">
        </ul>
      </div>

</div>
</template>

<script>
    export default {
      props:["p"],
      name: "zlistson",
      data(){
        return{
            pro:""
        }
      },
      methods:{
        go(sid){
          // console.log(sid);
          this.$router.push({"path": "/ze", "query": {"id":sid}})
        }
      }
    }
</script>

<style scoped>
.z-list_base_right h6{
  border: none;
}
</style>
