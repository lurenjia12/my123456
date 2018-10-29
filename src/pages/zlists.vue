<template>
  <div class="boxs" v-if="!loading">
    <zheaderone></zheaderone>
    <zheadertwo></zheadertwo>
    <zlist :prolist="prolist"></zlist>
  </div>
</template>
<script>
  import '../../static/css/tabs-Product.css'
  import $ from "jquery"
  import zlist from "../components/zlist/zlist"
  import Zheaderone from "../components/zlist/zheaderone";
  import Zheadertwo from "../components/zlist/zheadertwo";
    export default {
       components:{
         Zheadertwo,
         Zheaderone,
         zlist
       },
      data(){
         return{
            prolist:[],
           loading:false,
           ord:""
         }
      },
      created(){
        this.init()
      },
      methods:{
         init(){
           this.loading=true;
           let that = this;
            fetch("http://localhost:8080/static/mock/zp.json").then((res)=>{
              res.json().then((data)=>{
                for(var i=0;i<data.length;i++) {
                  this.prolist=data;
                  that.loading=false;
                }
              })
            })
          },
          // abb(){
          //   $(document).scroll(function(){
          //     console.log($(".z-list").scrollTop());
          //     if($(".z-list").scrollTop()>=30){
          //       $(".zlistfooterim-bottom").show();
          //       console.log(1)
          //     }else if($(".z-list").scrollTop()<30){
          //       $(".zlistfooterim-bottom").hide();
          //     }
          //   })
          // },
          //点击回到顶部
          add(){
            $(".zlistfooterim-top").click(function () {
                $("html,body").animate({scrollTop:0}, 500);
              }
            )
          },

        },
      updated(){
         // this. abb(),
           this.add()
      }
    }
</script>

<style scoped>
  html,body{
    height:100%;
  }
  .boxs{
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background:#ffffff;
  }


</style>
