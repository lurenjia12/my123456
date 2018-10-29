<template>
    <div>
      <nav-box :navlist="contentbox.navbox"></nav-box>
      <bg-span></bg-span>
      <sreading :reading='contentbox.reading'></sreading>
      <bg-span></bg-span>
      <shuangFu :shuangfu="contentbox.shuangfu"></shuangFu>
      <bg-span></bg-span>
      <foods :food="contentbox.food"></foods>
      <bg-span></bg-span>
      <introTa></introTa>
      <bg-span ></bg-span>
      <svideoes v-for="(v,w) in contentbox.svideos" :v="v" :key="w"></svideoes>
      <bg-span></bg-span>
      <introduceBox  v-for="(ox,xy) of sx"  :sx="ox" :key="xy"></introduceBox>

    </div>
</template>

<script>
  import introduceBox from './introduceBox'
  import svideoes from './svideoes'
  import introTa from './sintroTa'
  import foods from './foods'
  import shuangFu from './shuangFu'
  import navBox from './navBox'
  import bgSpan from './bgSpan'
  import sreading from './sreading'
    export default {
      components:{
        navBox,
        bgSpan,
        sreading,
        shuangFu,
        foods,
        introTa,
        svideoes,
        introduceBox,
      },
      props:['contentbox'],
      data(){
        return{
          sx:[]
        }
      },
      created(){
        this.init()
      },
      methods:{
        init(){
          // this.loading=true;
          // let that =this;
          fetch("http://localhost:8080/static/moniJson/detailIntro.json").then((res)=>{
            res.json().then((sx)=>{
              this.sx=sx
              // console.log(this.sx)
              // that.loading=false
            })
          })
        }
      }
    }
</script>

<style scoped>

</style>
