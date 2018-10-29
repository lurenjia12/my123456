<template>
  <div class="Y-header-top">
    <Yheader></Yheader>
    <Ysection class="Y-section" :tn="Singleproduct" :tm="picture" :god="goods"></Ysection>
    <footer-one></footer-one>
  </div>
</template>
<script>
  import '../../static/css/index.css'
  import Yheader from '../components/Y-index/header'
  import Ysection from '../components/Y-index/Section'
  import footerOne from '../components/Y-index/footerOneTang'
  export default {
    data(){
      return{

          Singleproduct:[
            {
              title:"鲁花 食用油 5S物理压榨 压榨一级 花生油 6.18L（新老包装、赠品随机发放）%天然椰子水果汁饮料500ml*12瓶整箱",
              price:"159.8",
              oldprice:"199.9",
              src:'static/assets/img/luhua.jpg'
            },
            {
              title:"蓝月亮洗衣液10.32斤套装：薰衣草2kg*2+预涂手洗500g*2+旅行装80g*2/箱",
              price:"79.8",
              oldprice:"114",
              src:'static/assets/img/lanyueliang.jpg'
            },
            {
              title:"护舒宝(Whisper)超薄日夜组合云感超净棉卫生巾套装84片（240mm*60p+ 夜用317mm 16p+超长夜用425mm*8p）",
              price:"56.9",
              oldprice:"160",
              src:'static/assets/img/hushubao.jpg'
            },
            {
              title:"纽曼 (Newmine) NM-SL80无线蓝牙运动通话音乐蓝牙耳机 入耳式 立体声 轻巧佩戴舒适 通用型",
              price:"49.9",
              oldprice:"199",
              src:'static/assets/img/niuman.jpg'
            },
            {
              title:"三星（SAMSUNG）256GB TF（MicroSD）存储卡 U3 4K EVO升级版+ 读速100MB/s 写速90MB/s 完美释放设备潜能",
              price:"338",
              oldprice:"1199",
              src:'static/assets/img/sanxing1.jpg'
            },
            {
              title:"金龙鱼 食用油 非转基因 压榨 玉米油5L(赠品随机捆绑) 新老包装随机发货",
              price:"67.8",
              oldprice:"80",
              src:'static/assets/img/jinlongyu1.jpg'
            },
            {
              title:"崇明岛 米大王6号 真空包装大米 10Kg",
              price:"99.9",
              oldprice:"119.6",
              src:'static/assets/img/chongmingdao.jpg'
            },
            {
              title:"楼兰蜜语 黑桑葚干225g 罐装 蜜饯果干 野生桑果桑椹子 无沙黑桑椹干",
              price:"34.8",
              oldprice:"44.9",
              src:"static/assets/img/loulanmiyu.jpg"
            }
          ],
          picture:[
              {src:'static/assets/img/hujihua.jpg'},
              {src:'static/assets/img/jialeshi.jpg'},
              {src:'static/assets/img/jinlongyu.jpg'},
              {src:'static/assets/img/jinlongyu.jpg'},
              {src:'static/assets/img/niumaifu.jpg'},
              {src:'static/assets/img/ouliweilan.jpg'},
              {src:'static/assets/img/xiangmanyuan.jpg'}
            ],
          goods:[
            {
              title:"超轻作战靴男透气户外登山鞋子防水防滑陆战靴沙漠徒步鞋男作战鞋山地鞋战术靴伞兵空降靴特勤鞋军迷鞋防爆靴 黑色 43 （265）",
              src:"static/assets/img/590d9f05N4391af2e.jpg",
              price:"145.0"
            },
            {
              title:"朴坊（SIMPLE MILL） 植物香屑袋柜子衣橱抽屉香包香薰包室内香袋除味道香氛 海风",
              src:"static/assets/img/599e8837Ncc133c1f.jpg",
              price:"145.0"
            },
            {
              title:"翻旧事 创意家居装饰小摆件 复古地球仪工艺品摆件 家居客厅书房装饰摆设 大号地球仪",
              src:"static/assets/img/diqiuyi.jpg",
              price:"19.9"
            },
            {
              title:"米子家居 仿真花假花娟花干花玻璃花瓶客厅餐桌摆件装饰玫瑰花艺 米白色款",
              src:"static/assets/img/56ee1e0aNe1701434.jpg",
              price:"59.9"
            },
            {
              title:"吉善缘 陶瓷特大号招财猫 电动摇手发财猫新店铺开业创意礼物收银台装饰摆件 0487 大号摇手财福双全",
              src:"static/assets/img/5b5bd4d6N8421811a.jpg",
              price:"168.0"
            },
            {
              title:"翻旧事 复古怀旧敞篷劳斯莱斯老爷车汽车铁皮模型创意摆件家居收藏装饰品 MK8136-W",
              src:"static/assets/img/rBEbRVN2wB4IAAAAAANxifIn2u0AABlYALsDbEAA3Gh858.jpg",
              price:"180.0"
            },
            {
              title:"电狐 卷翘睫毛夹弾力睫毛辅助工具广角双线卷翘化妆工具效果经久卷翘弧度快速成型易用手感舒适 粉白色",
              src:"static/assets/img/5a8af0b5Nba858954.jpg",
              price:"138.0"
            },
            {
              title:"翻旧事 创意装饰品家居摆设 复古铁皮老式电影放映机模型 摄影道具酒吧摆件礼品",
              src:"static/assets/img/rBEhVlJWW6IIAAAAAAV89g5gWdcAAEBBgPcp4wABX0O793.jpg",
              price:"166.0"
            },
            {
              title:"魔音beats powerbeats2耳塞套入耳式耳机蓝牙耳帽硅胶套耳机配件 黑色（四种一样一套）",
              src:"static/assets/img/59196b79N4d98dba3.jpg",
              price:"16.0"
            },
            {
              title:"吉善缘 铜关公摆件 关二爷关羽武财神关公财神爷佛像乔迁开业工艺礼品 3302 大号《忠义盖世》",
              src:"static/assets/img/de043e5fb52380e0.jpg",
              price:"2480.0"
            },
            {
              title:"蘑菇堡 北欧客厅装饰画卧室挂画玄关走廊挂画卧室装饰画餐厅背景墙壁画三联字画 水果自行车（正方形）一套3幅 40*40cm 浅木框",
              src:"static/assets/img/5a05601eNdb4dab3b.jpg",
              price:"229.0"
            },
            {
              title:"wedoking硅胶耳塞 入耳式耳机硅胶套 耳机冒 耳机硅胶套",
              src:"static/assets/img/57ebf4edN9f5577ed.jpg",
              price:"14.0"
            }
          ]
         }
    },
      components:{
        Yheader,
        Ysection,
        footerOne
      },

    }
</script>

<style scoped>
.Y-header-top{
  height:100%;
  display: flex;
  flex-direction: column;
}
  .Y-section{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
