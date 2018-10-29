<template>
  <div class="box">
    <!-- 选项卡 -->
    <div class="nav" style="display: flex;">
      <div class="nav_left">
        <a href="javascript:;" @click="str=0" :class="{'box_a':str==0}">为您推荐</a>
        <a href="javascript:;" @click="str=1" :class="{'box_a':str==1}">干货食品</a>
        <a href="javascript:;" @click="str=2" :class="{'box_a':str==2}">生鲜食品</a>
        <a href="javascript:;" @click="str=3" :class="{'box_a':str==3}">进口食品</a>
        <a href="javascript:;" @click="str=4" :class="{'box_a':str==4}">乳品饮料</a>
        <a href="javascript:;" @click="str=5" :class="{'box_a':str==5}">中外名酒</a>
        <a href="javascript:;" @click="str=6" :class="{'box_a':str==6}">厨卫清洁</a>
        <!--<a href="javascript:;" @click="str=7" :class="{'box_a':str==7}">母婴童装</a>-->
        <a href="javascript:;" @click="str=8" :class="{'box_a':str==8}">玩具乐器</a>
        <a href="javascript:;" @click="str=9" :class="{'box_a':str==9}">美容护理</a>
        <a href="javascript:;" @click="str=10" :class="{'box_a':str==10}">宠物生活</a>
        <a href="javascript:;" @click="str=11" :class="{'box_a':str==11}">家居家纺</a>
        <a href="javascript:;" @click="str=12" :class="{'box_a':str==12}">服饰内衣</a>
        <a href="javascript:;" @click="str=13" :class="{'box_a':str==13}">箱包珠宝</a>
        <a href="javascript:;" @click="str=14" :class="{'box_a':str==14}">鞋靴运动</a>
        <a href="javascript:;" @click="str=15" :class="{'box_a':str==15}">数码手机</a>
        <a href="javascript:;" @click="str=16" :class="{'box_a':str==16}">家用电器</a>
        <a href="javascript:;" @click="str=17" :class="{'box_a':str==17}">电脑办公</a>
        <a href="javascript:;" @click="str=18" :class="{'box_a':str==18}">营养保健</a>
        <a href="javascript:;" @click="str=19" :class="{'box_a':str==19}">图书杂志</a>
      </div>
      <div class="nav_right" @click="go">
        <!-- 为您推荐 -->
          <ul v-show="str===0">
            <li  class="nav_right_box1">
              <div v-for="p in et">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{p.word}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="s of p.smallbox">
                  <a href="#">
                    <img :src="s.img" alt="">
                    <span>{{s.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 干货食品 -->
          <ul v-show="str===1">
            <li  class="nav_right_box1">
              <div v-for="a in et1">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{a.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="g of a.smallbox">
                  <a href="#">
                    <img :src="g.img" alt="">
                    <span>{{g.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 生鲜食品 -->
          <ul v-show="str===2">
            <li  class="nav_right_box1">
              <div v-for="b in et2">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{b.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="h of b.smallbox" :key=h.id>
                  <a href="#">
                    <img :src="h.img" alt="">
                    <span>{{h.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 进口食品 -->
          <ul v-show="str===3">
            <li  class="nav_right_box1">
              <div v-for="c in et3" :key=c.id>
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{c.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="i of c.smallbox">
                  <a href="#">
                    <img :src="i.img" alt="">
                    <span>{{i.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 乳品饮料 -->
          <ul v-show="str===4">
            <li  class="nav_right_box1">
              <div v-for="d in et4" :key="d.id">
                <h3 class="navrightbox1divh3"><a href="" style="margin-top: -0.0rem;">{{d.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="j of d.smallbox">
                  <a href="#">
                    <img :src="j.img" alt="">
                    <span>{{j.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 中外名酒 -->
          <ul v-show="str===5">
            <li  class="nav_right_box1">
              <div v-for="e in et5">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{e.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="k of e.smallbox">
                  <a href="#">
                    <img :src="k.img" alt="">
                    <span>{{k.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 厨卫清洁 -->
          <ul v-show="str===6">

            <li  class="nav_right_box1">
              <div v-for="f in et6">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{f.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="l of f.smallbox" :key="l.id">
                  <a href="#">
                    <img :src="l.img" alt="">
                    <span>{{l.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
           <!--母婴童装 -->
          <!--<ul v-show="str===7">-->
            <!--<li  class="nav_right_box1">-->
              <!--<div v-for="bc in et7">-->
                <!--<h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{bc.word[0]}}</a></h3>-->
                <!--<ul class="nav_right_box1_ul" v-for="def of bc.smallbox">-->
                  <!--<a href="#">-->
                    <!--<img :src="def.img" alt="">-->
                    <!--<span>{{def.cont}}</span>-->
                  <!--</a>-->
                <!--</ul>-->
              <!--</div>-->
            <!--</li>-->
        <!--</ul>-->
        <!--玩具乐器 -->
          <ul v-show="str===8">
            <li  class="nav_right_box1">
              <div v-for="bb in et8">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{bb.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="hh of bb.smallbox">
                  <a href="#">
                    <img :src="hh.img" alt="">
                    <span>{{hh.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 美容护理 -->
          <ul v-show="str===9">
            <li  class="nav_right_box1">
              <div v-for="cc in et9">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{cc.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="ii of cc.smallbox">
                  <a href="#">
                    <img :src="ii.img" alt="">
                    <span>{{ii.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 宠物生活 -->
          <ul v-show="str===10">
            <li  class="nav_right_box1">
              <div v-for="dd in et10">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{dd.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="jj of dd.smallbox">
                  <a href="#">
                    <img :src="jj.img" alt="">
                    <span>{{jj.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 家居家纺 -->
          <ul v-show="str===11">
            <li  class="nav_right_box1">
              <div v-for="ee in et11">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{ee.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="kk of ee.smallbox">
                  <a href="#">
                    <img :src="kk.img" alt="">
                    <span>{{kk.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 服饰内衣 -->
          <ul v-show="str===12">
            <li  class="nav_right_box1">
              <div v-for="ff in et12">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{ff.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="ll of ff.smallbox">
                  <a href="#">
                    <img :src="ll.img" alt="">
                    <span>{{ll.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 箱包珠宝 -->
          <ul v-show="str===13">
            <li  class="nav_right_box1">
              <div v-for="aaa in et13">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{aaa.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="ggg of aaa.smallbox">
                  <a href="#">
                    <img :src="ggg.img" alt="">
                    <span>{{ggg.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 鞋靴运动 -->
          <ul v-show="str===14">
          <li  class="nav_right_box1">
            <div v-for="bbb in et14">
              <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{bbb.word[0]}}</a></h3>
              <ul class="nav_right_box1_ul" v-for="hhh of bbb.smallbox">
                <a href="#">
                  <img :src="hhh.img" alt="">
                  <span>{{hhh.cont}}</span>
                </a>
              </ul>
            </div>
          </li>
        </ul>
        <!-- 数码手机 -->
          <ul v-show="str===15">
            <li  class="nav_right_box1">
              <div v-for="ccc in et15">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{ccc.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="iii of ccc.smallbox">
                  <a href="#">
                    <img :src="iii.img" alt="">
                    <span>{{iii.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!--家用电器 -->
          <ul v-show="str===16">
            <li  class="nav_right_box1">
              <div v-for="ddd in et16">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{ddd.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="jjj of ddd.smallbox">
                  <a href="#">
                    <img :src="jjj.img" alt="">
                    <span>{{jjj.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 电脑办公 -->
          <ul v-show="str===17">
            <li  class="nav_right_box1">
              <div v-for="eee in et17">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{eee.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="kkk of eee.smallbox">
                  <a href="#">
                    <img :src="kkk.img" alt="">
                    <span>{{kkk.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        <!-- 营养保健 -->
          <ul v-show="str===18">
            <li  class="nav_right_box1">
              <div v-for="fff in et18">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{fff.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="lll of fff.smallbox">
                  <a href="#">
                    <img :src="lll.img" alt="">
                    <span>{{lll.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
         <!-- 图书杂志 -->
          <ul v-show="str===19">

            <li  class="nav_right_box1">
              <div v-for="aaaa in et19">
                <h3 class="navrightbox1divh3">•<a href="" style="margin-top: -0.0rem;">{{aaaa.word[0]}}</a></h3>
                <ul class="nav_right_box1_ul" v-for="gggg of aaaa.smallbox">
                  <a href="#">
                    <img :src="gggg.img" alt="">
                    <span>{{gggg.cont}}</span>
                  </a>
                </ul>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "ztb",
    data() {
      return {
        str: 0,
        et: [],
        et1: [],
        et2: [],
        et3: [],
        et4: [],
        et5: [],
        et6: [],
        et7: [],
        et8: [],
        et9: [],
        et10: [],
        et11: [],
        et12: [],
        et13: [],
        et14: [],
        et15: [],
        et16: [],
        et17: [],
        et18: [],
        et19: []
      }
    },
    created() {
      this.inits()
    },
    methods: {
      inits(){
        fetch("http://localhost:8080/static/mock/ztb.json").then((res) => {
          res.json().then((data) => {
            console.log(data);
            this.et = data.word1[0].s1;
            // console.log(this.et);
            this.et1 = data.word2[0].s2;
            this.et2 = data.word3[0].s2;
            this.et3 = data.word4[0].s2;
            this.et4 = data.word5[0].s2;
            this.et5 = data.word6[0].s2;
            this.et6 = data.word7[0].s2;
            this.et7 = data.word8[0].s2;
            this.et8 = data.word9[0].s2;
            this.et9 = data.word10[0].s2;
            this.et10 = data.word11[0].s1;
            this.et11= data.word12[0].s2;
            this.et12= data.word13[0].s2;
            this.et13= data.word14[0].s2;
            this.et14= data.word15[0].s2;
            this.et15= data.word16[0].s2;
            this.et16= data.word17[0].s2;
            this.et17= data.word18[0].s2;
            this.et18= data.word19[0].s2;
            this.et19= data.word20[0].s2;
          })
        })

      },
      go(){
        this.$router.push({"path": "/zl"})
      },
      mounted(){
        // this.chan()
      }
    }
  }


</script>

<style scoped>
  .nav_right_box1 div{
    overflow: hidden;
  }
  .box{
    flex:1;
    overflow-y: scroll;
  }
</style>
