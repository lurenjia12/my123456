<template>
<div class="boxs">
  <zbanner :pf="pf.swiper"></zbanner>
  <zcon :pf="pf"></zcon>
  <zlook></zlook>
  <zshop></zshop>
  <zlike></zlike>
  <zsmallBox></zsmallBox>
  <zdgoonterms></zdgoonterms>
  <zdevaluation></zdevaluation>
  <zdmembers></zdmembers>
  <zdfooter></zdfooter>
</div>
</template>

<script>
  import '../../static/css/tabs-Product details.css'
  import zbanner from "../components/zdetalis/zbanner"
  import zcon from "../components/zdetalis/zcon"
  import zlook from "../components/zdetalis/zlook"
  import Zdevaluation from "../components/zdetalis/zdevaluation";
  import Zdfooter from "../components/zdetalis/zdfooter";
  import Zdgoonterms from "../components/zdetalis/zdgoonterms";
  import Zdmembers from "../components/zdetalis/zdmembers";
  import Zlike from "../components/zdetalis/zlike";
  import Zshop from "../components/zdetalis/zshop";
  import ZsmallBox from "../components/zdetalis/zsmallBox";

    export default {
      name:"zdetails",
        components:{
          ZsmallBox,
          zbanner,
          Zshop,
          Zlike,
          Zdmembers,
          Zdgoonterms,
          Zdfooter,
          Zdevaluation,
          zcon,zlook,
        },
      created(){
        this.inits()

      },
      data(){
        return{
          pf:""
        }
      },
      methods:{
        inits(){
          let p=this.$route.query.id;
          console.log(p);
          fetch("http://localhost:8080/static/mock/zp.json").then((res)=>{
            res.json().then((data)=>{
              for(var i=0;i<data.length;i++) {
                if(data[i].id==p){
                  this.pf=data[i]
                  console.log(data[i]);
                }
                // console.log(data[i]);
              }
            })
          })

        }
      }
    }
</script>

<style scoped>

</style>
