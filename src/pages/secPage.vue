<template>
  <div v-if="!loading" class="ssecbg">
    <sec-header></sec-header>
    <same-like-list :slist="slist"></same-like-list>
  </div>
</template>

<script>
  import '../../static/css/secPage.css'
  import sameLikeList from '../components/secPage/sameLikeList'
  import secHeader  from '../components/secPage/secHeader'
    export default {
      name: "sec-page",
      components:{
        sameLikeList,
        secHeader
      },
      data() {
        return {
          slist: [],
          loading: false
        }
      },
      created(){
        this.init()
      },
      methods:{
        init(){
          this.loading=true;
          let that =this;
          fetch("http://localhost:8080/static/moniJson/zp.json").then((res)=>{
            res.json().then((data)=>{
                this.slist=data
                that.loading=false
            })
          })
        }
      }
    }
</script>

<style scoped>
  .ssecbg{
    background: #ffffff;

  }
</style>
